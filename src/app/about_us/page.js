"use client";
import { fadeIn, fadeUp } from '../../components/Variants/Variants';
import {Planet1, Planet2} from '../../components/Image/Planets';
import { motion } from 'framer-motion';

export default function page() {
  return (
    <div className="page-min-h flex items-center overflow-hidden">
      <Planet1 />
      <Planet2 />
      <div
        id="about_us"
        className="container flex flex-col mx-auto items-center w-full text-white h-full my-[20px] lg:my-0"
      >
        <motion.p
          variants={fadeIn('down', 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-3xl text-h font-bold xl:text-4xl xl:ms-8 text-center mb-6 gradientText"
        >
          Welcome To Faculty Of Technology
        </motion.p>
        <div className="flex justify-center h-full items-center gap-10 xl:gap-4 flex-col lg:flex-row px-6 xl:px-0">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="overflow-hidden relative w-full flex-1 bg-gradient-to-r from-[#FFBF00] to-[#ff6a00] py-6 rounded-lg flex flex-col items-center justify-center border border-accent"
          >
            <span className="absolute w-36 h-36 bg-[#6d4f5362] rounded-full bottom-[-28px] left-[-50px]"></span>
            <span className="absolute w-20 h-20 bg-[#652d3a51] rounded-full top-4 right-[-40px]"></span>
            <span className="absolute w-full h-full bg-[#090909e5] top-0 left-0 backdrop-blur-sm rounded-md"></span>
            <p className="relative flex items-center justify-center">
              <img src="/logo.svg" alt="" className="w-[42%] h-[42%]" />
            </p>
            <p className="relative text-center px-10 sm:w-full xl:ms-8 text-[14px] xl:text-md">
              Faculty of Technology, as the leading technology faculty in Sri
              Lanka, is serving the nation by providing higher education
              opportunities for the prospective undergraduates who enroll to the
              Sri Lankan university system through the GCE Advanced Level
              Technology stream That's wonderful to hear that the Faculty of
              Technology is playing a crucial role in providing higher education
              opportunities for prospective undergraduates in Sri Lanka through
              the GCE Advanced Level Technology stream.
            </p>

            <p className="relative text-center px-10 sm:w-full xl:ms-8 text-[14px] xl:text-md">
              It's time to dawn The Project SAVISKARA, The Legacy of the Faculty
              of Technology University of Sri Jayewardenepura. Two grand events
              were hosted under the SAVISKARA brand in 2020 and 2019.
              Unfortunately, the global pandemic messed up all the untiring
              efforts toward the SAVISKARA '21. But as Phoenix arises from the
              ashes, we are here to launch SAVISKARA '24 after an energetic
              break. The project SAVISKARA is an approximately one-month-long
              series of events covering the technological aspects of society and
              the asthmatic background.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex w-full px-4 xl:px-8 justify-center xl:justify-start flex-1 mb-10 xl:mb-0"
          >
            <iframe
              className="w-full aspect-video rounded-lg"
              src="https://www.youtube.com/embed/VV3O9EZ5g_4"
              title="Faculty Of Technology Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
