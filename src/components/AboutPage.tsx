import React from 'react';
import { Award, Users, Clock, Truck } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '15+' },
  { label: 'Satisfied Clients', value: '1000+' },
  { label: 'Products', value: '500+' },
  { label: 'Team Members', value: '50+' }
];

const values = [
  {
    icon: Award,
    title: 'Quality',
    description: 'We source only the finest materials and work with renowned manufacturers.'
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Your satisfaction is our top priority, from consultation to after-sales support.'
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'We deliver on time and stand behind every product we sell.'
  },
  {
    icon: Truck,
    title: 'Service',
    description: 'Professional delivery, installation, and maintenance services.'
  }
];

export default function AboutPage() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Creating inspiring workspaces through innovative furniture solutions since 2008
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="prose prose-lg max-w-none mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2008, Elegant Office Haven began with a simple mission: to transform workspaces into environments that inspire productivity and creativity. What started as a small showroom has grown into a comprehensive office furniture solution provider.
            </p>
            <p className="text-gray-600">
              Today, we serve clients across the country, from startups to Fortune 500 companies, helping them create workspaces that reflect their brand and culture while promoting employee well-being and productivity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value) => {
            const IconComponent = value.icon;
            return (
              <div key={value.title} className="bg-white rounded-lg shadow-md p-6 text-center transform hover:scale-105 transition duration-300">
                <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                  <IconComponent className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-blue-900 text-white rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-blue-100 mb-8">
              To provide innovative and sustainable office furniture solutions that enhance workplace productivity and employee well-being, while delivering exceptional value and service to our clients.
            </p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}