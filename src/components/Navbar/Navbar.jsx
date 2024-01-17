import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
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
