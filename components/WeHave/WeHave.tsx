"use client"
import { NextPage } from 'next'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCarrousel from '../CardCarrousel/CardCarrousel';
import { useEffect, useState } from 'react';


interface Props {
    image: string
    title:string 
    content1:string 
    content2:string 
    link:string
}

const DataSlide:Props[] = [
    {
        image: "/planto/plante (6).png",
        title: "We Have Small And Best O2 Plants Collection’s",
        content1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        content2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        link: "#" 
    },
    {
        image: "/planto/plante__2.png",
        title: "We Have Small And Best O3 Plants Collection’s",
        content1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        content2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        link: "#"
    },
    {
        image: "/planto/plante (7).png",
        title: "We Have Small And Best O4 Plants Collection’s",
        content1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        content2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        link: "#" 
    }
]

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