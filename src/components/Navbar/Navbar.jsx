import { Link, NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineShopping, AiOutlineSearch } from 'react-icons/ai';
import styles from './Navbar.module.css';

export default function Navbar({ title }) {
  return (
    <header
      className={styles.navbar}
      data-testid="navbar"
    >
      <div className={styles.first}>

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
      </div>
      <div className={styles.icons}>
        <div className={styles.search}>
          <AiOutlineSearch />
        </div>
        <div className={styles.cart}>
          <AiOutlineShopping />
        </div>
        <div className={styles.hamburger}>
          <RxHamburgerMenu />
        </div>
      </div>
    </header>
  );
}
