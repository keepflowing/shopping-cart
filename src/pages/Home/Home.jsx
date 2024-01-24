import HeroSection from '../../components/HeroSection/HeroSection';

export default function Home() {
  return (
    <div className="container" data-testid="home">
      <HeroSection
        headerText="My Store"
        tagline="Good quality, great prices."
        cta="See products"
      />
    </div>
  );
}
