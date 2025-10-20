import React from 'react';

const services = [
  { icon: "🔌", title: "Electrical Works", description: "Wiring, lighting, power sockets, and panel repairs by certified electricians." },
  { icon: "🚰", title: "Plumbing Works", description: "Fixing leaks, installing fittings, and ensuring smooth water flow for homes and offices." },
  { icon: "❄️", title: "AC & Refrigerator Services", description: "Complete maintenance, gas refilling, and compressor repair services." },
  { icon: "🪚", title: "Carpenter Works", description: "Custom furniture repair, wood polish, door fittings, and kitchen cabinets." },
  { icon: "🚗", title: "Car Wash (Home Service)", description: "Professional car cleaning at your doorstep—interior, exterior, and detailing." },
  { icon: "🏠", title: "Free Home General Check-Up", description: "Annual maintenance check-up to prevent costly breakdowns for members." },
  { icon: "❄️", title: "Free Winter Check-Up", description: "Get your home winter-ready with insulation, geyser, and heating system checks." },
];

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Your Trusted Partner for Home & Office Maintenance</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Welcome to Kaamlay.com, Pakistan’s first membership-based professional maintenance company dedicated to simplifying your everyday life.
        </p>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Redefining Maintenance in Pakistan</h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto mb-4">
          At Kaamlay, we believe in redefining the way maintenance works in Pakistan. Through technology, transparency, and trust, we connect you with expert technicians who deliver world-class results at your doorstep. From small household repairs to complete office maintenance — one platform takes care of it all.
        </p>
        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
          With flexible membership plans, you can enjoy free services, priority bookings, and seasonal checkups, including our Free Home General Checkup and Free Winter Checkup — ensuring your comfort and safety all year round. Join the Kaamlay family today and experience a new standard of convenience, reliability, and peace of mind.
        </p>
        <p className="mt-8 font-semibold text-xl text-gray-700">Kaamlay.com – Because Your Comfort is Our Business.</p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;