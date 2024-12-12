import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Technical Skills</h3>
              <p>
              I am an aspiring Java Developer with a strong interest in backend development. I’m also passionate about exploring the fields of Machine Learning and Cybersecurity.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
            <h3>Hobbies</h3>
              <p>
              Hi! I’m someone who loves exploring creativity in different forms. You’ll often find me lost in a good book, vibing to my favorite music, painting digital art, or writing heartfelt Hindi Shayari. These hobbies keep me inspired and connected to the world around me.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
