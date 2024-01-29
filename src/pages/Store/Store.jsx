import Itemgrid from '../../components/Itemgrid/Itemgrid';

export default function Store({ items }) {
  return (
    <div className="container" data-testid="store">
      <Itemgrid items={items} />
    </div>
  );
}
