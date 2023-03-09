import React, { useState } from "react";
import styles from "./MobileHeader.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

export const MobileHeader = () => {
  const [open, isOpen] = useState(true);

  return (
    <React.Fragment>
      <motion.header
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

        <RxCross2
          className={styles.mobile_exit_cta}
          onClick={() => isOpen((prev) => !prev)}
        />
      </motion.header>

      <GiHamburgerMenu
        className={styles.mobile_cta}
        onClick={() => isOpen((prev) => !prev)}
      />
    </React.Fragment>
  );
};
