"use client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";

export default function Home() {
  const products = [
    { id: 1, name: "Teclado", quantity: 1, price: 59.99 },
    { id: 2, name: "Mouse", quantity: 1, price: 39.99 },
    { id: 3, name: "Headset", quantity: 1, price: 89.99 },
    { id: 4, name: "Monitor", quantity: 1, price: 209.99 },
    { id: 5, name: "Notebook", quantity: 1, price: 809.99 },
    { id: 6, name: "Smartphone", quantity: 1, price: 509.99 },
    { id: 7, name: "Tablet", quantity: 1, price: 159.99 },
    { id: 8, name: "Câmera", quantity: 1, price: 129.99 },
    { id: 9, name: "Fone de Ouvido", quantity: 1, price: 49.99 },
    { id: 10, name: "MousePad", quantity: 1, price: 49.99 },
    { id: 11, name: "Caixa de Som", quantity: 1, price: 49.99 },
    { id: 12, name: "Leds", quantity: 1, price: 49.99 },
  ];

  return (
    <div className="bg-zinc-950 min-h-screen w-full ">
      <div className="w-full max-w-[1300px] px-4 mx-auto">
        <Header />
        <Hero />

        <div id="productList">
          <header className="text-center mb-20 ">
            <h2 className="text-[20px] sm:text-[32px] text-zinc-300">
              Conheça todos os nossos produtos!
            </h2>
            <p className="sm:text-[18px] text-zinc-600 mt-6  max-w-[630px] mx-auto">
              Mergulhe em um mundo de variedade e possibilidades,prontos para
              atender às suas necessidades.
            </p>
          </header>

          <div className="flex items-center justify-center  flex-wrap gap-4">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
