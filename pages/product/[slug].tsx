import React, { useState } from "react";
import { useRouter } from "next/router";
import { useCart } from "@/utils/CartContext";
import storeData from "@/data/storeData";
import styles from "./slug.module.css";
import Button from "@/UI/Button";

const Post: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { dispatch } = useCart();

  const card = storeData.find((card) => card.slug === slug);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (card && selectedSize) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          id: card.id,
          name: card.name,
          imageUrl: card.imageUrl,
          price: card.price,
          size: selectedSize,
        },
      });
      window.alert("Added to cart successfully!");
    }
  };

  return (
    <>
      {card ? (
        <div className={styles.box}>
          <div className={styles.container1}>
            <p className={styles.para}>Weekly Pics</p>
            <h1 className={styles.heading}>{card.name}</h1>
            <p className={styles.para}>{card.description}</p>
          </div>
          <div className={styles.container2}>
            <img src={card.imageUrl} alt="Avatar" />
          </div>
          <div className={styles.container3}>
            <p>Select Sizes</p>
            <div className={styles.box1}>
              <button
                className={styles.button}
                onClick={() => handleSizeSelection("S")}
              >
                S
              </button>
              <button
                className={styles.button}
                onClick={() => handleSizeSelection("M")}
              >
                M
              </button>
              <button
                className={styles.button}
                onClick={() => handleSizeSelection("L")}
              >
                L
              </button>
              <button
                className={styles.button}
                onClick={() => handleSizeSelection("XL")}
              >
                XL
              </button>
            </div>
            <span className={styles.para}>
              {selectedSize ? `Selected Size: ${selectedSize}` : ""}
            </span>
            <h1>Price: {card.price}</h1>
            <Button
              type={Button}
              className={
                selectedSize ? styles.button1Enabled : styles.button1Disabled
              }
              onClick={handleAddToCart}
              disabled={!selectedSize}
              children={"  Add to Cart"}
            ></Button>
          </div>
        </div>
      ) : (
        <p>Card not found</p>
      )}
    </>
  );
};

export default Post;
