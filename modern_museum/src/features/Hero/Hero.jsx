import React, { useState } from "react";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import { GalleryLayout } from "../../components/GalleryLayout/GalleryLayout";

export const Hero = () => {
  const [tab, setTab] = useState(0);

  const links = [
    {
      id: 0,
      text: "All",
      position: "35px",
      width: "8%",
    },
    { id: 1, text: "Humans", position: "105px", width: "15%" },
    { id: 2, text: "Animal", position: "210px", width: "15%" },
    {
      id: 3,
      text: "Abstract",
      position: "314px",
      width: "15%",
    },
    {
      id: 4,
      text: "Random",
      position: "426px",
      width: "14%",
    },
  ];

  // Links Map
  const linksMap = links.map((link) => {
    return (
      <li
        key={link.id}
        onClick={() => setTab(link.id)}
        style={{ color: tab === link.id ? "#e36f2d" : "black" }}
      >
        {link.text}
      </li>
    );
  });

  return (
    <section className={styles.hero}>
      <h1>Let's Find The Latest News today!</h1>

      <div className={styles.hero_header}>
        <div className={styles.hero_title}>
          <p>GALLERY</p>
          <h2>Our special gallery</h2>
        </div>

        <ul>
          {linksMap}

          <motion.div
            className={styles.tracker}
            initial={{
              left: links[0].position,
              width: links[0].width,
            }}
            animate={{
              left: links[tab].position,
              width: links[tab].width,
            }}
          ></motion.div>
        </ul>
      </div>

      <GalleryLayout></GalleryLayout>
    </section>
  );
};
