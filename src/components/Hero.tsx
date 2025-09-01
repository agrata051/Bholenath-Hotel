import { Button } from '@/components/ui/button';
import heroContent from '@/data/hero';
import main from '../assets/Firefly_hotel bholenath 206469.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center bg-no-repeat backdrop-blur shadow-lg bg-transparent"
      style={{ backgroundImage: `url(${main})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
        <div className="max-w-4xl mx-auto px-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {heroContent.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {heroContent.subtitle}
          </p>
          <Button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 text-lg">
            {heroContent.buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
