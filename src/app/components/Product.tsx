import { Minus } from "@phosphor-icons/react/dist/ssr/Minus";
import { Plus } from "@phosphor-icons/react/dist/ssr/Plus";
import { Star } from "@phosphor-icons/react/dist/ssr/Star";

interface ProductProps {
  name: string;
  quantity: number;
  price: number;
}

const Product = ({ name, quantity, price }: ProductProps) => {
  const formatedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <div className="p-5 w-[300px] border border-zinc-700 rounded hover:border-violet-800 transition-colors">
      <h3 className="font-semibold text-xl tracking-tight text-zinc-200">
        {name}
      </h3>
      <div className="flex items-center mt-2.5 mb-5">
        <div className="flex items-end gap-1">
          <Star weight="fill" className="text-yellow-500" size={18} />
          <Star weight="fill" className="text-yellow-500" size={18} />
          <Star weight="fill" className="text-yellow-500" size={18} />
          <Star weight="fill" className="text-yellow-500" size={18} />
          <Star weight="fill" className="text-yellow-500" size={18} />
        </div>

        <span className="bg-violet-200 text-violet-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
          5.0
        </span>
      </div>

      <div className="flex items-center gap-1 text-zinc-100 mb-4">
        <button className=" border-zinc-700 border p-1.5 rounded hover:border-zinc-200  transition-colors  ">
          {" "}
          <Minus size={16} />{" "}
        </button>
        <p className="text-[1.25rem] w-11 text-center">{quantity}</p>
        <button className=" border-zinc-700 border p-1.5 rounded hover:border-zinc-200 transition-colors  ">
          {" "}
          <Plus size={16} />{" "}
        </button>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-zinc-50">{formatedPrice}</span>
        <a href="#" className="button-gradient w-[120px] ">
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default Product;
