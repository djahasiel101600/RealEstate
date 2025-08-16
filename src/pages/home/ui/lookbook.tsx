import { ImageCard } from "@/shared/ui";
import BadgeScroll from "./badgeScroll";
import img1 from "@/assets/property9.webp";
import img2 from "@/assets/property10.webp";
import img3 from "@/assets/property11.webp";
import img4 from "@/assets/property12.webp";
import img5 from "@/assets/property5.webp";

const Lookbook = () => {
  return (
    <div className="px-4">
      <div className="flex flex-col justify-center items-center py-20 gap-4">
        <hr className="border-[#808080] border-b-1 w-[35%]" />
        <h3 className="font-tiro text-[48px]">LOOKBOOK</h3>
        <p className="text-center text-[24px]">
          A visual journey through Pahrump's finest homes - from <br /> scenic
          desert horizons to elegant interiors.
        </p>
      </div>
      <div className="grid grid-flow-col grid-cols-14 grid-rows-2xt-white bg-white gap-2">
        <div className="col-span-3 bg-amber-500 overflow-hidden">
          <ImageCard img={img1} />
        </div>
        <div className="col-span-3 bg-amber-500 overflow-hidden">
          <ImageCard img={img2} />
        </div>
        <div className="col-span-6 row-span-2 bg-amber-500 overflow-hidden">
          <ImageCard img={img3} />
        </div>
        <div className="col-span-6 row-span-1 bg-[#000000] overflow-hidden">
          <div className="flex justify-center items-center h-full text-white font-tiro text-[24px] border-b-2 hover:underline">
            View More
          </div>
        </div>
        <div className="col-span-3 row-span-1 bg-amber-500 overflow-hidden">
          <ImageCard img={img4} />
        </div>
        <div className="col-span-3 row-span-1 bg-amber-500 overflow-hidden">
          <ImageCard img={img5} />
        </div>
      </div>
      <BadgeScroll />
    </div>
  );
};

export default Lookbook;
