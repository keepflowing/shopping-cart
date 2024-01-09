import { Link, useParams } from 'react-router-dom';
import style from './Iteminfo.module.css';

const getItemById = (iid, list) => {
  return list.filter((i) => i.id == iid)[0];
}

export default function Iteminfo({items}) {
  const { id } = useParams();
  const item = getItemById(id, items);

  return (
    <div className="container">
      <h1>{item.title}</h1>
      <img className={style.big} src={item.image} />
      <h2>Price: ${item.price}</h2>
      <p>{item.description}</p>
      <Link to={-1}>-- Go back --</Link>
    </div>
  )
}
