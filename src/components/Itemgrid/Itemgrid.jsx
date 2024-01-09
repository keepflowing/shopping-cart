import { useState, useEffect } from 'react';
import Item from '../Item/Item';
import style from './Itemgrid.module.css';

export default function Itemgrid({items}) {
  return (
    <div className={style.grid}>
      {items.map(i => 
       <Item 
          key={i.id}
          iid={i.id}
          name={i.title}
          price={i.price}
          imgUrl={i.image}
        />
      )}
      </div>
  );
}
