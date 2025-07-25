"use client";

import { cartAtom } from "@/lib/atom";
import { useAtom } from "jotai";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { Trash2 } from "lucide-react";

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
  // decrement product quantity button

  const decrementButton = (id: string) => {
    const updatedCart = cartItem.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setCartItem(updatedCart);
  };

  // remove item from cart

  const handelRemoveFn = (id: string) => {
    const itemIncrement = cartItem.filter((items) => items.id !== id);

    setCartItem(itemIncrement);
    console.log(id);
  };

  // total price for every product quantity

  const totalPrice = (price: number, quantity: number) => {
    return price * quantity;
  };

  // Calculate Total Price funcion

  const calculateTotalFn = () => {
    return cartItem.reduce(
      (sum, item) => sum + item.product_price * item.quantity,
      0,
    );
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
          <Card key={item.id} className="sm:w-full">
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
              <div className="font-bold">
                Total Price : $-{totalPrice(item.product_price, item.quantity)}
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="flex gap-3">
                <Button
                  className="cursor-pointer"
                  size={"icon"}
                  onClick={() => incrementButton(item.id)}
                >
                  +
                </Button>
                <Button
                  className="cursor-pointer"
                  size={"icon"}
                  onClick={() => decrementButton(item.id)}
                >
                  -
                </Button>
              </div>
              <Button
                className="cursor-pointer"
                onClick={() => handelRemoveFn(item.id)}
              >
                Delet Item <Trash2 />
              </Button>
            </CardFooter>
          </Card>
        ))}
        <hr className="mt-4 w-full" />
        <div className="text-right text-2xl font-bold">
          Calculate Total Price : $- {calculateTotalFn()}
        </div>
      </div>
    </>
  );
};

export default CheckOutComp;
