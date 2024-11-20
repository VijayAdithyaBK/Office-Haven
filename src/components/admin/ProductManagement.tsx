import React, { useState } from 'react';
import { Plus, Edit, Trash } from 'lucide-react';
import { useProductStore, Product } from '../../store/productStore';

export default function ProductManagement() {
  const { products, addProduct, updateProduct, deleteProduct } = useProductStore();
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    name: '',
    price: 0,
    image: '',
    category: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      updateProduct(isEditing, formData);
    } else {
      addProduct(formData);
    }
    setFormData({
      name: '',
      price: 0,
      image: '',
      category: '',
      description: ''
    });
    setIsEditing(null);
  };

  const handleEdit = (product: Product) => {
    setIsEditing(product.id);
    setFormData(product);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Product Management</h2>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={3}
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <button type="submit" className="btn-primary">
            {isEditing ? 'Update Product' : 'Add Product'}
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <p className="text-sm text-gray-500 mt-2">{product.description}</p>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => handleEdit(product)}
                  className="p-2 text-blue-600 hover:text-blue-800"
                >
                  <Edit className="h-5 w-5" />
                </button>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="p-2 text-red-600 hover:text-red-800"
                >
                  <Trash className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}