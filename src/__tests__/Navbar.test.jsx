import { render, screen } from '@testing-library/react';
import {
  MemoryRouter, Routes, Route,
} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import Navbar from '../components/Navbar/Navbar';

vi.mock('../components/CartButton/CartButton', () => ({
  default: () => <div data-testid="mockButton">mockButton</div>,
}));

describe('Navbar', () => {
  it('renders "My Store" if no title is specified', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);
    expect(screen.getByRole('heading').textContent).toMatch(/my store/i);
  });

  it('renders "Fish" as title if specified', () => {
    render(<MemoryRouter><Navbar title="Fish" /></MemoryRouter>);
    expect(screen.getByRole('heading').textContent).toMatch(/fish/i);
  });

  it('redirects to / when "home"-link is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/store" element={<h1>Store Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: 'Home' });
    const heading = screen.getByRole('heading');
    userEvent.click(link);
    expect(heading.textContent).toMatch(/my store/i);
  });

  it('redirects to /store when "store"-link is clicked', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/store" element={<h1>Store Page</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: 'Store' });
    userEvent.click(link);
    const storePageText = await screen.findByText('Store Page');
    expect(storePageText).toBeInTheDocument();
  });

  it('redirects to /contact when "contact"-link is clicked', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/store" element={<h1>Store Page</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: 'Store' });
    userEvent.click(link);
    const contactPageText = await screen.findByText('Contact');
    expect(contactPageText).toBeInTheDocument();
  });
});
