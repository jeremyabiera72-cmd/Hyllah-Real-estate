import { motion } from 'motion/react';
import team1 from '../assets/images/regenerated_image_1779250872995.jpg';
import team2 from '../assets/images/regenerated_image_1779250876140.jpg';
import team3 from '../assets/images/regenerated_image_1779250877600.jpg';

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "$5B+", label: "Property Sold" },
  { value: "150+", label: "Luxury Agents" },
  { value: "12", label: "Global Offices" }
];

const team = [
  { name: "Alexandra Croft", role: "Founder & CEO", img: team1 },
  { name: "Robert Sterling", role: "Head of Acquisitions", img: team2 },
  { name: "Elena Rostova", role: "Senior Broker", img: team3 }
];

export default function About() {
  return (
    <div className="pt-28">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="max-w-3xl">
          <span className="uppercase tracking-widest text-xs font-semibold text-gray-500 block mb-4">Our Story</span>
          <h1 className="font-bold tracking-tighter text-5xl md:text-6xl lg:text-7xl mb-8">Redefining Luxury Real Estate.</h1>
        </div>
      </section>

      {/* Main Story Image */}
      <section className="mb-24">
        <div className="w-full h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1470")' }}></div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-bold tracking-tighter text-3xl mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              We strive to provide our clients with an unmatched level of service, discretion, and market insight. Our mission is to seamlessly connect the world's most discerning buyers with exceptional properties that reflect their unique lifestyles and aspirations. We don't just sell homes; we curate legacy assets.
            </p>
          </div>
          <div>
            <h2 className="font-bold tracking-tighter text-3xl mb-6">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be the globally recognized vanguard of luxury real estate, celebrated for our elite advisory services, uncompromising integrity, and a portfolio that represents the absolute pinnacle of architectural distinction and enduring value.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#111111] text-white py-20 mb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {stats.map((stat, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx}
              >
                <div className="font-bold tracking-tighter text-5xl md:text-6xl font-light mb-4">{stat.value}</div>
                <div className="uppercase tracking-widest text-xs text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="text-center mb-16">
          <h2 className="font-bold tracking-tighter text-4xl mb-4">Leadership Team</h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase">The Minds Behind Hyllah</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <img src={member.img} alt={member.name} className="w-full h-[400px] object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-500" />
              <h3 className="font-bold tracking-tighter text-2xl mb-1">{member.name}</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
