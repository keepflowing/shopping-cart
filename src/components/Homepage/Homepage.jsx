import { Link } from 'react-router-dom';
// import style from './Homepage.module.css';
import Button from '../Button/Button';

export default function Homepage() {
  return (
    <div className="container">
      <h1>Welcome to my store!</h1>
      <div>
        <Link to="/store">
          <Button label="Enter" />
        </Link>
      </div>
    </div>
  );
}
