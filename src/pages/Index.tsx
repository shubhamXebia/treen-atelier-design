
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedCategories from '@/components/FeaturedCategories';
import ProductShowcase from '@/components/ProductShowcase';
import ProductGallery from '@/components/ProductGallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturedCategories />
      <ProductShowcase />
      <ProductGallery />
      <Footer />
    </div>
  );
};

export default Index;
