import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

beforeEach(() => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );
});

describe('Navbar', () => {
  it('renders navbar', () => {
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it();
});
