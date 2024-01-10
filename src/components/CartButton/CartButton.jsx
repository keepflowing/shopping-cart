import style from './CartButton.module.css';
import { useState } from 'react';
import CartMenu from '../CartMenu/CartMenu';

export default function CartButton({cart}) {
  const [ open, setOpen ] = useState(false);

  return (
    <div 
      className={style.button}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {cart.length}
      {open && <CartMenu onLeave={() => setOpen(false)}/>}
    </div>
  )
}
