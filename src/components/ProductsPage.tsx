import React, { useState, useMemo } from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';

const categories = ['All', 'Desks', 'Chairs', 'Tables', 'Storage', 'Accessories'];
const sortOptions = ['Latest', 'Price: Low to High', 'Price: High to Low'];

const products = [
  {
    id: 1,
    name: 'Executive Desk Pro',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80',
    category: 'Desks',
    description: 'Premium executive desk with built-in storage'
  },
  {
    id: 2,
    name: 'Ergonomic Chair Elite',
    price: 599,
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80',
    category: 'Chairs',
    description: 'Fully adjustable ergonomic office chair'
  },
  {
    id: 3,
    name: 'Conference Table X1',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1572025442646-866d16c84a54?auto=format&fit=crop&q=80',
    category: 'Tables',
    description: 'Modern conference table for 12 people'
  },
  {
    id: 4,
    name: 'Filing Cabinet Pro',
    price: 399,
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80',
    category: 'Storage',
    description: 'Spacious filing cabinet with lock system'
  }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Latest');
  const { addToCart } = useCart();

  const sortedProducts = useMemo(() => {
    let filtered = selectedCategory === 'All'
      ? products
      : products.filter(product => product.category === selectedCategory);

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'Price: Low to High':
          return a.price - b.price;
        case 'Price: High to Low':
          return b.price - a.price;
        default:
          return 0;
      }
    });
  }, [selectedCategory, sortBy]);

  return (
    <div id="products" className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Our Products</h1>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-blue-900" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-900 text-white'
                      : 'bg-white text-blue-900 hover:bg-blue-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-900">${product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="btn-primary"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}