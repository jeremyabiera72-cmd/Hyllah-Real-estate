import HeroSection from '../components/HeroSection';
import PropertyCard from '../components/PropertyCard';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import { Shield, Home, Users, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import { allProperties } from '../data/properties';

const featuredProperties = allProperties.slice(0, 3);

const features = [
  { icon: <Shield size={32} />, title: 'Trusted Company', desc: 'Over 20 years of unmatched integrity.' },
  { icon: <Home size={32} />, title: 'Luxury Properties', desc: 'Curated selection of exclusive global estates.' },
  { icon: <Users size={32} />, title: 'Professional Agents', desc: 'Award-winning brokers at your service.' },
  { icon: <Lock size={32} />, title: 'Secure Transactions', desc: 'Absolute discretion and ironclad security.' }
];

export default function Home_Page() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Featured Properties Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 font-sans">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-100 pb-6">
          <div className="max-w-xl">
            <h2 className="font-bold text-3xl uppercase tracking-widest text-[#111111]">Featured Listings</h2>
          </div>
          <a href="/properties" className="hidden md:inline-block text-xs font-bold underline cursor-pointer text-gray-500 hover:text-black transition-colors uppercase tracking-widest">
            View All
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((prop) => (
            <PropertyCard key={prop.id} {...prop} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 font-sans">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-gray-500 block mb-2">Our Excellence</span>
            <h2 className="text-4xl font-bold tracking-tighter">WHY CHOOSE US</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 border border-gray-100 text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full mb-6 border border-gray-200">
                  <div className="text-black scale-75">{feat.icon}</div>
                </div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-3">{feat.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </div>
  );
}
