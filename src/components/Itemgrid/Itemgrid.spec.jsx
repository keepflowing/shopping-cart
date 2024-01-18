import { screen, render } from '@testing-library/react';
import { it } from 'vitest';
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

beforeEach(() => {
  render(
    <MemoryRouter>
      <Itemgrid items={mockItems} />
    </MemoryRouter>
    ,
  );
});

describe('Itemgrid', () => {
  it('renders the Itemgrid div', () => {
    const itemgrid = screen.getByTestId('itemgrid');
    expect(itemgrid).toBeInTheDocument();
  });
  it('render to correct number of Card components', () => {
    const cards = screen.getAllByRole('link', { name: /more info/i });
    expect(cards).toHaveLength(mockItems.length);
  });
});
