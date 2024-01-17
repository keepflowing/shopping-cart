import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
import Store from './Store';

describe('Store', () => {
  it('renders Store page', () => {
    render(<Store />);
    expect(screen.getByTestId('store')).toBeInTheDocument();
  });
});
