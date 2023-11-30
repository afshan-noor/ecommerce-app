import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from "react";

interface CartItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

interface CartState {
  [x: string]: any;
  cart: CartItem[];
  totalAmount: number;
}

type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "SET_CART"; payload: CartItem[] }
  | { type: string; payload?: any };

interface CartContextProps {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

const initialState: CartState = {
  cart: [],
  totalAmount: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalAmount: state.totalAmount + action.payload.price,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          totalAmount: state.totalAmount + action.payload.price,
        };
      }

    case "UPDATE_QUANTITY":
      const updatedItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (!updatedItem) {
        return state;
      }

      const updatedTotalAmount =
        state.totalAmount +
        (action.payload.quantity - updatedItem.quantity) * updatedItem.price;

      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
        totalAmount: updatedTotalAmount,
      };

    case "SET_CART":
      const newTotalAmount = action.payload.reduce(
        (total: number, item: { quantity: number; price: number }) =>
          total + item.quantity * item.price,
        0
      );
      return {
        ...state,
        cart: action.payload || [],
        totalAmount: newTotalAmount,
      };

    case "REMOVE_FROM_CART":
      const removedItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (!removedItem) {
        return state;
      }

      const updatedTotalAmountAfterRemoval =
        state.totalAmount - removedItem.quantity * removedItem.price;

      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        totalAmount: updatedTotalAmountAfterRemoval,
      };

    default:
      return state;
  }
};

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    console.log("Saved cart", savedCart);
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      dispatch({ type: "SET_CART", payload: parsedCart });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
