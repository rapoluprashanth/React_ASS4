import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import AboutPage from './components/AboutPage';
import AllProductsPage from './components/AllProductsPage';
import AddProductPage from './components/AddProductPage';
import ProductDetailsPage from './components/ProductDetailsPage';

const App: React.FC = () => {
  return (
    <ProductProvider>
      <Router>
        <nav>
          <Link to="/">About </Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
};

export default App;
