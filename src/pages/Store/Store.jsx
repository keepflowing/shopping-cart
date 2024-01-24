import Itemgrid from '../../components/Itemgrid/Itemgrid';

export default function Store() {
  const items = [
    { id: 1, imgUrl: 'imgUrl', price: 90 },
    { id: 2, imgUrl: 'imgUrl', price: 90 },
    { id: 3, imgUrl: 'imgUrl', price: 90 },
    { id: 4, imgUrl: 'imgUrl', price: 90 },
    { id: 5, imgUrl: 'imgUrl', price: 90 },
    { id: 6, imgUrl: 'imgUrl', price: 90 },
  ];
  return (
    <div className="container" data-testid="store">
      <Itemgrid items={items} />
    </div>
  );
}
