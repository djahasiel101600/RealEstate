import { ImageCardBg } from "@/shared/ui";
import propImg1 from "@/assets/property5.webp";
import propImg2 from "@/assets/property6.webp";
import propImg3 from "@/assets/property7.webp";

const Tips = () => {
  return (
    <div className="bg-black">
      <h1 className="font-tiro text-[80px] text-white text-center">
        GET IT SOLD
      </h1>
      <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-2 h-[80vh]">
        <div className="w-full h-full bg-amber-500">
          <ImageCardBg
            propertyImg={propImg1}
            heading="Top Residential Sales Last 5 Years"
            description="We helped nearly 90 clients in 2021, and closed 28.5 million sales!
Our Team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year."
          />
        </div>
        <div className="w-full h-full bg-amber-500">
          <ImageCardBg
            propertyImg={propImg2}
            heading="Don't Just List it..."
            description="Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home."
          />
        </div>
        <div className="w-full h-full bg-amber-500 row-span-2">
          <ImageCardBg
            propertyImg={propImg3}
            heading="Guide to Buyers"
            description="Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis upgrades lists, contractors on speed dial, & more."
          />
        </div>
      </div>
    </div>
  );
};

export default Tips;
