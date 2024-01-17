import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header
      className={styles.navbar}
      data-testid="navbar"
    >
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        <p>Home</p>
      </NavLink>
      <NavLink
        to="/store"
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        <p>Store</p>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        <p>Contact</p>
      </NavLink>
    </header>
  );
}
