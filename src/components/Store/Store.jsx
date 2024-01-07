// import style from './Store.module.css';
import Itemgrid from '../Itemgrid/Itemgrid';

fetch('https://fakestoreapi.com/products/category/electronics?limit=8')
  .then((res) => res.json())
  .then((json) => console.log(json));

export default function Store() {
  return (
    <div className="container">
      <h1>This is the store</h1>
      <Itemgrid />
    </div>
  );
}
