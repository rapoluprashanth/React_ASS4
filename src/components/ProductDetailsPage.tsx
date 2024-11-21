import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <p>Details of product ID: {id}</p>
    </div>
  );
};

export default ProductDetailsPage;
