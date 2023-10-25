"use client";
import { ReactNode, createContext, useEffect, useState } from "react";

export interface CartProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  addProductToCart: (product: CartProduct) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  addProductToCart: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const addProductToCart = (product: CartProduct) => {
    setProducts((prev) => [...prev, product]);
  };

  useEffect(() => {
    console.log("Lista de produtos foi alterada:", products);
  }, [products]);

  return (
    <div>
      <CartContext.Provider value={{ products, addProductToCart }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartProvider;
