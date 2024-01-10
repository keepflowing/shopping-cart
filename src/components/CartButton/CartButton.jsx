import style from './CartButton.module.css'

export default function CartButton({cart}) {
  return (
    <div className={style.button}>
      {cart.length}
    </div>
  )
}
