import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const getItemById = (items, iid) => items.find((item) => item.id === Number(iid));

export default function Itempage({ items = [] }) {
  const [item, setItem] = useState(null);
  const params = useParams();
  const iid = params.id;

  useEffect(() => {
    setItem(getItemById(items, iid));
  }, [items]);
  return (
    <h1>
      {item ? item.title : 'No item'}
    </h1>
  );
}
