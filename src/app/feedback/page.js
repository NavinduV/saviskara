"use client";
import { useState } from 'react';
import { fadeIn, fadeUp } from '../../components/Variants/Variants';
import { motion } from 'framer-motion';
import { Planet1, Planet2 } from '../../components/Image/Planets';

export default function Page() {
  const [selectedValueF1, setSelectedValueF1] = useState(0);
  const [selectedValueF2, setSelectedValueF2] = useState(0);

  const handleSelectF1 = (value) => {
    setSelectedValueF1(value);
  };

  const handleSelectF2 = (value) => {
    setSelectedValueF2(value);
  };

  return (
    <div className="page-min-h flex items-center overflow-hidden">
      <Planet1 />
      <Planet2 />
      <div className="container flex justify-center items-center h-full w-full my-[40px] lg:my-0">
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="relative w-[90%] xl:w-full max-w-6xl bg-gradient-to-r from-[#FFBF00] to-[#ffc517]  backdrop-blur-lg rounded-md shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2  border border-accent"
        >
          <span className="absolute w-36 h-36 bg-[#6d4f5362] rounded-full bottom-[-28px] left-[-50px]"></span>
          <span className="absolute w-20 h-20 bg-[#652d3a51] rounded-full top-4 right-[-40px]"></span>
          <span className="absolute w-full h-full bg-[#090909e5] top-0 left-0 backdrop-blur-sm rounded-md"></span>

          {/* Contact Information Section */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" relative px-8 w-full flex flex-col justify-between"
          >
            <div className="flex flex-col items-start justify-center w-full  pt-3">
              {/* <img src="/logo.svg" alt="" className="w-[180px]" /> */}
              <p className="text-accent text-2xl font-bold pt-4">
                Drop us your feedback
              </p>
              <p className="w-full text-white/70 mt-6">
                We are dedicated to providing students with high-quality
                learning materials to enhance your educational experience. Your
                feedback is crucial in helping us understand your needs better
                and identify areas for improvement.
              </p>
              <p className="w-full text-white/70 mt-4 mb-8">
                Please share your honest opinions and ideas. Your input will
                guide us in improving this platform to serve you better. Thank
                you for your time and support!
              </p>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="relative p-8 bg-gradient-to-r from-[#FFBF00] to-[#ff6a00] text-white"
          >
            <span className="absolute w-32 h-32 bg-[#e7214f62] rounded-full top-32 right-[-20px]"></span>
            <span className="absolute w-20 h-20 bg-[#e2114251] rounded-full top-4 right-8"></span>
            <span className="absolute w-20 h-20 bg-[#e2114251] rounded-full bottom-4 left-3"></span>
            <span className="absolute w-full h-full bg-[#09090974] top-0 right-0 backdrop-blur-sm"></span>
            <form className="relative z-10 flex flex-col gap-6">
              <h3 className="text-2xl font-bold mb-4">Rate Your Experience</h3>

              <div className="flex flex-col gap-8">
                <div className="bg-transparent rounded-md flex flex-col justify-center items-start">
                  <p className="text-md font-semibold">
                    The content was useful and interesting
                  </p>

                  <div className="flex justify-between w-full text-center text-white/50 font-semibold text-sm">
                    {[...Array(11).keys()].map((_, index) => (
                      <span
                        key={index}
                        className={`cursor-pointer ${
                          index <= selectedValueF1
                            ? 'text-accent scale-110'
                            : 'hover:text-accent'
                        }`}
                        onClick={() => handleSelectF1(index)}
                      >
                        {index}
                      </span>
                    ))}
                  </div>

                  <input
                    type="range"
                    max="10"
                    value={selectedValueF1}
                    onChange={(e) => handleSelectF1(Number(e.target.value))}
                    className="custom-range w-full mt-4 appearance-none h-2 rounded-lg cursor-pointer bg-white/50 relative"
                    style={{
                      background: `linear-gradient(
            to right,
            #FFD700, #e21143 ${selectedValueF1 * 10}%,
            white ${selectedValueF1 * 10}%
          )`,
                    }}
                  />
                </div>

                <div className="bg-transparent rounded-md flex flex-col justify-center items-start">
                  <p className="text-md font-semibold">
                    Learning material was accessible
                  </p>

                  <div className="flex justify-between w-full text-center text-white/50 font-semibold text-sm">
                    {[...Array(11).keys()].map((_, index) => (
                      <span
                        key={index}
                        className={`cursor-pointer ${
                          index <= selectedValueF2
                            ? 'text-accent scale-110'
                            : 'hover:text-accent'
                        }`}
                        onClick={() => handleSelectF2(index)}
                      >
                        {index}
                      </span>
                    ))}
                  </div>

                  <input
                    type="range"
                    max="10"
                    value={selectedValueF2}
                    onChange={(e) => handleSelectF2(Number(e.target.value))}
                    className="custom-range w-full mt-4 appearance-none h-2 rounded-lg cursor-pointer bg-white/50 relative"
                    style={{
                      background: `linear-gradient(
            to right,
            #FFD700, #e21143 ${selectedValueF2 * 10}%,
            white ${selectedValueF2 * 10}%
          )`,
                    }}
                  />
                </div>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  className="w-full bg-transparent border-2 rounded-lg border-white/50 placeholder-[#fff] text-white focus:outline-none focus:border-yellow-300 px-2 py-1 resize-none"
                  rows="4"
                  placeholder="Comment"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-accent font-semibold py-2 rounded-lg shadow-lg hover:bg-transparent hover:text-white border border-white transition-colors"
              >
                Send
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}