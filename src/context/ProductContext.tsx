import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

export interface Product {
  id: string;
  productName: string;
  quantity: number;
  price: number;
}

interface ProductContextProps {
  products: Product[];
  addProduct: (product: Product) => void;
}

export const ProductContext = createContext<ProductContextProps | null>(null);

interface ProductProviderProps {
  children: ReactNode; 
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  
  useEffect(() => {
    axios.get('http://localhost:5000/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  
  const addProduct = (product: Product) => {
    axios.post('http://localhost:5000/products', product).then((response) => {
      setProducts((prev) => [...prev, response.data]);
    });
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
