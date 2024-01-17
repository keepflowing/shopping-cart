import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header
      className={styles.navbar}
      data-testid="navbar"
    >
      <NavLink to="/">
        <p>Home</p>
      </NavLink>
      <NavLink to="/store">
        <p>Store</p>
      </NavLink>
      <NavLink to="/about">
        <p>About</p>
      </NavLink>
    </header>
  );
}
