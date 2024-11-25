import { NextPage } from 'next'
import { Image } from "@nextui-org/react";
import ButtonCustom from '../ButtonCustom/ButtonCustom';


interface Props1 {
    image: string
    title: string
    content1: string
    content2: string
    link: string
}

interface Props {
    items: Props1
    totalData: number
    activeSlide: number
}


const CardCarrousel: NextPage<Props> = ({ items, totalData, activeSlide }) => {
    return (
        <div className='block mx-auto w-full  lg:w-[80%]  text-basecolor py-4 px-8 backdrop-blur-md bg-[#ffffff10] relative rounded-[40px]   border-l-[1px] border-b-[1px] border-[#ffffff4f] border-t-0 border-r-0'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>

                <div className='flex flex-row items-center justify-center relative  '>
                    <Image
                        alt="NextUI Fruit Image with Zoom"
                        src={items.image}
                        loading="lazy"
                        removeWrapper={true}
                        className='flex  w-auto h-[500px]  drop-shadow-md '
                    />
                </div>


                <div className='flex flex-col justify-center gap-6 '>
                    <h2 className='text-[30px] font-semibold  '>{items.title}</h2>
                    <p className='text-[20px] font-extralight'>{items.content1}</p>
                    <p className='text-[20px] font-extralight'>{items.content2}</p>


                    <div className='flex flex-row items-center justify-between w-full gap-4  '>
                        <div className=' inline-block '>
                            <ButtonCustom colorTxt={"text-basecolor px-10 "} link={items.link} size={"lg"} bgColor={"bg-transparent"} borderColor={"border border-white"} radius={"sm"}>
                                {"Explore"}

                            </ButtonCustom>
                        </div>

                        <div className='text-white px-16  '>
                            <p className='space-x-2 italic'>
                                <span className='text-[#6ec74d]'>
                                    {
                                        activeSlide + 1
                                    }
                                </span>
                                <span>/</span>
                                <span>
                                    {
                                        totalData
                                    }
                                </span>

                            </p>



                        </div>

                    </div>




                </div>

            </div>

        </div>
    )
}

export default CardCarrousel