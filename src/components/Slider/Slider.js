"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import SearchBar from "../SearchBar";

const Slider = () => {
  return (
    <>
      {/* Background Image */}
      <div className="absolute w-full h-full bg-[#1111119c] z-10"></div>
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src="/backdrop_-min.jpg"
        fill
        priority
        alt="Backdrop"
      />
    </>
  );
}

export default Slider;