import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (555) 123-4567', '+1 (555) 765-4321'],
    action: 'tel:+15551234567'
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@elegantoffice.com', 'support@elegantoffice.com'],
    action: 'mailto:info@elegantoffice.com'
  },
  {
    icon: MapPin,
    title: 'Location',
    details: ['123 Business Avenue', 'Suite 100, New York, NY 10001'],
    action: '#map'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM'],
    action: null
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help you create the perfect workspace. Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Message subject"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.title} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-900" />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-900 ml-3">{item.title}</h3>
                    </div>
                    {item.details.map((detail, index) => (
                      <p key={index} className="text-gray-600">{detail}</p>
                    ))}
                    {item.action && (
                      <a
                        href={item.action}
                        className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
                      >
                        {item.title === 'Location' ? 'Get Directions' : `Contact via ${item.title}`}
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Our Location</h3>
              <div className="aspect-[4/3] bg-gray-200 rounded-lg">
                {/* Replace with actual map implementation */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Map placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}