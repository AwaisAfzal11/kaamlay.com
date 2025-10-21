import React, { useState } from 'react';

const serviceOptions = [
  "Electrical Works", "Plumbing Works", "AC & Refrigerator Services",
  "Carpenter Works", "Car Wash (Home Service)", "General Inquiry"
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', serviceType: serviceOptions[0], message: ''
  });
  const [status, setStatus] = useState({ submitting: false, message: '', error: false });

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, message: '', error: false });

    const PHP_MAILER_URL = 'http://your-domain.com/path/to/your/contact.php';
    const postData = new FormData();
    Object.keys(formData).forEach(key => postData.append(key, formData[key]));
    
    try {
      const response = await fetch(PHP_MAILER_URL, { method: 'POST', body: postData });
      const result = await response.json();
      if (result.status === 'success') {
        setStatus({ submitting: false, message: result.message, error: false });
        setFormData({ fullName: '', email: '', phone: '', serviceType: serviceOptions[0], message: '' });
      } else {
        setStatus({ submitting: false, message: result.message || 'An error occurred.', error: true });
      }
    } catch (error) {
      setStatus({ submitting: false, message: 'An unexpected error occurred. Please try again.', error: true });
    }
  };

  return (
    <div className="bg-light py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark">We're Ready to Help</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Your comfort and satisfaction are our top priorities. Let us know how we can assist you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden md:flex">
          <div className="md:w-1/3 bg-primary text-white p-8 space-y-6">
            <h2 className="font-bold text-2xl">Contact Information</h2>
            <p>Fill out the form and our team will get back to you within 24 hours.</p>
            <div className="space-y-4">
              <p className="flex items-center"><svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> 0300-1311111</p>
              <p className="flex items-center"><svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> Kaamlay.com@gmail.com</p>
            </div>
          </div>

          <div className="p-8 md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"/>
                </div>
              </div>
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">Service Type</label>
                <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                  {serviceOptions.map(opt => <option key={opt}>{opt}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">How can we help?</label>
                <textarea name="message" rows="4" value={formData.message} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"></textarea>
              </div>
              <div>
                <button type="submit" disabled={status.submitting} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-bold text-white bg-primary hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400 transition-all">
                  {status.submitting ? 'Sending...' : 'Submit Request'}
                </button>
              </div>
            </form>
            {status.message && <p className={`mt-4 text-center font-medium ${status.error ? 'text-red-600' : 'text-green-600'}`}>{status.message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;