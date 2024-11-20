import React from 'react';

const products = [
  {
    id: 1,
    name: 'Executive Desk Pro',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80',
    category: 'Desks'
  },
  {
    id: 2,
    name: 'Ergonomic Chair Elite',
    price: 599,
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80',
    category: 'Chairs'
  },
  {
    id: 3,
    name: 'Conference Table X1',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1572025442646-866d16c84a54?auto=format&fit=crop&q=80',
    category: 'Tables'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-900">${product.price}</span>
                    <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}