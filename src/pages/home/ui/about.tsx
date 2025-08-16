import { Button } from "@/shared/ui";
import agent from "@/assets/metzeger.webp";

const About = () => {
  return (
    <div className="grid grid-flow-col grid-cols-2 w-screen h-screen">
      <div
        className="col-span-1 bg-[#afafaf] w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${agent})` }}
      ></div>
      <div className="bg-[#A1907A] text-white font-tiro w-full h-full px-20 py-10 flex flex-col gap-8">
        <h1 className="text-[90pt] leading-tight">
          Turning Keys into New Beginnings
        </h1>
        <p className="font-poppins text-[20pt]">
          With nearly three decades of experience, Marci Metzger blends market
          expertise, personal care, and proven strategies to guide every client
          from the first showing to the final handshake—making each move the
          start of something better.
        </p>
        <Button className="font-tiro text-[18pt] rounded-full p-8 w-fit bg-white text-black hover:text-white">
          GET TO KNOW METZGER
        </Button>
      </div>
    </div>
  );
};

export default About;
