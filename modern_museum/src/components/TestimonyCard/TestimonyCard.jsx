import React from "react";
import styles from "./TestimonyCard.module.css";
import ratings from "../../assets/ratings.png";

export const TestimonyCard = () => {
  return (
    <div className={styles.testimony}>
      <img
        className={styles.rating}
        src={ratings}
        alt="ratings"
        height={20}
      ></img>
      <p className={styles.comment}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        maximus quam malesuada est pellentesque rhoncus.
      </p>

      <div className={styles.user}>
        <img src=""></img>
        <p>
          <span>Customer Name</span>
          <span>Company</span>
        </p>
      </div>
    </div>
  );
};
