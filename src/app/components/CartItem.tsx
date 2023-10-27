import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/CartContext";
import { Minus, Plus, Trash } from "lucide-react";
import { useContext } from "react";

interface CartItemProps {
  products: any;
}

const CartItem = ({ products }: CartItemProps) => {
  const { increaseProductQuantity, decreaseProductQuantity, deleteProduct } =
    useContext(CartContext);

  const formatedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(products.price);

  const handleIncreaseProductQuantity = () => {
    increaseProductQuantity(products.id);
  };

  const handleDecreaseProductQuantity = () => {
    decreaseProductQuantity(products.id);
  };

  const handleDeleteProduct = () => {
    deleteProduct(products.id);
  };

  return (
    <div className="border rounded border-zinc-800 p-2 flex items-center justify-between">
      <div>
        <div>
          <h2 className="text-zinc-200 text-xl">{products.name}</h2>
          <p className="text-zinc-400">{formatedPrice}</p>
        </div>

        <div
          className={` ${
            products.quantity == 1 && "cursor-not-allowed"
          } flex items-center gap-1 text-zinc-100 mt-2`}>
          <Button
            disabled={products.quantity == 1}
            onClick={handleDecreaseProductQuantity}
            size="icon"
            variant="outline"
            className="h-6 w-6">
            <Minus size={16} />
          </Button>
          <p className=" w-8 text-center">{products.quantity}</p>

          <Button
            onClick={handleIncreaseProductQuantity}
            size="icon"
            variant="outline"
            className="h-6 w-6">
            <Plus size={16} />
          </Button>
        </div>
      </div>

      <Button
        onClick={handleDeleteProduct}
        size="icon"
        variant="outline"
        className="hover:text-red-500">
        <Trash size={18} />
      </Button>
    </div>
  );
};

export default CartItem;
