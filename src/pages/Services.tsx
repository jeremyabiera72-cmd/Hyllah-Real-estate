import CTASection from '../components/CTASection';
import { Key, TrendingUp, BookOpen, Compass, Briefcase, Calculator } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: <Key size={32} />,
    title: 'Buying Representation',
    desc: 'Unprecedented access to the most exclusive properties, often before they reach the open market. Our buyer representation guarantees absolute discretion.'
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Selling Representation',
    desc: 'Targeted marketing strategies utilizing advanced digital exposure, print media, and an elite global network of affluent buyers.'
  },
  {
    icon: <Briefcase size={32} />,
    title: 'Property Management',
    desc: 'Comprehensive curation of your luxury assets. We handle maintenance, staffing, and administrative duties so you can enjoy your investments.'
  },
  {
    icon: <Compass size={32} />,
    title: 'Market Consultation',
    desc: 'Deep analytical insights into global real estate trends, ensuring your portfolio decisions are backed by rigorous data and expert intuition.'
  },
  {
    icon: <Calculator size={32} />,
    title: 'Investment Advisory',
    desc: 'Specialized guidance for identifying and acquiring high-yield luxury real estate investments to diversify your wealth portfolio.'
  },
  {
    icon: <BookOpen size={32} />,
    title: 'Relocation Services',
    desc: 'White-glove relocation assistance for individuals and corporate executives moving horizontally across global luxury markets.'
  }
];

export default function Services() {
  return (
    <div className="pt-28">
      <section className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h1 className="font-bold tracking-tighter text-5xl md:text-6xl mb-6">Our Services</h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Tailored approaches for a discerning clientele. We provide end-to-end advisory and execution services across the luxury real estate sector.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gray-50 border border-gray-200 flex items-center justify-center mb-6 text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="font-bold tracking-tighter text-2xl mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                <div className="w-12 h-px bg-gray-300 mt-6 group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
