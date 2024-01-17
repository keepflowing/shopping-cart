import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import styles from './Navbar.module.css';

beforeEach(() => {
  render(
    <MemoryRouter>
      <Navbar />
      <Routes>
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </MemoryRouter>,
  );
});

describe('Navbar', () => {
  it('renders navbar', () => {
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('should render all NavLinks', () => {
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Store')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('highlights the active NavLink', () => {
    const activeLink = screen.getByRole('link', { name: 'Store' });
    fireEvent.click(activeLink);

    expect(activeLink).toHaveClass(styles.active);
  });

  it('correctly redirects when clicking a NavLink', () => {
    const contactLink = screen.getByRole('link', { name: 'Contact' });
    fireEvent.click(contactLink);

    expect(screen.getByText('Contact Page')).toBeInTheDocument();
  });
});
