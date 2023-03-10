import React from "react";
import styles from "./FAQS.module.css";
import { FAQQuestion } from "../../components/FAQQuestion/FAQQuestion";

export const FAQS = () => {
  return (
    <div className={styles.faqs}>
      <h3>
        <span>FAQ's</span>
        <span>Frequently Asked Questions</span>
      </h3>

      <div className={styles.questions}>
        <FAQQuestion></FAQQuestion>
        <FAQQuestion></FAQQuestion>
        <FAQQuestion></FAQQuestion>
        <FAQQuestion></FAQQuestion>
      </div>
    </div>
  );
};
