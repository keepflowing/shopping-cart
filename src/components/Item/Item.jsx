import style from './Item.module.css'

export default function Item({name, price, imgUrl}) {
  return (
    <div className={style.item}>
      <img src={imgUrl}/>
    </div>
  );
}
