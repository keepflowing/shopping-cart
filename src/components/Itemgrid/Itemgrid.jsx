import Card from '../Card/Card';
import styles from './Itemgrid.module.css';

export default function Itemgrid({ items }) {
  return (
    <div data-testid="itemgrid" className={styles.grid}>
      {items ? items.map((i) => <Card key={i.id} item={i} />) : <p>No items</p>}
    </div>
  );
}
