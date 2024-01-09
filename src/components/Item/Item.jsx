import style from './Item.module.css';
import { Link } from 'react-router-dom';

export default function Item({iid, name, price, imgUrl}) {
  return (
    <div className={style.item}>
      <img src={imgUrl}/>
      <Link to={"./item/" + iid}>
        Info
      </Link>
    </div>
  );
}
