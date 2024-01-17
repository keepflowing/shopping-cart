import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
import Contact from './Contact';

describe('Contact', () => {
  it('renders Contact page', () => {
    render(<Contact />);
    expect(screen.getByTestId('contact')).toBeInTheDocument();
  });
});
