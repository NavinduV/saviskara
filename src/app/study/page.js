'use client';

import { Inter } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'; // Optional styles
import { motion, AnimatePresence } from 'framer-motion';
import { GetSubjects } from '../actions';
import { FaArrowCircleDown } from 'react-icons/fa';
import { Topic } from '../../components/Topic/Topic';
import SkeletonApp from '../../components/Skeleton/Skeleton';
import { IoCloseCircle } from 'react-icons/io5';
import { PlanetR1, PlanetL2 } from '../../components/Image/Planets';
import { fadeIn } from '../../components/Variants/Variants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export default function Page() {
  const [Subjects, setSubjects] = useState([]);
  const [activeTab, setActiveTab] = useState('12');
  const [loading, setLoading] = useState(true);
  const [visibleTopics, setVisibleTopics] = useState({});


  // Toggle function to show/hide the topic for a specific subject
  const toggleTopicVisibility = (subject) => {
    setVisibleTopics((prev) => ({
      ...prev,
      [subject]: !prev[subject],
    }));
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const InitSubs = async () => {
      setLoading(true); // Start loading
      const subs = await GetSubjects();
      const FilteredSubs = subs.map((sub) => sub.name);
      setSubjects(FilteredSubs);
      setLoading(false); // End loading
    };
    InitSubs();
  }, []);

  const tabVariants = {
    hidden: { opacity: 0},
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const topicVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1 },
    exit: { height: 0, opacity: 0 },
  };

  return (
    <div
      className={`study-page page-min-h flex items-center text-white ${inter.variable} font-inter overflow-hidden`}
    >
      <PlanetR1 />
      <PlanetL2 />
      <div className="container flex justify-center items-center h-full w-full my-[10px] lg:my-0">
        <div
          className={`bg-transparent rounded-2xl p-10 backdrop-blur-md w-full lg:w-[90%] flex flex-col items-center`}
        >
          <div className="w-full">
            <div className="relative right-0">
              <motion.ul
                variants={fadeIn('down', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="relative flex gap-5 lg:gap-10 flex-wrap px-2 py-2 list-none rounded-md bg-[#111111ec] backdrop-blur-sm mb-3 border-2 border-accent"
                role="tablist"
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute top-0 left-0 h-full rounded-md z-10"
                  initial={false}
                  animate={{
                    x: activeTab === '12' ? 0 : '100%',
                    background:
                      activeTab === '12'
                        ? 'linear-gradient(to right, #ff6a00, #e21143 )'
                        : 'bg-gradient-to-l from-[#D6B521] via-[#ff6a00] to-[#e21143]',
                  }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: '50%', // Adjust to match your layout
                  }}
                />

                {/* Tab Items */}
                <li className="z-20 flex-auto text-center">
                  <button
                    className={`z-30 flex items-center justify-center w-full px-2 py-3 text-md mb-0 transition-all ease-in-out rounded-md cursor-pointer border border-transparent ${
                      activeTab === '12'
                        ? 'text-white font-semibold'
                        : 'text-white/90 hover:scale-105 hover:text-accent'
                    }`}
                    onClick={() => handleTabClick('12')}
                    role="tab"
                    aria-selected={activeTab === '12'}
                    aria-controls="12"
                  >
                    Grade 12
                  </button>
                </li>
                <li className="z-20 flex-auto text-center">
                  <button
                    className={`z-30 flex items-center justify-center w-full px-2 py-3 text-md mb-0 transition-all ease-in-out rounded-md cursor-pointer border border-transparent duration-300 ${
                      activeTab === '13'
                        ? 'text-white font-semibold'
                        : 'text-white/90 hover:scale-105 hover:text-accent '
                    }`}
                    onClick={() => handleTabClick('13')}
                    role="tab"
                    aria-selected={activeTab === '13'}
                    aria-controls="13"
                  >
                    Grade 13
                  </button>
                </li>
              </motion.ul>

              <div className="py-5" role="tabpanel">
                <AnimatePresence mode="wait">
                  {activeTab === '12' && (
                    <motion.div
                      id="12"
                      key="12"
                      variants={tabVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.2 }}
                    >
                      <div className="relative flex flex-col justify-center items-center w-full h-[80%] gap-2">
                        {loading
                          ? Array.from({ length: 6 }).map((_, idx) => (
                              <SkeletonApp key={idx} />
                            ))
                          : Subjects.map((sub) => (
                              <div className="flex flex-col w-full" key={sub}>
                                <div
                                  className={`items-center justify-center flex border-accent ${
                                    visibleTopics[sub]
                                      ? 'rounded-t-md border-r border-t border-l'
                                      : 'rounded-md border'
                                  } bg-gradient-to-l from-[#ff6a00] to-[#e21143]`}
                                >
                                  <div className="w-16 flex justify-center items-center rounded-l-md cursor-default font-semibold">
                                    G{activeTab}
                                  </div>
                                  <div
                                    className={`flex h-full  backdrop-blur-sm w-full p-3 group group-hover:bg-black/70 cursor-pointer ${
                                      visibleTopics[sub]
                                        ? 'rounded-tr-md bg-black/75'
                                        : 'rounded-r-md bg-black/85'
                                    }`}
                                    onClick={() => toggleTopicVisibility(sub)}
                                  >
                                    <p className="flex items-center w-full h-full text-md font-semibold">
                                      {sub}
                                    </p>
                                    <span className="group-hover:scale-110 flex items-center transition-all duration-300 pr-4">
                                      {visibleTopics[sub] ? (
                                        <IoCloseCircle
                                          className={`w-5 h-5 group-hover:scale-105 ${
                                            visibleTopics[sub]
                                              ? 'text-[#ce2828]'
                                              : ''
                                          } `}
                                        />
                                      ) : (
                                        <FaArrowCircleDown className="group-hover:scale-105 group-hover:text-accent" />
                                      )}
                                    </span>
                                  </div>
                                </div>
                                <AnimatePresence>
                                  {visibleTopics[sub] && (
                                    <motion.div
                                      className="bg-accent w-full rounded-b-md border-accent border-r border-b border-l overflow-hidden"
                                      key={sub}
                                      variants={topicVariants}
                                      initial="hidden"
                                      animate="visible"
                                      exit="exit"
                                      transition={{ duration: 0.3 }}
                                    >
                                      <Topic subject={sub} grade={activeTab} />
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === '13' && (
                    <motion.div
                      id="13"
                      key="13"
                      variants={tabVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.2 }}
                    >
                      <div className="relative flex flex-col justify-center items-center w-full h-[80%] gap-2">
                        {loading
                          ? Array.from({ length: 6 }).map((_, idx) => (
                              <SkeletonApp key={idx} />
                            ))
                          : Subjects.map((sub) => (
                              <div className="flex flex-col w-full" key={sub}>
                                <div
                                  className={`items-center justify-center flex border-accent ${
                                    visibleTopics[sub]
                                      ? 'rounded-t-md border-r border-t border-l'
                                      : 'rounded-md border'
                                  }  bg-gradient-to-l from-[#ff6a00] to-[#e21143]`}
                                >
                                  <div className="w-16 flex justify-center items-center rounded-l-md cursor-default font-semibold">
                                    G{activeTab}
                                  </div>
                                  <div
                                    className={`flex h-full  backdrop-blur-sm w-full p-3 group group-hover:bg-black/70 cursor-pointer ${
                                      visibleTopics[sub]
                                        ? 'rounded-tr-md bg-black/75'
                                        : 'rounded-r-md bg-black/85'
                                    }`}
                                    onClick={() => toggleTopicVisibility(sub)}
                                  >
                                    <p className="flex items-center w-full h-full text-md font-semibold">
                                      {sub}
                                    </p>
                                    <span className="group-hover:scale-110 flex items-center transition-all duration-300 pr-4">
                                      {visibleTopics[sub] ? (
                                        <IoCloseCircle
                                          className={`w-5 h-5 group-hover:scale-105 ${
                                            visibleTopics[sub]
                                              ? 'text-[#ce2828]'
                                              : ''
                                          } `}
                                        />
                                      ) : (
                                        <FaArrowCircleDown className="group-hover:scale-105 group-hover:text-accent" />
                                      )}
                                    </span>
                                  </div>
                                </div>
                                <AnimatePresence>
                                  {visibleTopics[sub] && (
                                    <motion.div
                                      className="bg-accent w-full rounded-b-md border-accent border-r border-b border-l overflow-hidden"
                                      key={sub}
                                      variants={topicVariants}
                                      initial="hidden"
                                      animate="visible"
                                      exit="exit"
                                      transition={{ duration: 0.3 }}
                                    >
                                      <Topic subject={sub} grade={activeTab} />
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
