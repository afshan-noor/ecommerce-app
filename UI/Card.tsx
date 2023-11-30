// Card.tsx
import React from "react";
import Link from "next/link";
import styles from "../component/CardSection/CardSection.module.css";

interface CardProps {
  id: number;
  slug: string;
  imageUrl: string;
  name: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ id, slug, imageUrl, name, price }) => (
  <div key={id} className={styles.card}>
    <Link href={`/product/${slug}`} passHref>
      <img src={imageUrl} alt={name} className={styles.image} />
    </Link>
    <div className={styles.container}>
      <h4>
        <b>{name}</b>
      </h4>
      <p>${price}</p>
    </div>
  </div>
);

export default Card;
