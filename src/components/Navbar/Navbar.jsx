import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <h1 className={style.title}>My store</h1>
      <ul>
        <li className={style.navItem}><Link to="/">Home</Link></li>
        <li className={style.navItem}><Link to="/store">Store</Link></li>
        <li className={style.navItem}><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
