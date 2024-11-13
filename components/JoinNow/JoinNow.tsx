'use client'
import { NextPage } from 'next'
import { Spacer, Image } from "@nextui-org/react";
import { useEffect, useState } from 'react';
import React, { ReactNode } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

interface Content {
    image: string
    title: string
    description: string
    icone: ReactNode
    duration?: number
}

const ContentValue: Content[] = [
    {
        image: "/sport/icone1.png",
        title: "Unlimited Fitness",
        description: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
        icone: <FaArrowRightLong size={"2em"} />,
        duration: 1200

    },
    {
        image: "/sport/icone2.png",
        title: "Personal Training",
        description: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
        icone: <FaArrowRightLong size={"2em"} />,
        duration: 1400
    },
    {
        image: "/sport/icone3.png",
        title: "Massage Therapy",
        description: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
        icone: <FaArrowRightLong size={"2em"} />,
        duration: 1600
    },
    {
        image: "/sport/icone4.png",
        title: "Quick Workouts",
        description: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
        icone: <FaArrowRightLong size={"2em"} />,
        duration: 2000
    }
]

const Skeleton = () => {
    return (
        <div className='border border-bgBaseColor bg-bgBaseColor shadow rounded-sm p-2 max-w-sm w-full mx-auto h-[312px] '>
     
            <div className='relative z-40 -mt-[30px] '>
                <div className="animate-pulse flex flex-row text-center justify-center z-50 -mt-[30px]"><div className="rounded-none bg-slate-200 h-20 w-20"></div></div>
            </div>

            <Spacer className='my-10' />

            <div className="animate-pulse space-y-9 ">
                <div className="h-3 bg-slate-200 rounded"></div>
                <div className="grid grid-cols-3 gap-2">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className='flex flex-row justify-center '>
                    <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                </div>
            </div>

        </div>
    )
}

const CardContent = ({ item }: { item: Content }) => {

    const [LibraryDynamic, setSomeLibrary] = useState<any>(null);
    // load dynamic coté client
    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('@nextui-org/react').then((module) => {
                setSomeLibrary(module.default || module);
            });
        }
    }, []);

    if (!LibraryDynamic) {
        // Affiche un fallback pendant le chargement du module
        // return <div className="loading-text">Load</div>;
        return <Skeleton />;
    }

    return (
        <div className='flex flex-col items-center gap-8 pt-0 pb-8 w-full bg-bgBaseColor text-black   ' data-aos="flip-right"  data-aos-easing="linear"
        data-aos-duration={item.duration} >

            <div className='relative z-40 bg-white -mt-[30px] '>
                <LibraryDynamic.Image
                    width={80}
                    alt="NextUI hero Image"
                    src={item.image}
                    removeWrapper={true}
                    radius='none'
                    className='border-5 border-bgBaseColor shadow-xl p-2'
                />
                {/* {!loaded && <div className="loading-text text-center">Load</div> } */}
            </div>

            <h3 className='text-[20px] font-bold '>{item.title}</h3>
            <p className='text-center'>
                {item.description}
            </p>

            <div>
                {item.icone}
            </div>


        </div>
    )
}


interface Props { }

const JoinNow: NextPage<Props> = ({ }) => {
    return (
        <div className='w-full m-0' >
            <h2 className='text-black font-bold mb-6 text-[48px] text-center ' >Join now for just $10/month</h2>
            <Spacer className='my-10' />

            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 '>
                {
                    ContentValue.map((item: Content, index: number) => <CardContent item={item} key={index} />)
                }
            </div>

        </div>
    )
}

export default JoinNow