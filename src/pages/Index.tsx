
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Facilities from '@/components/Facilities';
import Rooms from '../pages/Roompage';
import BookingForm from '@/components/BookingForm';
import Amenities from '@/components/Amenities';
import Contact from '@/components/Contact';
import Dashboard from './Dashboard';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Facilities />
      <Rooms />
      <BookingForm />
      <Amenities />
      <Contact />
      <Dashboard/>
      <Footer />
    </div>
  );
};

export default Index;
