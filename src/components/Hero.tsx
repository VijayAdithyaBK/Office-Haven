import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[70vh] bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">Transform Your Workspace</h1>
          <p className="text-xl mb-8">Discover premium office furniture that combines elegance, comfort, and functionality.</p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition duration-300">
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  );
}