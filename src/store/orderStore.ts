import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>;
  total: number;
  orderDate: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
}

interface OrderState {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'status'>) => void;
  updateOrderStatus: (id: string, status: Order['status']) => void;
}

export const useOrderStore = create<OrderState>()(
  persist(
    (set) => ({
      orders: [],
      addOrder: (order) =>
        set((state) => ({
          orders: [
            ...state.orders,
            { ...order, id: Date.now().toString(), status: 'pending' }
          ]
        })),
      updateOrderStatus: (id, status) =>
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === id ? { ...order, status } : order
          )
        }))
    }),
    {
      name: 'order-storage'
    }
  )
);