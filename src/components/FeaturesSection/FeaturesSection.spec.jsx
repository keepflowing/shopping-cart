import { screen, render } from '@testing-library/react';
import FeaturesSection from './FeaturesSection';

describe('Features Section', () => {
  it('renders correctly', () => {
    render(<FeaturesSection />);
    const featured = screen.getByRole('heading', { name: /featured/i });
    expect(featured).toBeInTheDocument();
  });
});
