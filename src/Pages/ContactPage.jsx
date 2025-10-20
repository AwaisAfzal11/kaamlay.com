import React, { useState } from 'react';

const serviceOptions = [
  "Electrical Works",
  "Plumbing Works",
  "AC & Refrigerator Services",
  "Carpenter Works",
  "Car Wash (Home Service)",
  "General Inquiry"
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: serviceOptions[0],
    message: ''
  });

  const [status, setStatus] = useState({ submitting: false, message: '', error: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, message: '', error: false });

    // IMPORTANT: Replace with the actual URL to your PHP script
    const PHP_MAILER_URL = 'http://your-domain.com/path/to/your/contact.php';

    const postData = new FormData();
    postData.append('fullName', formData.fullName);
    postData.append('email', formData.email);
    postData.append('phone', formData.phone);
    postData.append('service', formData.serviceType); // Note: PHP script may expect 'service' or 'message'
    postData.append('message', formData.message);

    try {
      const response = await fetch(PHP_MAILER_URL, {
        method: 'POST',
        body: postData,
      });

      const result = await response.json();

      if (result.status === 'success') {
        setStatus({ submitting: false, message: result.message, error: false });
        // Reset form
        setFormData({
          fullName: '', email: '', phone: '', serviceType: serviceOptions[0], message: ''
        });
      } else {
        setStatus({ submitting: false, message: result.message, error: true });
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus({ submitting: false, message: 'An unexpected error occurred. Please try again.', error: true });
    }
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">We’re Here to Help — Anytime, Anywhere</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            At Kaamlay.com, your comfort and satisfaction are our top priorities. Whether you want to book a service, request a quote, or simply learn more, our support team is always ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>📍 Head Office:</strong><br />Kaamlay.com, Islamabad, Pakistan</p>
              <p><strong>📞 Phone:</strong> 0300-1311111</p>
              <p><strong>📧 Email:</strong> Kaamlay.com@gmail.com</p>
              <p><strong>🌐 Website:</strong> www.kaamlay.com</p>
              <hr className="my-6" />
              <p><strong>🕓 Working Hours:</strong><br />Monday – Sunday: 9:00 AM to 9:00 PM<br />(24/7 Support for Registered Members)</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">Select Service Type</label>
                <select name="serviceType" id="serviceType" value={formData.serviceType} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  {serviceOptions.map(option => <option key={option} value={option}>{option}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div>
                <button type="submit" disabled={status.submitting} className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400">
                  {status.submitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
            {status.message && (
              <p className={`mt-4 text-sm text-center ${status.error ? 'text-red-600' : 'text-green-600'}`}>
                {status.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;