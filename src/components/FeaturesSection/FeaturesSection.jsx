import styles from './FeaturesSection.module.css';
import Card from '../Card/Card';

export default function FeaturesSection({ featuredItem = {} }) {
  return (
    <div className={styles.features}>
      <h2>Your lucky item:</h2>
      <Card item={featuredItem} />
    </div>
  );
}
