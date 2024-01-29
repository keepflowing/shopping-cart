import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FeaturesSection from './FeaturesSection';

describe('Features Section', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <FeaturesSection />
      </MemoryRouter>,
    );
    const featured = screen.getByRole('heading', { name: /lucky/i });
    expect(featured).toBeInTheDocument();
  });
});
