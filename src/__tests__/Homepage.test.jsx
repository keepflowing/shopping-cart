import { render, screen } from '@testing-library/react';
import {
  MemoryRouter, Routes, Route,
} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Homepage from '../components/Homepage/Homepage';

describe('Homepage', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route
            path="/"
            element={<Homepage />}
          />
          <Route path="/store" element={<h1>Store Page</h1>} />
        </Routes>
      </MemoryRouter>,
    );
  });

  it('renders title', () => {
    expect(screen.getByRole('heading').textContent).toMatch(/welcome to my store/i);
  });

  it('renders a button with the text "Enter"', () => {
    expect(
      screen.getByRole('button', { value: 'Enter' }).textContent,
    )
      .toMatch('Enter');
  });

  it('renders a link', () => {
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
  });

  it('loads the /store route when the button is clicked', async () => {
    const button = screen.getByRole('button', { value: 'Enter' });

    userEvent.click(button);
    const storePageText = await screen.findByText('Store Page');
    expect(storePageText).toBeInTheDocument();
  });
});
