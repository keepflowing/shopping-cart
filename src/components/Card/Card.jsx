import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card({ item }) {
  return (
    <div className={styles.card}>
      <img src={item.imgUrl} alt="" />
      <div className={styles.flexBetween}>
        <p>
          $
          {item.price}
        </p>
        <Link to={`./item/${item.id}`}>More info</Link>
      </div>
      <button type="button">Add to cart</button>
    </div>
  );
}
