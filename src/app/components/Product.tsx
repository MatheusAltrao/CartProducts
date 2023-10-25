"use client";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/CartContext";
import { CheckCircle } from "@phosphor-icons/react";
import { Star } from "@phosphor-icons/react/dist/ssr/Star";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useContext, useState } from "react";
interface ProductProps {
  product: any;
}

const Product = ({ product }: ProductProps) => {
  const [isAdd, setIsAdd] = useState(false);

  function showAddedProductToCart() {
    setIsAdd(true);

    const interval = setInterval(() => {
      setIsAdd(false);
      clearInterval(interval);
    }, 2000);
  }

  const formatedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);

  const { addProductToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addProductToCart({ ...product });
    showAddedProductToCart();
  };

  return (
    <div className="p-5 w-[300px] border border-zinc-700 rounded hover:border-violet-800 transition-colors">
      <h3 className="font-semibold text-xl tracking-tight text-zinc-200">
        {product.name}
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
        <Button size="icon" variant="outline">
          <Minus size={16} />
        </Button>
        <p className="text-[1.25rem] w-11 text-center">{product.quantity}</p>

        <Button size="icon" variant="outline">
          <Plus size={16} />
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-zinc-50">{formatedPrice}</span>
        <Button
          variant="outline"
          className="w-[130px]"
          onClick={handleAddToCart}>
          {isAdd ? (
            <CheckCircle weight="fill" className="text-green-500" size={22} />
          ) : (
            <div className="flex items-center justify-center gap-2">
              Adicionar <ShoppingCart size={20} />
            </div>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Product;
