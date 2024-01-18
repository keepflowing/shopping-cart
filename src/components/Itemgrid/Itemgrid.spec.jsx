import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Itemgrid from './Itemgrid';

const mockItems = [
  {
    id: 1, title: 'Item 1', price: 20, imgUrl: 'url',
  },
  {
    id: 2, title: 'Item 2', price: 29, imgUrl: 'url',
  },
];

const renderGrid = (items) => {
  render(
    <MemoryRouter>
      <Itemgrid items={items} />
    </MemoryRouter>
    ,
  );
};

describe('Itemgrid', () => {
  it('renders the Itemgrid div', () => {
    renderGrid([]);
    const itemgrid = screen.getByTestId('itemgrid');
    expect(itemgrid).toBeInTheDocument();
  });
  it('render to correct number of Card components', () => {
    renderGrid(mockItems);
    const cards = screen.getAllByRole('link', { name: /more info/i });
    expect(cards).toHaveLength(mockItems.length);
  });
  it('displays "No items" when given an empty list', () => {
    renderGrid([]);
    expect(screen.getByText(/no items/i)).toBeInTheDocument();
  });
});
