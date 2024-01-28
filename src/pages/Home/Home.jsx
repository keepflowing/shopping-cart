import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import HeroSection from '../../components/HeroSection/HeroSection';

export default function Home({ featuredItems }) {
  return (
    <div className="container" data-testid="home">
      <HeroSection
        headerText="My Store"
        tagline="Good quality, great prices."
        cta="See products"
      />
      <FeaturesSection featuredItems={featuredItems} />
    </div>
  );
}
