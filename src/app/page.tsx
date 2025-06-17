import CardItemDisplay from "@/components/CardItemDisplay";
import { demoData } from "@/lib/demoData";

const page = () => {
  return (
    <>
      <div className="grid place-items-center gap-5 pt-20 sm:grid-cols-3">
        {demoData.map((items) => (
          <CardItemDisplay cardInfo={items} key={items.id} />
        ))}
      </div>
    </>
  );
};

export default page;
