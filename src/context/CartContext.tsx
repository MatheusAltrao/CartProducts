"use client";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";

export interface CartProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  total: number;
  totalQuantity: number;
  addProductToCart: (product: CartProduct) => void;
  decreaseProductQuantity: (productId: number) => void;
  increaseProductQuantity: (productId: number) => void;
  deleteProduct: (producId: number) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  total: 0,
  totalQuantity: 0,
  addProductToCart: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  deleteProduct: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const addProductToCart = (product: CartProduct) => {
    const productIsAlreadyOnCart = products.some(
      (item) => item.id === product.id
    );

    if (productIsAlreadyOnCart) {
      setProducts((prev) =>
        prev.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + product.quantity,
            };
          }

          return item;
        })
      );

      return;
    }

    setProducts((prev) => [...prev, product]);
  };

  useEffect(() => {
    console.log(products);
  }, [products]);

  const decreaseProductQuantity = (productId: number) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const increaseProductQuantity = (productId: number) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const deleteProduct = (productId: number) => {
    setProducts((prev) => prev.filter((item) => item.id !== productId));
  };

  const totalQuantity = useMemo(() => {
    return products.reduce((acc, products) => {
      return acc + products.quantity;
    }, 0);
  }, [products]);

  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
  }, [products]);

  return (
    <div>
      <CartContext.Provider
        value={{
          products,
          addProductToCart,
          decreaseProductQuantity,
          increaseProductQuantity,
          deleteProduct,
          total,
          totalQuantity,
        }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartProvider;
