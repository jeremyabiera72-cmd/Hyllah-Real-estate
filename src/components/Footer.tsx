import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import logoUrl from '../assets/images/luxuria_logo_1779249324263.png';

export default function Footer() {
  return (
    <footer className="bg-white text-[#111111] pt-20 border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1 border-b md:border-none border-gray-100 pb-8 md:pb-0">
          <Link to="/" className="flex items-center space-x-2 mb-6">
            <img
              src={logoUrl}
              alt="Hyllah Logo"
              className="w-8 h-8 object-cover mix-blend-multiply"
            />
            <span className="font-bold text-xl tracking-tighter uppercase">Hyllah Real Estate</span>
          </Link>
          <p className="text-gray-500 text-xs leading-relaxed max-w-xs mt-4">
            Curating exceptional luxury real estate experiences. We connect discerning buyers with extraordinary properties around the globe.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Quick Links</h4>
          <ul className="space-y-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
            <li><Link to="/" className="hover:text-black transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-black transition-colors">About Us</Link></li>
            <li><Link to="/properties" className="hover:text-black transition-colors">Featured Properties</Link></li>
            <li><Link to="/services" className="hover:text-black transition-colors">Our Services</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Contact Us</h4>
          <ul className="space-y-4 text-xs text-gray-500">
            <li>123 Luxury Avenue, Suite 400</li>
            <li>Davao City, Philippines</li>
            <li>+63955 367 3625</li>
            <li>yumisbusiness88@gmail.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors"><Twitter size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-6 bg-white text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 max-w-7xl mx-auto w-full">
        <p>&copy; {new Date().getFullYear()} Hyllah Real Estate.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="#" className="hover:text-black transition-colors">Privacy</Link>
          <Link to="#" className="hover:text-black transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
