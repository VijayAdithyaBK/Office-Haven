import React, { useState } from 'react';
import { Menu, Search, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { items } = useCart();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button className="p-2 rounded-md text-gray-600 lg:hidden">
                <Menu className="h-6 w-6" />
              </button>
              <div className="ml-4 flex items-center">
                <h1 className="text-2xl font-bold text-blue-900">Elegant Office Haven</h1>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-900">Home</button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-blue-900">Products</button>
              <button onClick={() => scrollToSection('solutions')} className="text-gray-700 hover:text-blue-900">Solutions</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-900">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-900">Contact</button>
            </div>

            <div className="flex items-center space-x-4">
              <button 
                className="p-2 text-gray-600 hover:text-blue-900"
                onClick={() => setShowSearch(!showSearch)}
              >
                <Search className="h-5 w-5" />
              </button>
              <button 
                className="p-2 text-gray-600 hover:text-blue-900 relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-5 w-5" />
                {items.length > 0 && (
                  <span className="absolute top-0 right-0 bg-blue-600 text-white rounded-full h-4 w-4 text-xs flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </button>
            </div>
          </div>
          
          {showSearch && (
            <div className="border-t py-4">
              <input
                type="search"
                placeholder="Search products..."
                className="w-full px-4 py-2 border rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          )}
        </div>
      </nav>
      
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}