"use client";
import { cartAtom } from "@/lib/atom";
import { useAtom } from "jotai";
import { ShoppingCart, SunMoon } from "lucide-react";
import Link from "next/link";
import DarkMode from "../DarkMode";

const TopBar = () => {
  const [cartItem] = useAtom(cartAtom);

  return (
    <>
      <nav className="fixed top-0 w-full border-b backdrop-blur-sm">
        <section className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold">
            NextCart
          </Link>
          <div className="flex items-center justify-center gap-4">
            <DarkMode />
            <Link href="/checkout-cart">
              <div className="flex cursor-pointer items-center justify-center">
                <ShoppingCart />
                <div className="-mt-3 h-4 w-4 rounded-full bg-amber-400">
                  {cartItem.length}
                </div>
              </div>
            </Link>
          </div>
        </section>
      </nav>
    </>
  );
};

export default TopBar;
