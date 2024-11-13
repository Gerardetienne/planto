"use client"

import { NextPage } from 'next'
import { Image, Spacer } from "@nextui-org/react";
import ButtonCustom from '../ButtonCustom/ButtonCustom';
import React, { useEffect } from 'react';

interface Props { 
}

const Hero: React.FC<Props> = () => {

    return (
        <div className="w-full py-20 mx-0 relative  bg-[url('/sport/homeheader.jpg')] bg-center bg-no-repeat bg-cover bg-fixed ">
            {/* bg overlay  */}
            <div className="absolute top-0 left-0 h-full  w-full bg-[#2C2C2C] opacity-60 z-20 "></div>

            <div className='flex flex-col items-center justify-center gap-10 z-40 text-white'>
                <div className='relative z-40'>
                    <Image
                        width={140}
                        alt="NextUI hero Image"
                        src="/sport/fitneslogo.png"
                        removeWrapper={true}
                    />
                </div>

                <h1 className='text-[60px] font-extrabold z-40 p-1 text-center md:text-left ' data-aos="zoom-in-up" data-aos-duration="1500">Health & Fitness CLub</h1>

                <div className='block text-left z-40'>
                    <p className='text-[20px] font-light ' data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1500"
                        >
                        <span className='text-pretty font-medium '>Current hours of operation</span> : <br />
                        Monday - Thursday: <span className=' italic text-pretty text-bgBaseColor  '>5:30am - 10pm </span><br />
                        Friday: <span className=' italic text-pretty text-bgBaseColor  '>5:30am - 9pm</span> <br />
                        Saturday &amp; Sunday: <span className=' italic text-pretty text-bgBaseColor  '>8am - 8pm</span>
                    </p>
                </div>


                <div className='flex flex-col md:flex-row  gap-6 z-40' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <ButtonCustom size='lg' >
                        image gallery
                    </ButtonCustom>

                    <ButtonCustom size='lg'
                        colorTxt={"text-white"}
                        bgColor={"bg-transparent"}
                        borderColor={"border border-bgBaseColor "}
                        hoverEffect={"hover:border-white hover:bg-[#ffffff] hover:text-black "}>

                        recorded classes
                    </ButtonCustom>
                </div>

                <p className='text-white font-light mt-8 z-40 italic text-[12px] ' data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    Gérard creation <span className='text-basesportcolor underline underline-offset-2 '>design</span>
                </p>




                <Spacer className='my-2' />
                <div className='relative z-40'>
                    <Image
                        width={50}
                        alt="NextUI hero Image"
                        src="/sport/chevronbas.png"
                        removeWrapper={true}
                        className='image-animate'

                    />
                </div>

            </div>
        </div>
    )
}

export default Hero