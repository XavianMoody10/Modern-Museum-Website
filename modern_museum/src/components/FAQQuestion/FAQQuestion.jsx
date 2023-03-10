import React, { useState } from "react";
import styles from "./FAQQuestion.module.css";
import { IoIosArrowDown } from "react-icons/io";

export const FAQQuestion = () => {
  const [view, setView] = useState(false);

  return (
    <div
      className={styles.question}
      style={{ backgroundColor: view ? "#F6F7F9" : "white" }}
      onClick={() => {
        setView((prev) => !prev);
      }}
    >
      <p>
        <span>Add commonly asked questions here</span>
        <IoIosArrowDown
          className={styles.icon}
          style={{ transform: view ? "rotateX(180deg)" : "rotateX(0)" }}
        ></IoIosArrowDown>
      </p>
      {view ? (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
          lorem qui lectus molestie malesuada vitae vel purus.
        </p>
      ) : null}
    </div>
  );
};
