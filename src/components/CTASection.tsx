import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="bg-[#111111] text-white py-24 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-bold tracking-tighter text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
          Ready to Find Your <br /> Perfect Home?
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-light">
          Connect with our expert advisors for a personalized consultation tailored strictly to your real estate ambitions.
        </p>
        <Link to="/contact" className="bg-white text-[#111111] hover:bg-gray-200 transition-colors duration-300 px-8 py-4 uppercase tracking-widest text-sm font-semibold inline-block">
          Request Consultation
        </Link>
      </div>
    </section>
  );
}
