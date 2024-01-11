import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import style from './Iteminfo.module.css';

const getItemById = (iid, list) => {
  return list.filter((i) => i.id == iid)[0];
}

export default function Iteminfo({items, cart, setCart, open, setOpen}) {
  const [item, setItem] = useState({})
  const [amount, setAmount] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    if(items.length > 0) setItem(getItemById(id, items))
  }, [items]);

  const handleAdd = () => {
    const oldCart = [...cart];
    let n = 0;
    for(let i in oldCart) {
      if(oldCart[i].id === item.id) {
        oldCart[i].amount += parseInt(amount);
        n++;
        setCart([...oldCart])
      }
    }
    if(n === 0) setCart([...cart, {...item, amount: parseInt(amount)}]);
    setOpen(true)
  }

  return (
    <div className="container">
      <h1>{item.title}</h1>
      <img className={style.big} src={item.image} />
      <h2>Price: ${item.price}</h2>
      <input type="number" value={amount} onChange={(e) => {setAmount(e.target.value)}}/>
      <button 
        onClick={handleAdd}
      >
        Add to cart
      </button>
      <p>{item.description}</p>
      <Link to={-1}>-- Go back --</Link>
    </div>
  )
}
