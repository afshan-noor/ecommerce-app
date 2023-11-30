import React from "react";
import styles from "../component/CardSection/CardSection.module.css";
import storeData from "@/data/storeData";
import Card from "../UI/Card";

const CardSection: React.FC = () => {
  const limitedStoreData = storeData.slice(0, 3);
  const limitedStoreData1 = storeData.slice(3, 6);
  const limitedStoreData2 = storeData.slice(6, 9);

  const Cards = (data: typeof limitedStoreData) =>
    data.map((store) => (
      <Card
        key={store.id}
        id={store.id}
        slug={store.slug}
        imageUrl={store.imageUrl}
        name={store.name}
        price={store.price}
      />
    ));

  return (
    <>
      <div className={styles.head}>
        <div className={styles.head}>
          <h2 className={styles.heading}>Latest Drops{"->"}</h2>
          <div className={styles.box}>{Cards(limitedStoreData)}</div>
        </div>
      </div>

      <div className={styles.head}>
        <div className={styles.head}>
          <h2 className={styles.heading}>Weekly Picks{"->"}</h2>
          <div className={styles.box}>{Cards(limitedStoreData1)}</div>
        </div>
      </div>

      <div className={styles.head}>
        <div className={styles.head}>
          <h2 className={styles.heading}>Sale{"->"}</h2>
          <div className={styles.box}>{Cards(limitedStoreData2)}</div>
        </div>
      </div>
    </>
  );
};

export default CardSection;
