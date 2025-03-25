
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const closeMenu = () => setIsOpen(false);
  
  useEffect(() => {
    closeMenu();
  }, [location]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${scrolled ? 'py-2 bg-white/80 backdrop-blur-lg shadow-sm' : 'py-4 bg-transparent'}`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-semibold text-primary flex items-center gap-1"
            onClick={closeMenu}
          >
            <span className="text-3xl">WorkIt</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'text-foreground after:w-full' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden p-2 text-foreground" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-md animate-fade-in-up">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`py-3 px-4 text-center ${
                    location.pathname === link.path ? 'text-primary font-medium' : 'text-foreground/80'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
