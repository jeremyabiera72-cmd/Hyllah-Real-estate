import { useParams, Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, CheckCircle, ChevronLeft } from 'lucide-react';
import { allProperties } from '../data/properties';

export default function PropertyDetails() {
  const { id } = useParams();
  
  // Find the requested property or fallback to the first one
  const property = allProperties.find(p => p.id === id) || allProperties[0];
  
  const images = [
    property.image,
    allProperties[(allProperties.indexOf(property) + 1) % allProperties.length].image,
    allProperties[(allProperties.indexOf(property) + 2) % allProperties.length].image
  ];

  return (
    <div className="pt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <Link to="/properties" className="inline-flex items-center text-sm font-semibold uppercase tracking-widest text-gray-500 hover:text-[#111111] mb-8">
          <ChevronLeft size={16} className="mr-2" /> Back to Properties
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">{property.title}</h1>
            <p className="flex items-center text-gray-500">
              <MapPin size={18} className="mr-2" />
              {property.location}
            </p>
          </div>
          <div className="text-3xl lg:text-4xl font-bold tracking-tighter font-light">
            {property.price}
          </div>
        </div>
      </div>

      {/* Main Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-2 md:px-6 mb-16">
        <div className="md:col-span-2 aspect-[4/3] md:aspect-[16/9]">
          <img src={images[0]} alt="Property Main" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=1470&q=80"; }} />
        </div>
        <div className="grid grid-rows-2 gap-2 aspect-[4/3] md:aspect-auto h-full">
          <img src={images[1]} alt="Property Detail" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1470&q=80"; }} />
          <img src={images[2]} alt="Property Detail" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1470&q=80"; }} />
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
        
        {/* Left Column - Info */}
        <div className="lg:col-span-2">
          <div className="flex gap-8 border-y border-gray-100 py-6 mb-12">
            <div className="flex items-center gap-3">
              <Bed className="text-gray-400" />
              <span className="font-semibold text-lg">{property.beds} <span className="font-normal text-sm text-gray-500 uppercase tracking-widest block">Bedrooms</span></span>
            </div>
            <div className="flex items-center gap-3">
              <Bath className="text-gray-400" />
              <span className="font-semibold text-lg">{property.baths} <span className="font-normal text-sm text-gray-500 uppercase tracking-widest block">Bathrooms</span></span>
            </div>
            <div className="flex items-center gap-3">
              <Square className="text-gray-400" />
              <span className="font-semibold text-lg">{property.sqft} <span className="font-normal text-sm text-gray-500 uppercase tracking-widest block">Square Feet</span></span>
            </div>
          </div>

          <h3 className="font-bold tracking-tighter text-2xl mb-6">About This Property</h3>
          <p className="text-gray-600 leading-relaxed mb-12">
            {property.description}
          </p>

          <h3 className="font-bold tracking-tighter text-2xl mb-6">Amenities</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-gray-100 pb-12">
            {property.amenities.map((amenity, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-600">
                <CheckCircle size={18} className="text-[#111111]" />
                {amenity}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <div className="bg-gray-50 p-8 border border-gray-100 sticky top-32">
            <h3 className="font-bold tracking-tighter text-2xl mb-2">Inquire About Property</h3>
            <p className="text-gray-500 text-sm mb-6">Contact our premium agents to schedule a private viewing.</p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                <input type="text" className="w-full border border-gray-200 bg-white px-4 py-3 focus:outline-none focus:border-[#111111] transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                <input type="email" className="w-full border border-gray-200 bg-white px-4 py-3 focus:outline-none focus:border-[#111111] transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                <input type="tel" className="w-full border border-gray-200 bg-white px-4 py-3 focus:outline-none focus:border-[#111111] transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea rows={4} className="w-full border border-gray-200 bg-white px-4 py-3 focus:outline-none focus:border-[#111111] transition-colors" defaultValue={`I am interested in ${property.title}.`}></textarea>
              </div>
              <button className="w-full bg-[#111111] text-white uppercase tracking-widest text-xs font-semibold py-4 hover:bg-gray-800 transition-colors mt-4">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
