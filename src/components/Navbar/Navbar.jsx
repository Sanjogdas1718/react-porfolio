import React, { useState, useEffect } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = (e) => {
      if (menuOpen && 
          !e.target.closest(`.${styles.menuItems}`) && 
          !e.target.closest(`.${styles.menuBtn}`)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      window.addEventListener('click', closeMenu);
    }

    return () => {
      window.removeEventListener('click', closeMenu);
    };
  }, [menuOpen]);

  const handleMenuToggle = () => {
    if (menuOpen) {
      setTimeout(() => {
        setMenuOpen(false);
      }, 300);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={handleMenuToggle}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Skills & Training</a>
          </li>
          <li>
            <a href="#certifications">Certifications</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
