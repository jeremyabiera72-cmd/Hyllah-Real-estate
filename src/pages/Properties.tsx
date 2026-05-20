import { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { Search, Filter } from 'lucide-react';
import { allProperties } from '../data/properties';

export default function Properties() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProperties = allProperties.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-28">
      <section className="bg-[#f5f5f5] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="font-bold tracking-tighter text-5xl mb-8">Properties</h1>
          
          {/* Search and Filter Bar */}
          <div className="bg-white p-4 max-w-4xl flex flex-col md:flex-row gap-4 shadow-sm">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search by location or property name..." 
                className="w-full pl-12 pr-4 py-3 bg-gray-50 focus:outline-none focus:bg-white border border-gray-100 focus:border-gray-300 transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-4">
              <div className="relative">
                <select className="appearance-none bg-gray-50 border border-gray-100 py-3 pl-4 pr-12 focus:outline-none focus:border-gray-300 cursor-pointer">
                  <option>Property Type</option>
                  <option>Villa</option>
                  <option>Penthouse</option>
                  <option>Estate</option>
                </select>
                <Filter className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
              
              <button className="bg-[#111111] text-white px-8 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-gray-800 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProperties.map((prop) => (
              <PropertyCard key={prop.id} {...prop} />
            ))}
          </div>
          
          {filteredProperties.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No properties matched your search criteria.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
