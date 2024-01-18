import { Link } from 'react-router-dom';

export default function Card({ item }) {
  return (
    <div>
      <img src={item.imgUrl} alt="" />
      <p>{item.price}</p>
      <button type="button">Add to cart</button>
      <Link to={`./item/${item.id}`}>More info</Link>
    </div>
  );
}
