import { useCart } from "@/utils/CartContext";
import styles from "./cart.module.css";
import Link from "next/link";

const Cart = () => {
  const { state, dispatch } = useCart();
  const handleCancel = (id: number) => {
    const selectedItem = state.cart.find((item) => item.id === id);

    if (selectedItem) {
      const newQuantity = selectedItem.quantity - 1;

      if (newQuantity > 0) {
        dispatch({
          type: "UPDATE_QUANTITY",
          payload: { id, quantity: newQuantity },
        });
      } else {
        dispatch({
          type: "REMOVE_FROM_CART",
          payload: { id },
        });
      }
    }
  };

  const handleAdd = (id: number) => {
    const selectedItem = state.cart.find((item) => item.id === id);

    if (selectedItem) {
      const newQuantity = selectedItem.quantity + 1;

      if (newQuantity > 0) {
        dispatch({
          type: "UPDATE_QUANTITY",
          payload: { id, quantity: newQuantity },
        });
      } else {
        dispatch({
          type: "ADD_TO_CART",
          payload: { id },
        });
      }
    }
  };

  return (
    <>
      <div className={styles.box}>
        <div className={styles.card}>
          {state.cart.length > 0 && (
            <>
              <h1 className={styles.heading}>Cart</h1>

              <div className={styles.list}>
                <h1>Item</h1>
                <h1>Price</h1>
                <h1>Quantity</h1>
                <h1>Total Price</h1>
              </div>
              {state.cart.map((item) => (
                <>
                  <div className={styles.list1} key={item.id}>
                    <img
                      className={styles.image}
                      src={item.imageUrl}
                      alt={item.name}
                    />
                    <div className={styles.lists}>
                      <p>${item.price}</p>
                      <p> {item.quantity}</p>
                      <p>${item.price * item.quantity}</p>{" "}
                      <div className={styles.button}>
                        <p
                          className={styles.cancel}
                          onClick={() => handleCancel(item.id)}
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.33301 5.49054H4.81449H16.6663"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M7.14286 5.5V4C7.14286 3.60218 7.29337 3.22064 7.56128 2.93934C7.82919 2.65804 8.19255 2.5 8.57143 2.5H11.4286C11.8075 2.5 12.1708 2.65804 12.4387 2.93934C12.7066 3.22064 12.8571 3.60218 12.8571 4V5.5M15 5.5V16C15 16.3978 14.8495 16.7794 14.5816 17.0607C14.3137 17.342 13.9503 17.5 13.5714 17.5H6.42857C6.04969 17.5 5.68633 17.342 5.41842 17.0607C5.15051 16.7794 5 16.3978 5 16V5.5H15Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M8.33203 9.23724V13.4039"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M11.666 9.23724V13.4039"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </p>
                        <p
                          className={styles.add}
                          onClick={() => handleAdd(item.id)}
                        >
                          {" "}
                          +
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </>
          )}
        </div>
        <div className={styles.summary}>
          {state.cart.length > 0 && (
            <>
              <h1 className={styles.Sheading}>Summary</h1>
              <div className={styles.Amount}>
                <span className={styles.totalAmount}>
                  SubTotal:{" "}
                  <span>
                    {" "}
                    {typeof state?.totalAmount === "number"
                      ? `$${state?.totalAmount.toFixed(2)}`
                      : "N/A"}
                  </span>
                </span>
                <span className={styles.totalAmount}>
                  Shipping Charges: <span> $0.00</span>
                </span>
                <span className={styles.totalAmount}>
                  Taxes: <span> $0.00</span>
                </span>
              </div>
              <div>
                <span className={styles.TotalAmount}>
                  Total Amount:{" "}
                  <span>
                    {" "}
                    {typeof state?.totalAmount === "number"
                      ? `$${state?.totalAmount.toFixed(2)}`
                      : "N/A"}
                  </span>
                </span>
              </div>
            </>
          )}
        </div>
      </div>
      {state.cart.length === 0 && (
        <>
          <p>
            You don't have anything in your bag. Let's change that, use the link
            below to start browsing our products..
          </p>
          <p className={styles.store}>
            <Link href={"/store"}>Explore Products{"->"}</Link>
          </p>
        </>
      )}
    </>
  );
};
export default Cart;
