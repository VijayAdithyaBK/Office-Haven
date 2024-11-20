import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Elegant Office Haven</h3>
            <p className="text-blue-200 mb-4">Transform your workspace with premium office furniture solutions.</p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-blue-300" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-blue-300" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-blue-300" />
              <Linkedin className="h-5 w-5 cursor-pointer hover:text-blue-300" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Products</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Services</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-blue-200">123 Business Avenue, Suite 100</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span className="text-blue-200">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span className="text-blue-200">info@elegantoffice.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-blue-200 mb-4">Subscribe to receive updates and exclusive offers.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md text-gray-900"
              />
              <button className="bg-white text-blue-900 px-4 py-2 rounded-md font-semibold hover:bg-blue-100 transition duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} Elegant Office Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}