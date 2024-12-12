import React from "react";
import styles from "./Certifications.module.css";
import { getImageUrl } from "../../utils";

const certificationsData = [
  {
    organisation: "HackerRank",
    certifications: ["Java", "Python", "SQL"],
    imageSrc: "certifications/hackerBhai.png",
  },
  {
    organisation: "EY",
    certifications: ["CyberSecurity Training Certification"],
    imageSrc: "certifications/sucidePro.png",
  },
  {
    organisation: "Udemy",
    certifications: ["Complete 3D Blender"],
    imageSrc: "certifications/udemy-logo.png",
  },
];

export const Certifications = () => {
  return (
    <section className={styles.container} id="certifications">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.content}>
        {certificationsData.map((cert, index) => (
          <div key={index} className={styles.certificationItem}>
            <img
              src={getImageUrl(cert.imageSrc)}
              alt={`${cert.organisation} logo`}
              className={styles.certificationImage}
            />
            <div className={styles.certificationDetails}>
              <h3>{cert.organisation}</h3>
              <ul>
                {cert.certifications.map((name, idx) => (
                  <li key={idx}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};