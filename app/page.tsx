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
import Card from '@/components/Card/Card';
import Customer from '@/components/Customer/Customer';
import CardCarrousel from '@/components/CardCarrousel/CardCarrousel';
import WeHave from '@/components/WeHave/WeHave';

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



  return (
    <div className='w-full bg-[#1b2316] pb-40'>

      <div className="w-full min-h-screen bg-[url('/planto/Fond.png')] bg-center bg-no-repeat bg-cover ">

        <section className='block w-full  lg:w-[90%] mx-auto '>
          <NavBar />
          <Spacer className="my-32" />
          <Breath />

          <Spacer className="my-10" />
          <OurTrendy espaceY={"py-10"} >
            Our Trendy plants
          </OurTrendy>
          <Spacer className="my-10" />

          <ForSmall />

          <Spacer className="my-32" />

          <ForFresh />

        </section>


      </div>


      <section className='block w-full  lg:w-[90%] mx-auto'>
        <Spacer className="my-20" />
        <OurTrendy espaceY={"py-10"} >
          Our Top Selling
        </OurTrendy>
        <Spacer className="my-40" />

        <Card />

      </section>

      <section className='block w-full  lg:w-[90%] mx-auto'>
        
      <Spacer className="my-20" />
        <OurTrendy espaceY={"py-10"} >
        Customer Review
        </OurTrendy>
        <Spacer className="my-40" />

        <Customer />

      </section>

      
      <section className='block w-full  lg:w-[90%] mx-auto'>
        
      <Spacer className="my-20" />
        <OurTrendy espaceY={"py-10"} >
        Our best
        </OurTrendy>
        <Spacer className="my-40" />

        <WeHave />
        

      </section>




    </div>
  )
}