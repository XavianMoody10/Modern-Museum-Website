import React from "react";
import styles from "./Process.module.css";
import searchIcon from "../../assets/search.png";
import folderIcon from "../../assets/folder.png";
import envelopeIcon from "../../assets/envelope.png";
import arrow1 from "../../assets/arrow1.png";
import arrow2 from "../../assets/arrow2.png";

export const Process = () => {
  return (
    <section className={styles.process}>
      <h3>
        <span>Let’s See How it Works</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
      </h3>

      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.icon}>
            <img src={searchIcon} alt="icon" height={30}></img>
          </div>
          <h4>Find Course</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>

        <div className={styles.step}>
          <div className={styles.icon}>
            <img src={folderIcon} alt="icon" height={30}></img>
          </div>
          <h4>Book your Seat</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>

        <div className={styles.step}>
          <div className={styles.icon}>
            <img src={envelopeIcon} alt="icon" height={30}></img>
          </div>
          <h4>Get Sertificate</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>

        <img className={styles.arrow} src={arrow1} height={30}></img>
        <img className={styles.arrow} src={arrow2} height={45}></img>
      </div>
    </section>
  );
};
