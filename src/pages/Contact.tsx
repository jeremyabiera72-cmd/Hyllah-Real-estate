import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-28">
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Column - Contact Details */}
          <div>
            <h1 className="font-bold tracking-tighter text-5xl md:text-6xl mb-6">Let's Connect.</h1>
            <p className="text-gray-500 text-lg mb-12">
              Whether you are looking to acquire a new property, sell an existing asset, or seek expert consultation, our team is ready to assist.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-gray-400 mt-1" />
                <div>
                  <h4 className="font-bold tracking-tighter text-xl mb-1">Headquarters</h4>
                  <p className="text-gray-600">Davao City<br />Philippines</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-gray-400 mt-1" />
                <div>
                  <h4 className="font-bold tracking-tighter text-xl mb-1">Phone</h4>
                  <p className="text-gray-600">+63955 367 3625<br />+5394 764 2982</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-gray-400 mt-1" />
                <div>
                  <h4 className="font-bold tracking-tighter text-xl mb-1">Email</h4>
                  <p className="text-gray-600">yumisbusiness88@gmail.com<br />yunasbusinessdigital88@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-gray-400 mt-1" />
                <div>
                  <h4 className="font-bold tracking-tighter text-xl mb-1">Office Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM (PST)<br />Weekend: By Appointment Only</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-gray-50 p-8 md:p-12 border border-gray-100">
            <h3 className="font-bold tracking-tighter text-3xl mb-8">Send an Inquiry</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                  <input type="text" className="w-full border-b border-gray-300 bg-transparent px-2 py-2 focus:outline-none focus:border-[#111111] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                  <input type="text" className="w-full border-b border-gray-300 bg-transparent px-2 py-2 focus:outline-none focus:border-[#111111] transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                <input type="email" className="w-full border-b border-gray-300 bg-transparent px-2 py-2 focus:outline-none focus:border-[#111111] transition-colors" />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Subject</label>
                <select className="w-full border-b border-gray-300 bg-transparent px-2 py-2 focus:outline-none focus:border-[#111111] transition-colors text-gray-700">
                  <option>Property Inquiry</option>
                  <option>Selling Representation</option>
                  <option>General Question</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea rows={5} className="w-full border-b border-gray-300 bg-transparent px-2 py-2 focus:outline-none focus:border-[#111111] transition-colors resize-none"></textarea>
              </div>

              <button className="bg-[#111111] text-white px-8 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-gray-800 transition-colors mt-6 w-full md:w-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Embed Section */}
      <section className="h-[400px] w-full bg-gray-200">
        <iframe
          src="https://maps.google.com/maps?q=Davao%20City,%20Philippines&t=&z=12&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale opacity-80"
        ></iframe>
      </section>
    </div>
  );
}
