import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,<br />I'm Sanjog Das</h1>
        <p className={styles.description}>
        I'm a passionate Computer Science Undergrad exploring AI, Machine Learning, and Cybersecurity—let's connect!
        </p>
        <a
    href="https://www.linkedin.com/in/sanjog-das-3a6781205/"
    className={styles.contactBtn}
    onClick={(e) => {
        // Only prevent default if needed for specific logic
        console.log('Contact button clicked');
    }}>
    Contact Me
</a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
