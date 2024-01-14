import { Link } from 'react-router-dom';
import style from './CartMenu.module.css';

export default function CartMenu({ onLeave, cart }) {
  let total = 0;
  for (let i = 0; i < cart.length; i += 1) {
    total += (cart[i].amount * cart[i].price);
  }

  return (
    <div className={style.menu} onMouseLeave={onLeave}>
      {cart.length > 0 ? cart.map((i) => (
        <p key={i.id}>
          {i.amount}
          {' '}
          x
          {' '}
          {i.title}
          {' '}
          - $
          {i.price * i.amount}
        </p>
      ))
        : <p>No items</p>}
      <p>
        Total: $
        {total}
      </p>
      {cart.length > 0 && <Link to="/checkout">-- Checkout --</Link>}
    </div>
  );
}
