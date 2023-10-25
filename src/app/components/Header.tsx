import { ShoppingCart } from "@phosphor-icons/react/dist/ssr/ShoppingCart";

const Header = () => {
  return (
    <header className=" mx-auto flex py-4 items-center justify-between text-zinc-100 border-b border-zinc-800">
      <h2>MatheuStore</h2>

      <button className=" border-zinc-700 border p-2 rounded  ">
        {" "}
        <ShoppingCart size={22} />{" "}
      </button>
    </header>
  );
};

export default Header;
