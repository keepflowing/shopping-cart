import Card from '../Card/Card';
import styles from './Itemgrid.module.css';

export default function Itemgrid({ items = [], cart, setCart }) {
  return (
    <div data-testid="itemgrid" className={styles.grid}>
      {items.length > 0
        ? items.map((i) => (
          <Card
            key={i.id}
            item={i}
            cart={cart}
            setCart={setCart}
          />
        ))
        : <p>No items</p>}
    </div>
  );
}
