"use client";

import Link from "next/link";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";

export default function Home() {
  const products = [
    { id: 1, name: "Teclado", price: 59.99 },
    { id: 2, name: "Mouse", price: 39.99 },
    { id: 3, name: "Headset", price: 89.99 },
    { id: 4, name: "Monitor", price: 209.99 },
    { id: 5, name: "Notebook", price: 809.99 },
    { id: 6, name: "Smartphone", price: 509.99 },
    { id: 7, name: "Tablet", price: 159.99 },
    { id: 8, name: "Câmera", price: 129.99 },
    { id: 9, name: "Fone de Ouvido", price: 49.99 },
    { id: 10, name: "MousePad", price: 49.99 },
    { id: 11, name: "Caixa de Som", price: 49.99 },
    { id: 12, name: "Leds", price: 49.99 },
  ];

  return (
    <div className="bg-zinc-950 min-h-screen w-full ">
      <div className="w-full max-w-[1300px] px-4 mx-auto">
        <Header />
        <Hero />

        <div>
          <header className="text-center mb-20 ">
            <h2 className="text-[32px] text-zinc-300">
              Conheça todos os nossos produtos!
            </h2>
            <p className="text-[18px] text-zinc-600 mt-6  max-w-[630px] mx-auto">
              Mergulhe em um mundo de variedade e possibilidades, oferecemos uma
              ampla gama de produtos para atender às suas necessidades.
            </p>
          </header>

          <div className="flex items-center justify-center  flex-wrap gap-4">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>

        <footer className="border-t border-zinc-800 pt-4 pb-8 mt-28">
          <h3 className="text-zinc-200 text-[20px]">MatheuStore</h3>
          <p className="text-zinc-400">©Todos os direitos reservados 2023</p>
          <p className="text-zinc-400">
            Desenvolvido com carinho por{" "}
            <Link
              className="text-gradient hover:brightness-110 transition-all duration-150"
              target="_blank"
              href="https://myportfolio-omega-nine.vercel.app/">
              <span className="border-b border-zinc-400">Matheus Altrão</span>
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
