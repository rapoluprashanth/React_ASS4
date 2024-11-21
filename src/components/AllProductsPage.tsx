import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductsList from './ProductsList';
import { Link } from 'react-router-dom';

const AllProductsPage: React.FC = () => {
  const context = useContext(ProductContext);

  if (!context) return null;

  return (
    <div>
      <h1>Products</h1>
      <ProductsList products={context.products} />
      <Link to="/add-product">Add Product</Link>
    </div>
  );
};

export default AllProductsPage;
