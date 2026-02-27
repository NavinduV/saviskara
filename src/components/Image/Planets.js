import Image from "next/image";
import { fadeIn } from '../../components/Variants/Variants';
import { motion } from "framer-motion";

export const Planet1 = () => {
  return (
    <div className="absolute xl:-left-20 -left-28 top-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
      <Image src={"/bg/4.jpg"} width={280} height={280} className="w-full h-full" alt="bulb" />
    </div>
  )
};

export const PlanetR1 = () => {
  return (
    <div className="absolute xl:-right-20 -right-28 top-12 rotate-180 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
      <Image src={"/bg/4.jpg"} width={280} height={280} className="w-full h-full" alt="bulb" />
    </div>
  )
};

export const Planet2 = () => {
  return (
    <div className="absolute xl:-right-20 -right-24 bottom-32 xl:bottom-28 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
      <Image
        src={'/bg/5.jpg'}
        width={260}
        height={260}
        className="w-full h-full"
        alt="bulb"
      />
    </div>
  );
};

export const PlanetL2 = () => {
  return (
    <div className="absolute xl:-left-20 -left-24 bottom-32 xl:bottom-28 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
      <Image
        src={'/bg/5.jpg'}
        width={260}
        height={260}
        className="w-full h-full"
        alt="bulb"
      />
    </div>
  );
};

export const Planet3 = () => {
  return (
    <div className="absolute xl:-left-20 -left-20 -top-16 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[220px] xl:w-[280px]">
      <Image
        src={'/bg/4.jpg'}
        width={280}
        height={280}
        className="w-full h-full"
        alt="bulb"
      />
    </div>
  );
};

export const Astronaut1 = () => {
  return (
    <motion.div
      variants={fadeIn('up', 0.3)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="absolute xl:right-10 right-5 bottom-0 xl:bottom-16 mix-blend-color-dodge animate-bounce duration-75 z-10 w-[200px] xl:w-[260px] transform scale-x-[-1]"
    >
      <Image
        src={'/bg/1.jpg'}
        width={260}
        height={260}
        className="w-full h-full"
        alt="bulb"
      />
    </motion.div>
  );
};