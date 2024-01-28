import styles from './FeaturesSection.module.css';
import Itemgrid from '../Itemgrid/Itemgrid';

export default function FeaturesSection({ featuredItems }) {
  return (
    <div className={styles.features}>
      <h2>Featured Items:</h2>
      <Itemgrid items={featuredItems} />
    </div>
  );
}
