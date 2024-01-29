import { screen, render } from '@testing-library/react';
import Itempage from './Itempage';

describe('Itempage', () => {
  it('renders an item', () => {
    render(<Itempage />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });
});
