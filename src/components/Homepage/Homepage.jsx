// import styles from "./Homepage.module.css";
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

export default function Homepage() {
  return (
    <Link to="/store">
      <Button label="Enter" />
    </Link>
  );
}
