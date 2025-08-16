import heroImg from "@/assets/hero.webp";
import { motion } from "motion/react";
const Hero = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${heroImg})` }}
        className="relative h-screen bg-cover bg-center"
      >
        <div className="text-white px-10 grid grid-flow-col justify-between pt-80 h-full bg-black/30">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="col-span-2 font-tiro z-50 "
          >
            <h1 className="text-[90pt] leading-tight">MARCI METZGER HOMES</h1>
            <div className="flex flex-row mt-4 text-[15pt]">
              <div className="py-2 px-4 bg-[#A1907A]">Real Estate Veteran</div>
              <div className="py-2 px-4 bg-[#656565]">Broker & Owner</div>
              <div className="py-2 px-4 bg-[#050409]">Top Local Agent</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="mt-20 flex flex-col gap-4 italic"
          >
            <h1 className="text-[24pt] font-tiro">
              YOUR TRUSTED PAHRUMP REALTOR
            </h1>
            <p className="text-[16pt] me-18">
              Welcome to Marci Metzger, with nearly 30 years of experience,
              Marci and The Ridge Realty Group deliver expert market insight,
              personalized service, and smart strategies to sell your home or
              find your dream property—residential, commercial, luxury, or
              investment.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
