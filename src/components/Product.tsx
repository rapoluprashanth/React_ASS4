import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product: React.FC<{ product: any }> = ({ product }) => {
  const navigate = useNavigate();

  const viewDetails = () => {
    if (window.confirm('Are you sure you want to view the details?')) {
      navigate(`/products/${product.id}`);
    }
  };

  return (
    <tr onClick={viewDetails}>
      <td>{product.productName}</td>
      <td>{product.quantity}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default Product;
