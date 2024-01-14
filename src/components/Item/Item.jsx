import { Link } from 'react-router-dom';
import style from './Item.module.css';

export default function Item({
  iid, price, imgUrl,
}) {
  return (
    <div className={style.item}>
      <img src={imgUrl} alt="" />
      <div>
        <p>
          $
          {price}
        </p>
        <Link to={`./item/${iid}`}>
          Info
        </Link>
      </div>
    </div>
  );
}
