import CardItemDisplay from "@/components/CardItemDisplay";

const page = () => {
  return (
    <>
      <div className="grid place-items-center gap-5 pt-20 sm:grid-cols-4">
        <CardItemDisplay />
        <CardItemDisplay />
        <CardItemDisplay />
        <CardItemDisplay />
        <CardItemDisplay />
        <CardItemDisplay />
      </div>
    </>
  );
};

export default page;
