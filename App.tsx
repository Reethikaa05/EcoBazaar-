import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

// Layout wrapper to conditionally hide Navbar for auth pages
const Layout: React.FC = () => {
  const location = useLocation();
  const hideNavbar = ['/login', '/signup'].includes(location.pathname);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      {!hideNavbar && <Navbar onSearch={setSearchQuery} />}
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Layout />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;