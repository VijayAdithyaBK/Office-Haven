import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import FeaturedProducts from './components/FeaturedProducts';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ProductsPage from './components/ProductsPage';
import SolutionsPage from './components/SolutionsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import AdminLogin from './components/admin/AdminLogin';
import Dashboard from './components/admin/Dashboard';
import ProductManagement from './components/admin/ProductManagement';
import OrderManagement from './components/admin/OrderManagement';
import { CartProvider } from './context/CartContext';
import { useAdminStore } from './store/adminStore';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAdminStore((state) => state.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/admin" />;
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          {/* Main Website Routes */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <main>
                  <div id="home">
                    <Hero />
                    <FeaturedCategories />
                    <FeaturedProducts />
                    <Testimonials />
                  </div>
                  <ProductsPage />
                  <div id="solutions">
                    <SolutionsPage />
                  </div>
                  <div id="about">
                    <AboutPage />
                  </div>
                  <div id="contact">
                    <ContactPage />
                  </div>
                </main>
                <Footer />
              </>
            }
          />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<OrderManagement />} />
            <Route path="products" element={<ProductManagement />} />
            <Route path="orders" element={<OrderManagement />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;