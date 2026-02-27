'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa6';
import { MdVideoLibrary } from 'react-icons/md';
import { IoIosPaper } from 'react-icons/io';
import { IoNewspaperSharp } from 'react-icons/io5';
import { FaNoteSticky } from 'react-icons/fa6';

export const Topic = ({ subject, grade }) => {
  const router = useRouter();

  const subs = [
    {
      icon: (
        <MdVideoLibrary className="group-hover:scale-110 transition-all duration-300 h-5 w-5" />
      ),
      name: 'Video Series',
      link: 'lesson',
    },
    {
      icon: (
        <FaNoteSticky className="group-hover:scale-110 transition-all duration-300 h-5 w-5" />
      ),
      name: 'Short Notes',
      link: 'shortnotes',
    },
    {
      icon: (
        <IoIosPaper className="group-hover:scale-110 transition-all duration-300 h-5 w-5" />
      ),
      name: 'Past Papers',
      link: 'pastpapers',
    },
    {
      icon: (
        <IoNewspaperSharp className="group-hover:scale-110 transition-all duration-300 h-5 w-5" />
      ),
      name: 'Model Papers',
      link: 'modelpapers',
    },
    {
      icon: (
        <FaFilePdf className="group-hover:scale-110 transition-all duration-300 h-5 w-5" />
      ),
      name: "Lesson PDF's",
      link: 'lessonpdfs',
    },
  ];

  const handleNavigation = (link) => {
    // Navigate to the lesson page with query parameters
    router.push(`/${link}?grade=${grade}&lesson=${subject}`);
  };

  return (
    <div className="flex flex-col justify-start items-start h-full w-full">
      <div className="flex flex-col justify-start w-full">
        {subs.map((sub) => (
          <div key={sub.name} className="w-full flex border-t border-accent">
            <div
              className="flex bg-black/90 group hover:bg-black/30 backdrop-blur-sm w-full p-3 group cursor-pointer transition-all duration-300"
              onClick={() => handleNavigation(sub.link)}
            >
              <button className="w-full text-left my-1 flex items-center gap-3">{sub.icon}{sub.name}</button>
              <span className="group-hover:translate-x-2 group-hover:text-accent flex items-center transition-all duration-300 pr-5">
                <FaArrowRight className="group-hover:text-white group-hover:scale-110" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
