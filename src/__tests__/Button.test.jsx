import { render, screen } from '@testing-library/react';
import Button from '../components/Button/Button';

describe('Button', () => {
  it('renders a button', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('displays "Button" when no label is specified', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button.textContent).toMatch(/button/i);
  });

  it('displays "Fish" when label is specified', () => {
    render(<Button label="Fish" />);
    const button = screen.getByRole('button');
    expect(button.textContent).toMatch(/fish/i);
  });
});
