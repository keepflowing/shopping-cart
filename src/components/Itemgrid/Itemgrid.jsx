import Card from '../Card/Card';
import styles from './Itemgrid.module.css';

export default function Itemgrid() {
  return (
    <div data-testid="itemgrid" className={styles.grid}>
      <Card item={{
        id: 1, title: 'Test', price: 39, imgUrl: 'imgUrl',
      }}
      />
      <Card item={{
        id: 1, title: 'Test', price: 39, imgUrl: 'imgUrl',
      }}
      />
      <Card item={{
        id: 1, title: 'Test', price: 39, imgUrl: 'imgUrl',
      }}
      />
      <Card item={{
        id: 1, title: 'Test', price: 39, imgUrl: 'imgUrl',
      }}
      />
    </div>
  );
}
