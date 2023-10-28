import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 pt-4 pb-8 mt-28">
      <h3 className="text-zinc-200 text-[20px]">MatheuStore</h3>
      <p className="text-zinc-400 text-sm">
        ©Todos os direitos reservados 2023
      </p>
      <p className="text-zinc-400 text-sm">
        Desenvolvido com carinho por{" "}
        <Link
          className="text-gradient hover:brightness-110 transition-all duration-150"
          target="_blank"
          href="https://myportfolio-omega-nine.vercel.app/">
          <span className="border-b border-zinc-400">Matheus Altrão</span>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
