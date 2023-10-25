"use client";

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";

export default function Home() {
  const [products, setProducts] = useState([
    { id: 1, name: "Teclado", quantity: 1, price: 59.99 },
    { id: 2, name: "Mouse", quantity: 1, price: 39.99 },
    { id: 3, name: "Headset", quantity: 1, price: 89.99 },
    { id: 4, name: "Monitor", quantity: 1, price: 209.99 },
    { id: 5, name: "Notebook", quantity: 1, price: 809.99 },
    { id: 6, name: "Smartphone", quantity: 1, price: 509.99 },
    { id: 7, name: "Tablet", quantity: 1, price: 159.99 },
    { id: 8, name: "Câmera", quantity: 1, price: 129.99 },
    { id: 9, name: "Fone de Ouvido", quantity: 1, price: 49.99 },
  ]);

  return (
    <div className="bg-zinc-950 min-h-screen w-full pb-20">
      <div className="w-full max-w-[1250px] px-4 mx-auto">
        <Header />
        <Hero />

        <div className=" ">
          <header className="text-center ">
            <h2 className="text-[32px] text-zinc-300">
              Conheça todos os nossos produtos!
            </h2>
            <p className="text-[18px] text-zinc-600 mt-6 mb-8 max-w-[630px] mx-auto">
              Mergulhe em um mundo de variedade e possibilidades, oferecemos uma
              ampla gama de produtos para atender às suas necessidades.
            </p>
          </header>

          <div className="flex items-center justify-center gap-6 flex-wrap">
            {products.map((product) => (
              <Product
                key={product.id}
                name={product.name}
                quantity={product.quantity}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
