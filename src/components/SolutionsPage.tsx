import React from 'react';
import { Building2, Users, Briefcase, Coffee } from 'lucide-react';

const solutions = [
  {
    title: 'Corporate Offices',
    icon: Building2,
    description: 'Complete office setups for corporate environments',
    features: ['Executive suites', 'Open workspaces', 'Meeting rooms', 'Reception areas']
  },
  {
    title: 'Coworking Spaces',
    icon: Users,
    description: 'Flexible furniture solutions for shared workspaces',
    features: ['Hot desks', 'Private offices', 'Collaboration zones', 'Breakout areas']
  },
  {
    title: 'Small Businesses',
    icon: Briefcase,
    description: 'Efficient setups for growing companies',
    features: ['Compact workstations', 'Storage solutions', 'Multi-purpose furniture', 'Budget-friendly options']
  },
  {
    title: 'Cafeterias & Break Rooms',
    icon: Coffee,
    description: 'Comfortable spaces for breaks and casual meetings',
    features: ['Dining furniture', 'Lounge seating', 'Coffee stations', 'Social spaces']
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Office Solutions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored furniture solutions for every workplace environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <div key={solution.title} className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <IconComponent className="h-8 w-8 text-blue-900" />
                  </div>
                  <h3 className="text-2xl font-semibold text-blue-900 ml-4">{solution.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-blue-900 text-white rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-blue-100 mb-8">
              Our team of experts will work with you to create the perfect office setup tailored to your specific needs and requirements.
            </p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}