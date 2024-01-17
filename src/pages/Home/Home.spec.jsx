import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home', () => {
  it('renders Home page', () => {
    render(<Home />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
