import React from 'react';

const categories = [
  {
    title: 'Large Office Tables',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    description: 'Premium executive desks for your office'
  },
  {
    title: 'Conference Tables',
    image: 'https://images.unsplash.com/photo-1572025442646-866d16c84a54?auto=format&fit=crop&q=80',
    description: 'Professional meeting room solutions'
  },
  {
    title: 'Workstations',
    image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80',
    description: 'Modern modular workspace systems'
  },
  {
    title: 'Ergonomic Seating',
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80',
    description: 'Comfortable and supportive office chairs'
  }
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.title} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
                <img
                  src={category.image}
                  alt={category.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}