"use client"
import { NextPage } from 'next'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCarrousel from '../CardCarrousel/CardCarrousel';
import { useEffect, useState } from 'react';
import { DataSlide, Props } from '@/app/data';



const WeHave = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [total, setTotal] = useState(0);

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        pauseOnHover: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,        
    
        autoplay: true,
        autoplaySpeed: 6000,
        arrows : false,


        beforeChange: (current:number, next:number) => {
            setActiveSlide(next);
          }
        };
      

      useEffect(() => {
  
       const total = DataSlide.length
       setTotal(total)

      }, []);

  return (
<div className="slider-container">
<Slider {...settings}>

{
    DataSlide.map((item:Props, index:number) => <CardCarrousel items={item} key={index} totalData={total} activeSlide={activeSlide} /> )
}
</Slider>
      
</div>
  )
}

export default WeHave