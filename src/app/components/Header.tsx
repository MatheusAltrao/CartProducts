import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CartContext } from "@/context/CartContext";
import { X } from "@phosphor-icons/react";
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr/ShoppingCart";
import { useContext } from "react";
const Header = () => {
  const { products } = useContext(CartContext);

  return (
    <header className=" mx-auto flex pt-8 pb-4 items-center justify-between text-zinc-100 border-b border-zinc-800">
      <h2>MatheuStore</h2>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="  relative bg-transparent ">
            {products.length > 0 && (
              <div className="h-6 w-6 absolute  rounded-full -top-3 -right-3 p-1 bg-violet-600 flex items-center justify-center">
                <p className="font-semibold   ">{products.length}</p>
              </div>
            )}
            <ShoppingCart size={22} />
          </Button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader className="relative">
            <SheetClose>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent absolute -top-2 -right-2">
                <X size={18} />
              </Button>
            </SheetClose>

            <SheetTitle>Carrinho</SheetTitle>
            <SheetDescription>
              Aqui estão todas as suas compras feitas no site, clique no botão
              Adicionar, que elas aparecerão aqui
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
