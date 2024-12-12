import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contacts</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:mails4sanjog@gmail.com">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <span>Email</span>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/sanjog-das-3a6781205/">
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
            <span>LinkedIn</span>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/Sanjogdas1718">
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <span>Github</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};
