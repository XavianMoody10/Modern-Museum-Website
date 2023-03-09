import React from "react";
import styles from "./Header.module.css";
import { BsArrowRight } from "react-icons/bs";
import { MobileHeader } from "../../components/ModileHeader/MobileHeader";

export const Header = () => {
  return (
    <React.Fragment>
      <header
        className={styles.header}
        initial={{ y: 0 }}
        animate={{ y: !open ? "-100%" : 0 }}
        transition={{ stiffness: 0 }}
      >
        <ul className={styles.navbar}>
          <li>Home</li>
          <li>Product</li>
          <li>Showcase</li>
        </ul>

        <div className={styles.ctas}>
          <button>Login</button>
          <button>
            Gets Started <BsArrowRight />
          </button>
        </div>
      </header>

      <MobileHeader></MobileHeader>
    </React.Fragment>
  );
};
