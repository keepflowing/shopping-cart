import Item from '../Item/Item';
import style from './Itemgrid.module.css';

const myItems = ['Fish', 'Cat', 'Dog'];

export default function Itemgrid() {
  return (
    <div className={style.grid}>
      {myItems.map(i => 
       <Item name={i}/>
      )}
      </div>
  );
}
