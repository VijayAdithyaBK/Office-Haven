import React, { useState } from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CheckoutForm {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export default function Cart({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState<CheckoutForm>({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    const orderDetails = {
      customer: formData,
      items,
      total,
      orderDate: new Date().toISOString(),
    };
    console.log('Order placed:', orderDetails);
    clearCart();
    setShowCheckout(false);
    onClose();
    alert('Order placed successfully! We will contact you soon.');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button onClick={onClose} className="p-2">
            <X className="h-6 w-6" />
          </button>
        </div>

        {showCheckout ? (
          <div className="p-4">
            <form onSubmit={handleCheckout} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                />
              </div>
              <button type="submit" className="w-full btn-primary">
                Place Order
              </button>
            </form>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="h-5 w-5" />
                      </button>
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-500">${item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="p-1"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {items.length > 0 && (
              <div className="border-t p-4">
                <div className="flex justify-between text-lg font-semibold mb-4">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => setShowCheckout(true)}
                  className="w-full btn-primary"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}