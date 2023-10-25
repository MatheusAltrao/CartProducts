import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash } from "lucide-react";

interface CartItemProps {
  products: any;
}

const CartItem = ({ products }: CartItemProps) => {
  const formatedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(products.price);

  return (
    <div className="border rounded border-zinc-800 p-2 flex items-center justify-between">
      <div>
        <div>
          <h2 className="text-zinc-200 text-xl">{products.name}</h2>
          <p className="text-zinc-400">{formatedPrice}</p>
        </div>

        <div className="flex items-center gap-1 text-zinc-100 mt-2">
          <Button size="icon" variant="outline" className="h-6 w-6">
            <Minus size={16} />
          </Button>
          <p className=" w-8 text-center">{products.quantity}</p>

          <Button size="icon" variant="outline" className="h-6 w-6">
            <Plus size={16} />
          </Button>
        </div>
      </div>

      <Button size="icon" variant="outline" className="hover:text-red-500">
        <Trash size={18} />
      </Button>
    </div>
  );
};

export default CartItem;
