import { NextPage } from 'next'
import { Metadata } from "next";
import Footer from './footer';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero/Hero';



import { openGraphImageHome } from './shared-metadata';
import { NavBar } from '@/components/Navbar/Navbar';
import Breath from '@/components/Breath/Breath';
import { Spacer } from '@nextui-org/react';
import OurTrendy from '@/components/OurTrendy/OurTrendy';
import ForSmall from '@/components/ForSmall/ForSmall';
import ForFresh from '@/components/ForFresh/ForFresh';

export const metadata: Metadata = {
    metadataBase: new URL(`${process.env.HOST}`),
    title: "Sports and wellness the way you want it - in one membership",
    description: 'Work out whenever, wherever and however you like – indoors, outdoors and online. Enjoy the most flexible sports and wellness offer in Europe!',
    openGraph: {
      title: 'Sports and wellness the way you want it - in one membership',
      description: 'Work out whenever, wherever and however you like – indoors, outdoors and online. Enjoy the most flexible sports and wellness offer in Europe!',
      ...openGraphImageHome
    },
  };


export default async function Index() {



    return(
        <div className='w-full'>

          <div className="w-full min-h-screen bg-[url('/planto/Fond.png')] bg-center bg-no-repeat bg-cover ">

          <div className='block w-full  lg:w-[90%] mx-auto'>
          <NavBar />
          <Spacer className="my-40" />
          <Breath />
           
          <Spacer className="my-10" />
          <OurTrendy espaceY={"py-10"} >
               Our Trendy plants
          </OurTrendy>
          <Spacer className="my-10" />

          <ForSmall />

          <Spacer className="my-32" />

          <ForFresh />
          </div>


          </div>
                      
        </div>
    )
}