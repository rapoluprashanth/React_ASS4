import React from 'react';
import Product from './Product';

const ProductsList: React.FC<{ products: any[] }> = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductsList;
