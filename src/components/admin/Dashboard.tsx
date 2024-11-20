import React from 'react';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, LogOut } from 'lucide-react';
import { useAdminStore } from '../../store/adminStore';

export default function Dashboard() {
  const logout = useAdminStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white">
        <div className="p-4">
          <h2 className="text-xl font-bold">Admin Dashboard</h2>
        </div>
        <nav className="mt-8">
          <Link
            to="/admin/dashboard"
            className="flex items-center px-4 py-2 hover:bg-blue-800"
          >
            <LayoutDashboard className="h-5 w-5 mr-2" />
            Overview
          </Link>
          <Link
            to="/admin/dashboard/products"
            className="flex items-center px-4 py-2 hover:bg-blue-800"
          >
            <Package className="h-5 w-5 mr-2" />
            Products
          </Link>
          <Link
            to="/admin/dashboard/orders"
            className="flex items-center px-4 py-2 hover:bg-blue-800"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Orders
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 hover:bg-blue-800 w-full"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}