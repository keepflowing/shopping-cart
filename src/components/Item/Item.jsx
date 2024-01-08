import style from './Item.module.css'

export default function Item({name}) {
  return (
    <div className={style.item}>
      <h3>{name}</h3>
    </div>
  );
}
