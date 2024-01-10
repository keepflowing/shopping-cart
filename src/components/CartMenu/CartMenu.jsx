import style from './CartMenu.module.css'

export default function CartMenu({onLeave, cart}) {
  return (
    <div className={style.menu} onMouseLeave={onLeave}>
      {cart.length > 0 ? cart.map(i => <p>{i.title}</p>) : <p>No items</p>} 
    </div>
  )
}
