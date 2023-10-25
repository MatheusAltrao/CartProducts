import { CartContext } from "@/context/CartContext";
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr/ShoppingCart";
import { useContext } from "react";
const Header = () => {
  const { products } = useContext(CartContext);

  return (
    <header className=" mx-auto flex pt-8 pb-4 items-center justify-between text-zinc-100 border-b border-zinc-800">
      <h2>MatheuStore</h2>

      <button className=" border-zinc-700 border p-2 rounded relative  ">
        <div className="h-6 w-6 absolute  rounded-full -top-3 -right-3 p-1 bg-violet-600 flex items-center justify-center">
          <p className="font-semibold   ">
            {products.length > 0 ? products.length : ""}
          </p>
        </div>{" "}
        <ShoppingCart size={22} />{" "}
      </button>
    </header>
  );
};

export default Header;
