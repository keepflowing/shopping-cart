import style from './CartButton.module.css';
import { useState } from 'react';
import CartMenu from '../CartMenu/CartMenu';

export default function CartButton({cart, open, setOpen}) {

  return (
    <div 
      className={style.button}
      onMouseEnter={() => setOpen(true)}
    >
      {cart.length}
      {open && <CartMenu cart={cart} onLeave={() => setOpen(false)}/>}
    </div>
  )
}
