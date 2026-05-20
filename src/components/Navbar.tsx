import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoUrl from '../assets/images/luxuria_logo_1779249324263.png';

export default function Navbar() {
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

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Properties', path: '/properties' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full flex items-center justify-between px-6 md:px-10 h-20 top-0 z-50 transition-all duration-300 border-b ${isTransparent ? 'bg-transparent border-transparent text-white' : 'bg-white border-gray-100 text-black'}`}>
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src={logoUrl} 
            alt="Hyllah Logo" 
            className={`h-8 w-auto object-contain ${isTransparent ? 'invert mix-blend-screen' : 'mix-blend-multiply'}`} 
          />
          <span className="font-bold text-xl tracking-tighter uppercase hidden sm:block">Hyllah Real Estate</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10 text-xs font-semibold uppercase tracking-widest">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            
            let linkStyle = "";
            if (isTransparent) {
              linkStyle = isActive ? 'border-b-2 border-white text-white' : 'text-gray-200 hover:text-white';
            } else {
              linkStyle = isActive ? 'border-b-2 border-black text-black' : 'text-gray-400 hover:text-black';
            }

            return (
              <Link 
                key={link.name} 
                to={link.path}
                className={`transition-colors py-1 ${linkStyle}`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
        
        <div className="hidden md:block">
          <Link to="/contact" className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all ${isTransparent ? 'bg-transparent border border-white text-white hover:bg-white hover:text-black' : 'bg-black border border-black text-white hover:bg-gray-800 shadow-lg'}`}>
            Book Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden ${isTransparent ? 'text-white' : 'text-black'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white text-black border-b border-gray-100 shadow-xl md:hidden"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-lg font-medium font-bold tracking-tighter tracking-wide border-b border-gray-100 pb-2"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="btn-solid mt-4 w-full text-center">
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
