import React from "react";
import styles from "../component/CardSection/CardSection.module.css";
import Card from "../UI/Card";
import storeData from "@/data/storeData";

const Store: React.FC = () => {
  return (
    <>
      <div className={styles.store}>
        {storeData.map((store) => (
          <Card
            key={store.id}
            id={store.id}
            slug={store.slug}
            imageUrl={store.imageUrl}
            name={store.name}
            price={store.price}
          />
        ))}
      </div>
    </>
  );
};

export default Store;
