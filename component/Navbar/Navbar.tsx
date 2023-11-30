import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { useCart } from "@/utils/CartContext";
import CartModal from "../CartModal/CartModal";
import Link from "next/link";

const Navbar: React.FC = () => {
  const { state } = useCart();
  const cartQuantity = state.cart.length;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.box}>
      <p className={styles.heading}>
        <Link href={"/store"}>Store</Link>
      </p>

      <h1 className={styles.head}>
        {" "}
        <Link href={"/"}>ACME</Link>
      </h1>
      <div className={styles.box1}>
        <p className={styles.heading}>Account</p>
        <p className={styles.heading} onClick={openModal}>
          Cart ({cartQuantity})
        </p>
      </div>

      {isModalOpen && (
        <div className={styles.overlay} onClick={closeModal}>
          <CartModal />
        </div>
      )}
    </div>
  );
};

export default Navbar;
