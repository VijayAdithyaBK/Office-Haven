import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface ProductState {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: number, product: Partial<Product>) => void;
  deleteProduct: (id: number) => void;
}

export const useProductStore = create<ProductState>()(
  persist(
    (set) => ({
      products: [
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
        }
      ],
      addProduct: (product) =>
        set((state) => ({
          products: [...state.products, { ...product, id: Date.now() }]
        })),
      updateProduct: (id, updatedProduct) =>
        set((state) => ({
          products: state.products.map((product) =>
            product.id === id ? { ...product, ...updatedProduct } : product
          )
        })),
      deleteProduct: (id) =>
        set((state) => ({
          products: state.products.filter((product) => product.id !== id)
        }))
    }),
    {
      name: 'product-storage'
    }
  )
);