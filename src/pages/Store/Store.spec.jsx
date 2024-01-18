import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Store from './Store';

describe('Store', () => {
  it('renders Store page', () => {
    render(
      <MemoryRouter>
        <Store />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('store')).toBeInTheDocument();
  });
});
