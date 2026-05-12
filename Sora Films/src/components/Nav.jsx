import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);
  return (
    <nav className={styles.navbar}>
      
      <div className={styles.logo}>Sora Films</div>
      <div
        className={styles.hamburger}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <div className={`${styles.links} ${menuOpen ? styles.showMenu : ""}`}>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>


        <div className={styles.dropdown}>
          <div className={styles.linkWrapper}>

            <NavLink to="/portfolio" className={styles.link}>
              Portfolio
            </NavLink>
            <span
              className={styles.arrow}
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              ▼
            </span>
          </div>
          <div
            className={`${styles.dropdownMenu} ${dropdownOpen ? styles.showDropdown : ""
              }`}
          >
            <NavLink to="/portfolio/portraits" className={styles.dropdownItem}>
              Portraits
            </NavLink>
            <NavLink to="/portfolio/family" className={styles.dropdownItem}>
              Family
            </NavLink>
            <NavLink to="/portfolio/wedding" className={styles.dropdownItem}>
              Weading
            </NavLink>
            <NavLink to="/portfolio/pre-wedding" className={styles.dropdownItem}>
              Pre Weading
            </NavLink>
          </div>
        </div>
        <NavLink to="/services" className={styles.link}>
          Services
        </NavLink>
        <NavLink to="/about" className={styles.link}>
          About
        </NavLink>
        <NavLink to="/clients-albums" className={styles.link}>
          Clients Albums
        </NavLink>
        <NavLink to="/contact" className={styles.link}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}