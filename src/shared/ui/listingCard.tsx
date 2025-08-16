import { Button } from "./button";
interface Props {
  img: string;
}

const ListingCard = ({ img }: Props) => {
  return (
    <div className="relative w-[430px] h-[524px] bg-white border-1 overflow-hidden rounded-md">
      <Button className="absolute m-4 text-[16pt] z-20">For Sale</Button>
      <div className="h-[357px] w-[430px] overflow-hidden">
        <div
          className="h-full w-full bg-cover transition-transform duration-300 ease-in-out hover:scale-110"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
      <div className="px-4 pt-4">
        <h3 className="font-bold text-[16px] pb-2">$12,345</h3>
        <p className="font-bold hover:text-[#AC8967]">
          Golden Urban House For Sell
        </p>
        <p>123, Street, New York, USA</p>
      </div>
      <div className="absolute w-full bottom-0 grid grid-flow-col grid-cols-3 text-center divide-dashed">
        <div className="border-dashed border-t-1 p-2">1,000 Sqft</div>
        <div className="border-dashed border-x-1 p-2 border-t-1">3 Bed</div>
        <div className="border-dashed border-t-1 p-2">2 Bath</div>
      </div>
    </div>
  );
};

export default ListingCard;
