import React, { useRef, useState } from "react";
import styles from "./Testimonial.module.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import { TestimonyCard } from "../../components/TestimonyCard/TestimonyCard";

export const Testimonial = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [position, setPosition] = useState(0);
  const slide = useRef();

  // Next slide handler
  const nextSlideHandler = () => {
    if (position === -slide.current.offsetWidth + 380 * 3) {
      return;
    } else {
      setPosition((prev) => prev - 380);
    }
  };

  // Previous slide handler
  const prevSlideHandler = () => {
    if (position === 0) {
      return;
    } else {
      setPosition((prev) => prev + 380);
    }
  };

  // Display testimony map
  const testimonyMap = data.map((testimony) => {
    return <TestimonyCard key={testimony}></TestimonyCard>;
  });

  return (
    <section className={styles.testimonial}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span>FLOWUI WEBFLOW SYSTEM</span>
          <span>Testimonial Section</span>
        </h2>

        <div className={styles.icons}>
          <IoIosArrowBack className={styles.icon} onClick={prevSlideHandler} />
          <IoIosArrowForward
            className={styles.icon}
            onClick={nextSlideHandler}
          />
        </div>
      </div>
      <div className={styles.wrapper}>
        <motion.div
          initial={{ x: position }}
          animate={{ x: position }}
          ref={slide}
          className={styles.slide}
        >
          {testimonyMap}
        </motion.div>

        <div className={styles.mobileWrapper}>
          <TestimonyCard></TestimonyCard>
          <TestimonyCard></TestimonyCard>
          <TestimonyCard></TestimonyCard>
          <TestimonyCard></TestimonyCard>
          <TestimonyCard></TestimonyCard>
          <TestimonyCard></TestimonyCard>
        </div>
      </div>
    </section>
  );
};
