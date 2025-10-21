import React from 'react';
import { Link } from 'react-router-dom';

// Heroicons - a professional icon set from the makers of Tailwind CSS
const ServiceIcon = ({ d }) => <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d}></path></svg>;

const services = [
  { icon: <ServiceIcon d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />, title: "Electrical Works" },
  { icon: <ServiceIcon d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />, title: "Plumbing Works" },
  { icon: <ServiceIcon d="M5 13l4 4L19 7" />, title: "AC & Refrigerator" },
  { icon: <ServiceIcon d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />, title: "Carpenter Works" },
  { icon: <ServiceIcon d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />, title: "Car Wash (Home)" },
  { icon: <ServiceIcon d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3" />, title: "Free General Check-Up" },
];

const Feature = ({ icon, title, children }) => (
  <div className="text-center">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary/20 mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-dark mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

const HomePage = () => {
  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-dark leading-tight mb-4">
              Reliable Home & Office Maintenance, Simplified.
            </h1>
            <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0 mb-8">
              From electricians to plumbers, get trained, verified, and reliable professionals at your doorstep. Join the Kaamlay family for peace of mind.
            </p>
            <Link to="/contact" className="bg-primary text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 inline-block">
              Schedule a Service Today
            </Link>
          </div>
          <div>
            {/* IMPORTANT: Replace this placeholder with a real image */}
            <img src="https://via.placeholder.com/600x400.png/0D9488/FFFFFF?text=Kaamlay+Professionals" alt="Professional Maintenance Services" className="rounded-lg shadow-2xl"/>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-light">
          <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
            <Feature icon={<ServiceIcon d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />} title="Verified Professionals">
              Every technician is background-checked, trained, and committed to quality service.
            </Feature>
            <Feature icon={<ServiceIcon d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />} title="On-Time & Convenient">
              We value your time. Schedule services at your convenience and expect us to be punctual.
            </Feature>
            <Feature icon={<ServiceIcon d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l-3 3m6 0l-3-3m-3 18l3-3m-6 0l3 3" />} title="Transparent Pricing">
              No hidden fees. Enjoy clear, upfront pricing with our flexible membership plans.
            </Feature>
          </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-dark">What We Do Best</h2>
            <p className="mt-4 text-lg text-gray-600">A complete range of maintenance solutions under one roof.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-light p-8 rounded-xl border border-transparent hover:border-secondary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {service.icon}
                <h3 className="text-2xl font-bold text-dark mt-4 mb-2">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;