import React from "react";
import styles from "./Partnerships.module.css";
import logo1 from "../../assets/partnerships/logo1.png";
import logo2 from "../../assets/partnerships/logo2.png";
import logo3 from "../../assets/partnerships/logo3.png";
import logo4 from "../../assets/partnerships/logo4.png";

export const Partnerships = () => {
  return (
    <section className={styles.partnerships}>
      <h2>Trusted by brands all over the world</h2>
      <div className={styles.logos}>
        <img src={logo1} alt="" height={40}></img>
        <img src={logo2} alt="" height={40}></img>
        <img src={logo3} alt="" height={40}></img>
        <img src={logo4} alt="" height={40}></img>
      </div>
    </section>
  );
};
