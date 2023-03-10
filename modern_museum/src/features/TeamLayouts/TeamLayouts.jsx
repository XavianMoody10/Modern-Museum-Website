import React from "react";
import styles from "./TeamLayouts.module.css";
import { AiOutlineTwitter } from "react-icons/ai";

export const TeamLayouts = () => {
  const layoutUsers = [
    {
      id: 0,
      name: "James Smith",
      email: "Designer @Flowbase.co",
    },
    {
      id: 1,
      name: "Sarah Smith",
      email: "Designer @Flowbase.co",
    },
    {
      id: 2,
      name: "Sarah Smith",
      email: "Designer @Flowbase.co",
    },
  ];

  const layouts = layoutUsers.map((user) => {
    return (
      <div className={styles.layout} key={user.id}>
        <div className={styles.layoutInfo}>
          <p>
            <span>{user.name}</span>
            <span>{user.email}</span>
          </p>
          <AiOutlineTwitter className={styles.icon}></AiOutlineTwitter>
        </div>
      </div>
    );
  });

  return (
    <section className={styles.teamlayouts}>
      <h1>
        <span>Add Your Tagline</span>
        <span>Team Layouts</span>
      </h1>

      <div className={styles.layouts}>{layouts}</div>
    </section>
  );
};
