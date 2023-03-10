import React from "react";
import styles from "./Presentation.module.css";
import { BsFillPlayFill } from "react-icons/bs";

export const Presentation = () => {
  return (
    <section className={styles.presentation}>
      <div className={styles.presentation_header}>
        <h3>
          Add your own header, to this <span>component</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          felis in lectus viverra fringilla vel quis nisl. Proin euismod dui
          eget tellus consequat mollis.
        </p>
      </div>

      <div className={styles.video}>
        <BsFillPlayFill className={styles.play_icon} />
      </div>
    </section>
  );
};
