import { ShoppingCart, SunMoon } from "lucide-react";
import Link from "next/link";

const TopBar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full border-b backdrop-blur-sm">
        <section className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold">
            NextCart
          </Link>

          <div className="flex items-center justify-center gap-4">
            <SunMoon size={30} />
            <ShoppingCart className="cursor-pointer" size={30} />
          </div>
        </section>
      </nav>
    </>
  );
};

export default TopBar;
