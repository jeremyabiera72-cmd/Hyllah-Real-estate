import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80")' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center text-white mt-16 font-sans">
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-[100px] font-bold tracking-tighter leading-[0.9] mb-8 drop-shadow-lg"
        >
          FIND YOUR <br /> <span className="text-gray-300">DREAM PROPERTY</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 text-gray-200 leading-relaxed"
        >
          Curating the finest real estate around the globe for those who demand nothing but the absolute best.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link to="/properties" className="bg-white text-black hover:bg-gray-100 transition-colors duration-300 px-8 py-4 uppercase tracking-widest text-sm font-bold w-full sm:w-auto shadow-lg">
            Explore Properties
          </Link>
          <Link to="/contact" className="border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 px-8 py-4 uppercase tracking-widest text-sm font-bold w-full sm:w-auto shadow-lg">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
