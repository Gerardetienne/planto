import { NextPage } from 'next'
import { Metadata } from "next";
import Footer from './footer';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero/Hero';



import { openGraphImageHome } from './shared-metadata';

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
            <Hero />

            {/* <div className="flex justify-center bg-white py-14  ">
                <div className='flex-initial w-full md:w-[80%] xl:w-[60%]'>
                <JoinNow />
                </div>
            </div> */}
            
  
            {/* <Footer /> */}
        </div>
    )
}