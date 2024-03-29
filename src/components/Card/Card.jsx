import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card({ item = {}, setCart, cart }) {
  const addToCart = (newItem) => {
    cart.push(newItem);
    setCart([...cart]);
  };
  return (
    <div className={styles.card}>
      <img src={item.image} alt={item.title} />
      <div className={styles.flexBetween}>
        {item.specialPrice
          ? (
            <p>
              <s>
                $
                {item.price}
              </s>
              <span className={styles.special}>
                {' '}
                $
                {item.specialPrice}
              </span>
              {' '}
              <span className={styles.green}>-30%</span>
            </p>
          )
          : (
            <p>
              $
              {item.price}
            </p>
          )}
        <Link to={`/item/${item.id}`}>More info</Link>
      </div>
      <button
        type="button"
        onClick={() => addToCart(item)}
      >
        Add to cart
      </button>
    </div>
  );
}
