import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div className=" h-[90vh] flex items-center text-center flex-col w-full">
      <h1 className="  text-[20px] sm:text-[40px] font-semibold text-zinc-300 pt-32">
        Variedades de itens que <br />{" "}
        <span className="text-gradient">Elevam </span>
        seu setup.
      </h1>
      <p className="text-zinc-600 mt-6 sm:text-[20px] mb-10 max-w-[630px]">
        Encontre detalhes que fazem a diferença em seu setup, temos uma grande
        variedade de produtos, seja bem vindo!
      </p>

      <a
        className="w-full flex items-center justify-center"
        href="#productList">
        <button className="button-primary w-full max-w-[354px]">
          Ver Produtos
        </button>
      </a>

      <ArrowDown className="text-zinc-200 mt-24 animate-bounce" size={32} />
    </div>
  );
};

export default Hero;
