"use client";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { DataType } from "@/lib/type";
import { useAtom } from "jotai";
import { cartAtom } from "@/lib/atom";
import Image from "next/image";

type CardProps = {
  cardInfo: DataType;
};

const CardItemDisplay = ({ cardInfo }: CardProps) => {
  const [cartItem, setCartItem] = useAtom(cartAtom);

  const handelAddtoCartFn = () => {
    const existingItem = cartItem.find((itemId) => itemId.id === cardInfo.id);

    if (!existingItem) {
      const updateItem = {
        id: cardInfo.id,
        product_name: cardInfo.product_name,
        product_imag: cardInfo.product_imag,
        product_price: cardInfo.product_price,
        quantity: cardInfo.quantity,
      };
      setCartItem([...cartItem, updateItem]);
    }

    console.log("add");
  };

  return (
    <>
      <Card className="w-[320px]">
        <CardContent className="space-y-3">
          <div className="grid place-items-center">
            <Image
              src={cardInfo.product_imag}
              alt="cart-Info"
              width={200}
              height={200}
            />
          </div>
          <div className="text-lg font-bold sm:text-lg">
            Product_Name : {cardInfo.product_name}
          </div>
          <div className="text-lg font-bold sm:text-lg">
            Product_Price : $-{cardInfo.product_price}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full cursor-pointer" onClick={handelAddtoCartFn}>
            Add To Cart
            <ShoppingCart />
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardItemDisplay;
