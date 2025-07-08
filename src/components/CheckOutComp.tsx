"use client";

import { cartAtom } from "@/lib/atom";
import { useAtom } from "jotai";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

const CheckOutComp = () => {
  const [cartItem, setCartItem] = useAtom(cartAtom);

  // increment product quantity button

  const incrementButton = (id: string) => {
    const itemIncrement = cartItem.map((items) =>
      items.id === id ? { ...items, quantity: items.quantity + 1 } : items,
    );

    setCartItem(itemIncrement);

    // console.log(id);
  };

  if (cartItem.length === 0) {
    return (
      <div className="grid h-[85dvh] place-items-center">
        <div className="text-2xl font-bold">Your Cart Item is Empty</div>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-5">
        {cartItem.map((item) => (
          <Card key={item.id} className="w-[320px]">
            <CardContent>
              <Image
                src={item.product_imag}
                alt="item"
                height={100}
                width={100}
              />
              <div className="font-bold">
                Product name : {item.product_name}
              </div>
              <div className="font-bold">
                Product Price : $-{item.product_price}
              </div>
              <div className="font-bold">Quantity : {item.quantity}</div>
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button
                className="cursor-pointer"
                size={"icon"}
                onClick={() => incrementButton(item.id)}
              >
                +
              </Button>
              <Button className="cursor-pointer" size={"icon"}>
                -
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CheckOutComp;
