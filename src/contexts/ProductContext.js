import React, { createContext, useState, useEffect } from "react";
import items from "../components/AllData";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(items);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    setProducts(items);
  }, []);

  return (
    <ProductContext.Provider value={{ products, category, setCategory }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;