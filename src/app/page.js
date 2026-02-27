"use client";
import localFont from "next/font/local";
import Slider from "../components/Slider/Slider";
import {fadeIn} from "../components/Variants/Variants";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import { Planet1, Planet3, Astronaut1 } from '../components/Image/Planets';

const Home = () => {
  const router = useRouter();

  return (
    <>
      <div className="relative w-full hero" id="hero">
        {/* Background Image */}
        <Slider className="absolute top-0" />

        <div className="absolute w-full h-full">
          <Astronaut1 />
          <Planet3 />

          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="text-center flex flex-col justify-center xl:text-left h-full container 2xl:container mx-auto">
            {/* Flex Container for Text and Image */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Text Section */}
              <div className="z-10">
                <motion.p
                  variants={fadeIn('down', 0.2)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="text-2xl md:text-4xl xl:text-6xl font-bold leading-snug text-white"
                >
                  Empowering Minds Through <br />
                  <span className="gradientText">Saviskara</span> Educational
                  Series
                </motion.p>
                <motion.p
                  variants={fadeIn('up', 0.2)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="mt-4 mx-5 lg:mx-0 lg:p-0 p-2 rounded-md md:mt-6 xl:mt-8 text-white/80 text-sm md:text-lg font-medium leading-relaxed md:w-full lg:bg-transparent bg-[#111111a6] xl:backdrop-blur-none backdrop-blur-[3px] xl:w-3/4"
                >
                  We bloom from society. We grow up within society, and we aim
                  for our nation's students to flourish. We will put forth our
                  maximum effort to make that happen. This is our sincere
                  invitation to you.
                </motion.p>
                <motion.p
                  variants={fadeIn('up', 0.3)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="mt-4 font-semibold text-md xl:text-lg text-[#FFBF00]"
                >
                  <span className="lg:bg-transparent rounded-md bg-[#111111c0] xl:backdrop-blur-none backdrop-blur-[3px] p-3">
                    Come and learn, and bloom yourself.
                  </span>
                </motion.p>
                <motion.div
                  variants={fadeIn('up', 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="w-full flex items-center xl:justify-start justify-center"
                >
                  <div
                    onClick={() => router.push('/study')}
                    className="group w-52 mt-10 gap-2 justify-center text-center items-center anim-btn anim-btn--neon  text-md uppercase tracking-[1px] leading-[1.4] bg-accent flex px-[28px] py-[12px]"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    study
                    {/* <FiGithub
                    size={20}
                    className="group-hover:scale-[110%] transition-all duration-300"
                  /> */}
                  </div>
                </motion.div>
              </div>

              {/* Image Section */}
              {/* <div className="w-auto">
                <img
                  src="/saviskara.png"
                  alt="Saviskara"
                  className="w-[300px] md:w-[500px] mx-10"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

// Previously Commented code
{
  /* <div id="about_us" className="flex justify-around my-5 xl:my-16">
        <div className="w-1/2 flex justify-center">
          <div className="">
            <p className="text-xl xl:text-3xl xl:ms-8 text-center">
              Welcome To Faculty Of Technology
            </p>
            <div className="sm:block xl:hidden">
              <img src="https://placeholder.com/1280x720" alt="" />
            </div>
            <p className="text-center px-10 sm:w-full xl:ms-8 text-xs xl:text-lg">
              Faculty of Technology, as the leading technology faculty in Sri
              Lanka, is serving the nation by providing higher education
              opportunities for the prospective undergraduates who enroll to the
              Sri Lankan university system through the GCE Advanced Level
              Technology stream That's wonderful to hear that the Faculty of
              Technology is playing a crucial role in providing higher education
              opportunities for prospective undergraduates in Sri Lanka through
              the GCE Advanced Level Technology stream.
            </p>
          </div>
        </div>
        <div className="w-1/2 xl:flex px-16 hidden justify-center">
          <img src="https://placeholder.com/1280x720" alt="" />
        </div>
      </div>
      <div id="study" className="relative">
        <img className="img blur-sm" src="/header.jpg" alt="" />
        <div className="absolute top-16 left-10">
          <p className="xl:text-2xl font-semibold text-white">Grades</p>
          <p className="xl:text-xl font-semibold text-white">
            Select Your Grade
          </p>
        </div>
        <div className="absolute top-28 mt-8 w-full flex justify-around">
          <a href="/study?grade=12">
            <div className="xl:w-36 h-16 w-20 xl:h-24 items-center bg-black rounded-md border flex justify-center border-[#FFBF00]">
              <p className="text-[#FFBF00]">Grade 12</p>
            </div>
          </a>
          <a href="/study?grade=13">
            <div className="xl:w-36 h-16 w-20 xl:h-24 items-center bg-black rounded-md border flex justify-center border-[#FFBF00]">
              <p className="text-[#FFBF00]">Grade 13</p>
            </div>
          </a>
        </div>
      </div>
      <div className="flex py-16 px-16">
        <div className="w-1/2">
          <h1>Download Our App On</h1>
          <h1>App Store</h1>
        </div>
        <div className="w-1/2 ">
          <img src="/app.jpg" className="w-50 rounded-lg" alt="" srcset="" />
        </div>
      </div> */
}