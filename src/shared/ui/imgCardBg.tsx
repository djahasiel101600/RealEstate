import propertyImg from "@/assets/hero.webp";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";
import { useState } from "react";

interface Props {
  heading: string;
  description: string;
  className?: string;
}

const ImageCardBg = ({ className, heading, description }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={{ background: `url(${propertyImg})`, backgroundSize: "cover" }}
      className={twMerge(["w-full h-full relative overflow-hidden", className])}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={twMerge([
          "flex flex-col justify-center pl-30 pr-30 text-white",
          isHovered
            ? "bg-black/30 top-0 w-full h-full absolute translate-x-1 duration-300 ease-in"
            : "bg-black/30 top-0 w-full h-full absolute -translate-x-full duration-300 ease-in",
        ])}
      >
        <h1 className="font-tiro text-[46px]">{heading}</h1>
        <p className="text-[20px]">{description}</p>
      </motion.div>
    </div>
  );
};

export default ImageCardBg;
