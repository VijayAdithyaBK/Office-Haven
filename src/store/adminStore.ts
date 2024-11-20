import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AdminState {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123' // In a real app, this would be handled securely
};

export const useAdminStore = create<AdminState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      login: (username: string, password: string) => {
        if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
          set({ isAuthenticated: true });
          return true;
        }
        return false;
      },
      logout: () => set({ isAuthenticated: false })
    }),
    {
      name: 'admin-storage'
    }
  )
);