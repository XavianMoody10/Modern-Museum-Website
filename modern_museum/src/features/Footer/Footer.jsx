import React from "react";
import styles from "./Footer.module.css";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <ul>
          <li>COMPANY</li>
          <li>PRODUCT</li>
          <li>SUPPORT</li>
          <li>OFFICE</li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <FaFacebook></FaFacebook>
        <AiFillInstagram></AiFillInstagram>
        <BsTwitter></BsTwitter>
      </div>
    </div>
  );
};
