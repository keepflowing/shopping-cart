import { render, screen } from '@testing-library/react';
import Errorpage from '../components/Errorpage/Errorpage';

describe('Errorpage', () => {
  it('renders title', () => {
    render(<Errorpage/>);
    expect(screen.getByRole("heading").textContent).toMatch(/404 - page not found/i);
  });
});
