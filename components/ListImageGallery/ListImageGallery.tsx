"use client"
import { Image } from '@nextui-org/react';
import { useState } from 'react';
import { Spacer } from '@nextui-org/react';
import { GrTechnology } from "react-icons/gr";
import { MdOutlineTravelExplore } from "react-icons/md";
import { ReactNode } from 'react';
import { GiTripleGate } from "react-icons/gi";
import React, { useMemo } from 'react';
import ButtonCustom from '../ButtonCustom/ButtonCustom';




interface ContentGallery {
    src: string
    title: string
    category: string
    customClass: string
    icone?: ReactNode
}

const GalleryContent: ContentGallery[] = [
    {
        src: "/sport/amenities.jpg",
        title: "",
        category: "Pool and Jacuzzi",
        customClass: "w-1/2 p-1 md:p-2 overflow-hidden relative "

    },
    {
        src: "/sport/amenities1.jpg",
        title: "",
        category: "Studios",
        customClass: "w-1/2 p-1 md:p-2 overflow-hidden relative"

    },
    {
        src: "/sport/amenities2.jpg",
        title: "What is Lorem Ipsum lorem dark ulum dash",
        category: "Lounge and Cafe",
        customClass: "w-full p-1 md:p-2 overflow-hidden relative",
        icone: <GiTripleGate size={"2em"} />

    },
    {
        src: "/sport/amenities3.jpg",
        title: "What is Lorem Ipsum lorem dark ulum dash",
        category: "Sauna",
        customClass: "w-full p-1 md:p-2 overflow-hidden relative",
        icone: <MdOutlineTravelExplore size={"2em"} />

    },
    {
        src: "/sport/amenities4.jpg",
        title: "",
        category: "Outdoor spaces",
        customClass: "w-1/2 p-1 md:p-2 overflow-hidden relative"

    },
    {
        src: "/sport/amenities5.jpg",
        title: "",
        category: "Basketball court",
        customClass: "w-1/2 p-1 md:p-2 overflow-hidden relative"

    }
]



export const ViewContentGallery = ({ gallery, textDeco }: { gallery: ContentGallery, textDeco: boolean }) => {
    return (

        <div className={`${gallery.customClass} group`}>
            <div className="overflow-hidden h-full w-full z-[100] relative cursor-pointer  ">
                <div className="absolute top-0 left-0 h-full  w-full bg-[#2C2C2C] group-hover:opacity-70  opacity-20 z-20 "></div>

                <Image isZoomed alt="gallery" className=" h-full w-full rounded object-cover  object-center group-hover:scale-110" removeWrapper={true} src={gallery.src} />

                <div className="absolute bottom-[-10px] left-0 z-[55] w-full py-4 px-2 soratra CreateOverlay text-white  rounded bg-fixed overflow-hidden">
                    <div className='flex flex-row items-center gap-2 '>

                        <ButtonCustom size='sm' >
                            {gallery.icone}
                            <p className='font-bold text-[12px] '>{gallery.category}</p>
                        </ButtonCustom>
                    </div>
                    <p className={`group-hover:underline text-[12px]`}>{gallery.title}</p>
                </div>
            </div>
        </div>
    )
}

const ImageBgContent = ({ textDeco }: { textDeco: boolean }) => {
    return (
        <div className="CustomCss" >
            <div className="flex h-full items-end justify-start z-50 relative">
                <div className="text-white">

                    <div className='flex flex-row items-center gap-2 text-basesportcolor '>
                        <GrTechnology size={"2em"} />
                        <p className='text-left font-bold'>
                        Membership With Benefits
                        </p>
                    </div>

                    <h4 className={`${textDeco ? ' underline ' : ""} text-xl font-semibold>It is a long established fact that a reader will be distracted`}> {"We can't wait to see you at our gym!"}</h4>

                </div>
            </div>
        </div>
    )
}



const GalleryConentViewer = () => {

    const [textDeco, setTextDeco] = useState(false);
    const HandeleHover = () => {
        return setTextDeco(true)
    }


    return (
        <>
            <Spacer className='my-4' />
            <div className='grid grid-cols-1 md:grid-cols-2  gap-4 px-2 my-1 md:my-6 overflow-hidden  '>

                <div className=" bg-[url('/sport/amenities0.jpg')] bg-center bg-no-repeat bg-cover h-full w-full content-end relative overflow-hidden p-6 rounded group " data-aos="fade-right" data-aos-duration="1200" onMouseEnter={HandeleHover} onMouseLeave={() => setTextDeco(false)} >
                    <div className="absolute top-0 left-0 h-full  w-full bg-[#2C2C2C] group-hover:opacity-60 opacity-30 z-20 "></div>
                    <ImageBgContent textDeco={textDeco} />
                </div>

                <div className='h-full w-full content-center '  data-aos="fade-left" data-aos-duration="1200">

                    <div className="flex w-full flex-wrap">
                        <div className="flex md:w-1/2 flex-wrap" > {GalleryContent.map((item: ContentGallery, index: number) => {
                            return (index
                                <= 2 && <ViewContentGallery gallery={item} key={index} textDeco={textDeco} />)
                        })}
                        </div>

                        <div className="flex w-full md:w-1/2 flex-wrap"> {GalleryContent.map((item: ContentGallery, index: number) => {
                            return (index > 2 &&
                                <ViewContentGallery gallery={item} key={index} textDeco={textDeco} />)
                        })}
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}


const ListImageGallery = () => {

    const memoizedFirstBlock = useMemo(() => {
        return <GalleryConentViewer />;
    }, []);

    return (
        <div>
            {memoizedFirstBlock}
            <p className='text-black font-light mt-8 z-40 italic text-[12px] text-center '>
                    Gérard creation <span className='text-basesportcolor underline underline-offset-2 '>design</span>
                </p>
        </div>
    );

}



export default ListImageGallery