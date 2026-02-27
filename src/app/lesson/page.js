"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GetLessons } from "../actions";
import ReactPlayer from "react-player";
import { Topic } from '../../components/Topic/Topic';
import { motion, AnimatePresence } from 'framer-motion';
import 'react-loading-skeleton/dist/skeleton.css'; // Optional styles
import { FaArrowDown } from 'react-icons/fa';
import { IoCloseCircle } from 'react-icons/io5';
import { Inter } from 'next/font/google';
import { fadeIn } from '../../components/Variants/Variants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export default function page() {

  const [Lessons,setLessons] = useState()
  const [Link, setLink] = useState()
    //  const [activeTab, setActiveTab] = useState(1);

  const params = useSearchParams();

  useEffect(() => {
    const FetchLessons = async () =>{
      console.log(params.get("lesson"));
      let grade = params.get("grade")
      let sub = params.get("lesson")
      setLessons(await GetLessons([grade,sub]))
    }
    FetchLessons()
  }, [])


  const [visibleTopics, setVisibleTopics] = useState({});

  // Toggle function to show/hide the topic for a specific subject
  const toggleTopicVisibility = (subject) => {
    setVisibleTopics((prev) => ({
      ...prev,
      [subject]: !prev[subject],
    }));
  };

    const lessonVariants = {
      hidden: { height: 0, opacity: 0 },
      visible: { height: 'auto', opacity: 1 },
      exit: { height: 0, opacity: 0 },
    };



  return (
    <div
      className={`${inter.variable} font-inter page-min-h flex flex-col text-white`}
    >
      <div className="container flex justify-center items-center h-full w-full my-[20px] lg:my-0">
        <div
          className={`bg-transparent rounded-2xl p-10 backdrop-blur-md xl:w-[90%] w-full flex flex-col items-center`}
        >
          <div className="w-full">
            <motion.p
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="font-semibold text-2xl"
            >
              {params.get('lesson')}
            </motion.p>
            <div className="relative right-0">
              <div className="py-5" role="tabpanel">
                <div id="12">
                  <div className="relative flex flex-col justify-center items-center w-full h-[80%] gap-2">
                    {Lessons?.map((lesson, index) => (
                      <div className="flex flex-col w-full">
                        <div
                          key={lesson}
                          className={`items-center justify-center flex border-accent ${
                            visibleTopics[lesson]
                              ? 'rounded-t-md border-r border-t border-l'
                              : 'rounded-md border'
                          }  bg-gradient-to-l from-[#ff6a00] to-[#e21143]`}
                        >
                          <div className="w-16 flex justify-center items-center rounded-l-md cursor-default font-semibold">
                            {index < 10 ? '0' : ''}
                            {index + 1}
                          </div>
                          <div
                            className={`flex h-full backdrop-blur-sm w-full p-3 group group-hover:bg-black/70 cursor-pointer ${
                              visibleTopics[lesson]
                                ? 'rounded-tr-md bg-transparent'
                                : 'rounded-r-md bg-[#000000a0]'
                            }`}
                            onClick={() => {
                              toggleTopicVisibility(lesson);
                              setLink(lesson.link);
                            }}
                          >
                            <p
                              key={index}
                              className="flex items-center w-full h-full text-md font-semibold"
                            >
                              {lesson.name}
                            </p>
                            <span className="flex items-center transition-all duration-300 pr-2">
                              {visibleTopics[lesson] ? (
                                <IoCloseCircle
                                  className={`w-6 h-6 group-hover:scale-110 transition-all duration-300 ${
                                    visibleTopics[lesson] ? 'text-white' : ''
                                  } `}
                                />
                              ) : (
                                <FaArrowDown className="group-hover:translate-y-0.5 group-hover:scale-110 group-hover:text-accent transition-all duration-300" />
                              )}
                            </span>
                          </div>
                        </div>

                        <AnimatePresence>
                          {visibleTopics[lesson] && (
                            <motion.div
                              className="flex p-5 bg-black rounded-b-md border-accent border-r border-b border-l"
                              key={lesson}
                              variants={lessonVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              transition={{ duration: 0.3 }}
                            >
                              <div className="w-full h-[30vh] md:h-[40vh] lg:h-[54vh] xl:h-[68vh]">
                                <ReactPlayer
                                  width="100%"
                                  height="100%"
                                  controls
                                  url={Link}
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        {/* Conditionally render the topic div */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
