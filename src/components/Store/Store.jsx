// import style from './Store.module.css';
import Itemgrid from '../Itemgrid/Itemgrid';

export default function Store({ items }) {
  return (
    <div className="container">
      <h1>This is the store</h1>
      <Itemgrid items={items} />
    </div>
  );
}
