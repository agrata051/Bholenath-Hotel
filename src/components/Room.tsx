// Roompage.tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import rooms from '../data/room';

const RoomsPage = () => {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20 bg-gray-100 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Rooms</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{room.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{room.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gold-600">${room.price}</span>
                    <Button className="bg-gold-500 hover:bg-gold-600 text-white">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default RoomsPage;
