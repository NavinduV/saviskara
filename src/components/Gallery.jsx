'use client'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



export default function Gallery() {

  return (
    <Carousel autoPlay={true} infiniteLoop showIndicators dynamicHeight>
    <div>
        <img src="slider/slider-1.jpeg" />
        <p className="legend">Legend 1</p>
    </div>

    <div>
        <img src="slider/slider-2.jpeg" />
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img src="slider/slider-3.jpeg" />
        <p className="legend">Legend 3</p>
    </div>
    <div>
        <img src="slider/slider-4.jpeg" />
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img src="slider/slider-5.jpeg" />
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img src="slider/slider-6.jpeg" />
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img src="slider/slider-7.jpeg" />
        <p className="legend">Legend 1</p>
    </div>
</Carousel>
  )
}
