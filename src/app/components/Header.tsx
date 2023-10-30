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
import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
const Header = () => {
  const { products, total, totalQuantity } = useContext(CartContext);
  const [scrollY, setScrollY] = useState(0);

  const formatedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }, []);

  return (
    <header className={`  w-full  flex  items-center justify-center `}>
      <div
        className={` ${
          scrollY == 0 ? "" : ""
        } w-full max-w-[1250px] mx-auto fixed top-0 py-4 px-4 border-b ${
          scrollY > 0 && " xl:top-3  xl:border rounded"
        }    bg-zinc-950 border-zinc-800 transition-all duration-200 flex  items-center justify-between text-zinc-100`}>
        <h2>MatheuStore</h2>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="  relative bg-transparent flex items-center justify-center gap-2  ">
              {products.length > 0 && (
                <div className="h-6 w-6 absolute  rounded-full -top-3 -right-3 p-1 bg-violet-600 flex items-center justify-center">
                  <p className="font-semibold  text-sm ">{totalQuantity}</p>
                </div>
              )}

              <ShoppingCart size={22} />
            </Button>
          </SheetTrigger>

          <SheetContent>
            <SheetHeader className="relative mb-4">
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

            <div className="w-full bg-zinc-800 h-[1px] rounded mt-4 mb-8" />

            {products.length > 0 ? (
              <div className="h-[40vh] overflow-y-scroll scrollbar flex flex-col gap-4 pr-2">
                {products.map((product: any) => (
                  <CartItem key={product.id} products={product} />
                ))}
              </div>
            ) : (
              <p className="text-zinc-200">
                Você não adicionou nenhum produto no carrinho ainda. Boas
                compras!!
              </p>
            )}

            {products.length > 0 && (
              <>
                <div className="w-full bg-zinc-800 h-[1px] rounded mt-8 mb-10" />

                <div className="text-zinc-200">
                  <div className="flex items-center justify-between">
                    <h2>Quantidade de produtos</h2>
                    <p className="text-zinc-50 font-semibold">
                      {totalQuantity}
                    </p>
                  </div>

                  <div className="w-full bg-zinc-800 h-[1px] rounded my-2" />

                  <div className="flex items-center justify-between">
                    <h2>Taxa de entrega</h2>
                    <p className="text-zinc-50 font-semibold">GRÁTIS</p>
                  </div>

                  <div className="w-full bg-zinc-800 h-[1px] rounded my-2" />

                  <div className="flex items-center justify-between">
                    <h2>Preço Total</h2>
                    <p className="text-zinc-50 font-semibold">
                      {formatedPrice}
                    </p>
                  </div>
                </div>
              </>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
