const Hero = () => {
  return (
    <div className=" h-[70vh] flex items-center text-center flex-col w-full">
      <h1 className="text-[40px] font-semibold text-zinc-300 pt-32">
        {" "}
        Variedades de itens que <span className="text-gradient">
          Elevam
        </span>{" "}
        <br /> seu estilo e<span className="text-gradient"> Simplificam</span>{" "}
        sua Vida
      </h1>
      <p className="text-zinc-600 mt-6 text-[20px] mb-10 max-w-[630px]">
        Encontre detalhes que fazem a diferença em seu estilo, desde joias{" "}
        deslumbrantes até relógios de alta qualidade
      </p>

      <button className="button-primary w-[354px]">Ver Produtos</button>
    </div>
  );
};

export default Hero;
