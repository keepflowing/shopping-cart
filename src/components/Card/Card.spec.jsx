import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from './Card';

beforeEach(() => {
  render(
    <MemoryRouter>
      <Card item={{
        id: 1, title: 'Test', price: 39, imgUrl: 'imgUrl',
      }}
      />
    </MemoryRouter>,
  );
});

describe('Card', () => {
  it('renders the card with all its elements', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('39')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add to cart/i }))
      .toBeInTheDocument();
    expect(screen.getByRole('link', { name: /more info/i }))
      .toBeInTheDocument();
  });
});
