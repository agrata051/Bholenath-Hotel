import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navBrand } from '@/data/navigation';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Background logic
  const backgroundClass = isHome
    ? isScrolled
      ? 'bg-yellow-300/55 backdrop-blur shadow-lg'
      : 'bg-transparent'
    : 'bg-yellow-100/60';

  // Link color logic
  const linkColorClass = isHome && !isScrolled ? 'text-white' : 'text-black';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${backgroundClass}`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Brand */}
        <div className="flex items-center space-x-5">
          {navBrand.logo ? (
            <img src={navBrand.logo} alt="Logo" className="w-15 h-20 rounded-md" />
          ) : (
            <div className="w-10 h-10 bg-gold-500 rounded-sm flex items-center justify-center">
              <span className="text-gray-500 font-bold text-lg">{navBrand.logoText}</span>
            </div>
          )}
          <div>
            <h1 className="text-2xl font-bold text-yellow-500">{navBrand.title}</h1>
            <p className="text-2x1 text-black -mt-1">{navBrand.subtitle}</p>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`${linkColorClass} hover:text-gold-400 font-medium transition-colors duration-300`}>
            Home
          </Link>
          <Link to="/rooms" className={`${linkColorClass} hover:text-gold-400 font-medium transition-colors duration-300`}>
            Rooms & Suites
          </Link>
          <Link to="/amenities" className={`${linkColorClass} hover:text-gold-400 font-medium transition-colors duration-300`}>
            Amenities
          </Link>
          <Link to="/contact" className={`${linkColorClass} hover:text-gold-400 font-medium transition-colors duration-300`}>
            Contact
          </Link>
        </nav>

        {/* Right: Login / Register Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition-all"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 rounded bg-yellow-500 text-white hover:bg-yellow-600 transition-all"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;

