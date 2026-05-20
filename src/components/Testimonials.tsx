import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "The level of service provided was absolutely exceptional. They completely understood what we were looking for and found our dream home within weeks.",
    author: "Eleanor Sterling",
    role: "Homeowner in Beverly Hills"
  },
  {
    quote: "Professionalism and discretion at its finest. Their portfolio of off-market properties is unmatched in the luxury real estate space.",
    author: "Marcus Vance",
    role: "Real Estate Investor"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="uppercase tracking-widest space-x-2 text-xs font-semibold text-gray-500 block mb-4">Client Feedback</span>
          <h2 className="text-4xl font-bold tracking-tighter">What Our Clients Say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white p-12 shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-2xl border border-gray-100"
            >
              <div className="text-4xl text-gray-300 font-bold tracking-tighter mb-6">"</div>
              <p className="text-lg leading-relaxed text-gray-600 mb-8 italic">
                {testimonial.quote}
              </p>
              <div>
                <h4 className="font-semibold font-bold tracking-tighter text-lg">{testimonial.author}</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
