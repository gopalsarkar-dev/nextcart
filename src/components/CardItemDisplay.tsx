import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

const CardItemDisplay = () => {
  return (
    <>
      <Card className="max-w-sm">
        <CardContent className="space-y-3">
          <div className="text-lg font-bold sm:text-lg">Product_Imag :</div>
          <div className="text-lg font-bold sm:text-lg">
            Product_Name : IQOO Neo-10R
          </div>
          <div className="text-lg font-bold sm:text-lg">
            Product_Price : $-33999
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full cursor-pointer">
            Add To Cart
            <ShoppingCart />
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardItemDisplay;
