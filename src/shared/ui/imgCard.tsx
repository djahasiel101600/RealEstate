import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  img: string;
}
const ImageCard = ({ className, img }: Props) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center">
      <img
        src={img}
        alt=""
        className={twMerge(["relative object-cover h-full", className])}
      />
      <div className="absolute bg-black/30 w-full h-full text-white text-center opacity-0 hover:opacity-100 ease-in duration-300">
        <div className="h-full flex flex-row items-center justify-center font-tiro text-[20px]">
          VIEW
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
