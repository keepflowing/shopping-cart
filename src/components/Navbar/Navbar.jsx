import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar({ title }) {
  return (
    <header
      className={styles.navbar}
      data-testid="navbar"
    >
      <div className={styles.left}>
        <Link to="/">
          <h2>{title}</h2>
        </Link>
      </div>
      <div className={styles.right}>
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
      </div>
    </header>
  );
}
