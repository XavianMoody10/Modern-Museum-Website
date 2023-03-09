import React from "react";
import styles from "./GalleryLayout.module.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";
import image8 from "../../assets/image8.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { IoMdPlay } from "react-icons/io";

export const GalleryLayout = () => {
  return (
    <div className={styles.hero_grid}>
      <div
        className={styles.grid_item}
        style={{ backgroundImage: `url(${image1})` }}
      >
        <IoMdPlay className={styles.playIcon}></IoMdPlay>
      </div>
      <div
        className={styles.grid_item}
        style={{ backgroundImage: `url(${image2})` }}
      ></div>
      <div
        className={styles.grid_item}
        style={{ backgroundImage: `url(${image3})` }}
      ></div>
      <div
        className={styles.grid_item}
        style={{ backgroundImage: `url(${image4})` }}
      ></div>
      <div
        className={styles.grid_item}
        style={{ backgroundImage: `url(${image5})` }}
      >
        <h3>EUROPEAN</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>
      <div
        className={styles.grid_item}
        style={{ backgroundImage: `url(${image6})` }}
      ></div>
      <div
        className={styles.grid_item}
        style={{ backgroundImage: `url(${image7})` }}
      ></div>
      <div className={styles.grid_item} style={{ backgroundColor: "black" }}>
        <h3>CONTACT US</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        <BsFillPlayCircleFill className={styles.goIcon}></BsFillPlayCircleFill>
      </div>
      <div
        className={styles.grid_item}
        style={{ backgroundImage: `url(${image8})` }}
      ></div>
    </div>
  );
};
