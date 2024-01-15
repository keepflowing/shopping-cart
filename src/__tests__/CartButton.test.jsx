import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
// import { userEvent } from '@testing-library/user-event';
import CartButton from '../components/CartButton/CartButton';

describe('CartButton', () => {
  it('renders a div', () => {
    render(<CartButton cart={[]} />);
    const cartB = screen.getByText('0');
    expect(cartB).toBeInTheDocument();
  });

  it('runs the open function on mouseOver', () => {
    const mockFunction = vi.fn();
    render(<CartButton cart={[]} setOpen={mockFunction} />);
    const cartB = screen.getByText('0');
    fireEvent.mouseOver(cartB);
    expect(mockFunction).toHaveBeenCalled();
  });
});
