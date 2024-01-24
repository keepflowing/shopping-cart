import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeroSection from './HeroSection';

const headerText = 'My Store';
const tagline = 'Good quality, great prices.';
const cta = 'See products';

describe('Hero Section', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <HeroSection
          headerText={headerText}
          tagline={tagline}
          cta={cta}
        />
      </MemoryRouter>,
    );
  });
  it('renders correctly', () => {
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
  });
  it('displays the correct header text and tagline', () => {
    const header = screen.getByRole('heading', { name: headerText });
    const p = screen.getByText(tagline);
    expect(header).toBeInTheDocument();
    expect(p).toBeInTheDocument();
  });
  it('renders CTA button with specified text', () => {
    const button = screen.getByRole('button', { name: cta });
    expect(button).toBeInTheDocument();
  });
});
