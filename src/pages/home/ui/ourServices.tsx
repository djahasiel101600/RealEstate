import { Button } from "@/shared/ui";

const OurServices = () => {
  return (
    <div className="relative flex flex-col items-center justify-start w-screen py-30 px-30 bg-black text-white">
      <h1 className="text-[40px] font-tiro z-50">OUR SERVICES</h1>
      <div className="flex justify-between items-center gap-24 px-24 font-tiro text-3xl z-50">
        <div className="text-center w-full flex flex-col gap-4">
          <div>Real Estate Done Right</div>
          <p className="text-[16px] font-poppins">
            Nervous about your property adventure? Don’t be. Whether you're
            getting ready to buy or sell your residence, looking at investment
            properties, or just curious about the markets, our team ensures you
            get the best experience possible!
          </p>
          <Button className="mt-4 rounded-full bg-white text-black text-lg font-poppins hover:bg-black hover:text-white hover:border hover:border-white">
            Learn More
          </Button>
        </div>
        <div className="text-center w-full flex flex-col border-x-1 py-12 px-10 gap-4">
          <div>Commercial & Residential</div>
          <p className="text-[16px] font-poppins">
            Nervous about your property adventure? Don’t be. Whether you're
            getting ready to buy or sell your residence, looking at investment
            properties, or just curious about the markets, our team ensures you
            get the best experience possible!
          </p>
          <Button className="mt-4 rounded-full bg-white text-black text-lg font-poppins hover:bg-black hover:text-white hover:border hover:border-white">
            Learn More
          </Button>
        </div>
        <div className="text-center w-full flex flex-col gap-4">
          <div>Rely on Expertise</div>
          <p className="text-[16px] font-poppins">
            Nervous about your property adventure? Don’t be. Whether you're
            getting ready to buy or sell your residence, looking at investment
            properties, or just curious about the markets, our team ensures you
            get the best experience possible!
          </p>
          <Button className="mt-4 rounded-full bg-white text-black text-lg font-poppins hover:bg-black hover:text-white hover:border hover:border-white">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
