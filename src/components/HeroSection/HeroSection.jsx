import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

export default function HeroSection({ headerText, tagline, cta }) {
  return (
    <div className={styles.hero} data-testid="hero-section">
      <h2>{headerText}</h2>
      <p>{tagline}</p>
      <Link to="/store">
        <button type="button">{cta}</button>
      </Link>
    </div>
  );
}
