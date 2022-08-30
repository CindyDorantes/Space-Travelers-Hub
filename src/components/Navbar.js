import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/Navbar.module.css';
import image from './assets/planet.png';

const Navbar = () => (
  <div className={styles.navbarCont}>
    <header className={styles.navHeader}>

      <div className={styles.headerTitle}>
        <img src={image} alt="planet" className={styles.planet} />
        <p className={styles.navTitle}>Space Traveler&apos;s Hub</p>
      </div>
      <nav className={styles.navBar}>
        <NavLink to="/" className={styles.navLink}>Rockets</NavLink>
        <NavLink to="/dragons" className={styles.navLink}>Dragons</NavLink>
        <NavLink to="/missions" className={styles.navLink.active}>Missions</NavLink>
        <NavLink to="/my-profile" className={styles.navLink}>My Profile</NavLink>
      </nav>
    </header>
  </div>
);

export default Navbar;
