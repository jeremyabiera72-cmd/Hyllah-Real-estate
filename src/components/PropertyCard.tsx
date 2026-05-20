import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

interface PropertyProps {
  id: string;
  image: string;
  title: string;
  price: string;
  location: string;
  beds: integer;
  baths: integer;
  sqft: string;
}

export default function PropertyCard({ id, image, title, price, location, beds, baths, sqft }: PropertyProps) {
  return (
    <Link to={`/properties/${id}`} className="block bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group cursor-pointer font-sans">
      <div className="h-48 md:h-64 w-full bg-gray-200 mb-4 overflow-hidden rounded-lg relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80"></div>
        <img 
          src={image} 
          alt={title} 
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1470&q=80";
          }}
          className="w-full h-full object-cover relative z-0 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 text-white z-20">
          <p className="text-[10px] font-bold px-2 py-1 bg-black/50 backdrop-blur-md rounded uppercase tracking-widest">{location}</p>
        </div>
      </div>
      
      <div className="flex justify-between items-start mt-2">
        <div className="flex-1 pr-4">
          <h4 className="font-bold text-lg leading-tight group-hover:text-gray-600 transition-colors line-clamp-1">{title}</h4>
          <div className="flex flex-wrap items-center gap-2 text-gray-400 text-[10px] mt-2 font-semibold uppercase tracking-widest">
            <span>{beds} <span className="hidden sm:inline">Beds</span><span className="sm:hidden">B</span></span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>{baths} <span className="hidden sm:inline">Baths</span><span className="sm:hidden">B</span></span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>{sqft} <span className="hidden sm:inline">sqft</span></span>
          </div>
        </div>
        <div className="whitespace-nowrap">
          <p className="text-xl font-bold">{price.replace(/(\$\d+\.?\d*)[M|mK|k]?/, (m) => m.length > 5 ? m.slice(0, -6) + 'M' : m)}</p>
        </div>
      </div>
    </Link>
  );
}
