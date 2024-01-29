import Itemgrid from '../../components/Itemgrid/Itemgrid';

export default function Store({ items, cart, setCart }) {
  return (
    <div className="container" data-testid="store">
      <Itemgrid items={items} cart={cart} setCart={setCart} />
    </div>
  );
}
