import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import style from './Iteminfo.module.css';

const getItemById = (iid, list) => {
  return list.filter((i) => i.id == iid)[0];
}

export default function Iteminfo({items, cart, setCart}) {
  const [item, setItem] = useState({})
  const { id } = useParams();

  useEffect(() => {
    if(items.length > 0) setItem(getItemById(id, items))
  }, [items]);

  const handleAdd = () => {
    setCart([...cart, item]);
    console.log([...cart, item]);
  }

  return (
    <div className="container">
      <h1>{item.title}</h1>
      <img className={style.big} src={item.image} />
      <h2>Price: ${item.price}</h2>
      <button 
        type="button" 
        onClick={handleAdd}
      >
        Add to cart
      </button>
      <p>{item.description}</p>
      <Link to={-1}>-- Go back --</Link>
    </div>
  )
}
