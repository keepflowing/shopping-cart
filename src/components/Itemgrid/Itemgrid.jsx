import Card from '../Card/Card';

export default function Itemgrid() {
  return (
    <div data-testid="itemgrid">
      <Card item={{
        id: 1, title: 'Test', price: 39, imgUrl: 'imgUrl',
      }}
      />
    </div>
  );
}
