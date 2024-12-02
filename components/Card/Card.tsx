import { NextPage } from 'next'
import { ReactNode } from 'react'
import { Image } from "@nextui-org/react";
import { FaCalendarCheck } from 'react-icons/fa6';
import {Tooltip, Button} from "@nextui-org/react";

interface Props { }


interface ItemCard {
    image: string
    title: string
    description: string
    price: string
    addCard: ReactNode | string
}


const LiestCard: ItemCard[] = [
    {
        image: "/planto/PlanteModel1.png",
        title: "For Small Decs Ai Plat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        price: "Rs. 599/-",
        addCard: <FaCalendarCheck size={"1em"} className='stroke-0' />
    },
    {
        image: "/planto/calethea-removebg.png",
        title: "For Small Decs Ai Plat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        price: "Rs. 599/-",
        addCard: <FaCalendarCheck size={"1em"} className='stroke-0' />
    },
    {
        image: "/planto/roseGoldopti.png",
        title: "For Small Decs Ai Plat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        price: "Rs. 599/-",
        addCard: <FaCalendarCheck size={"1em"} className='stroke-0' />
    },

    {
        image: "/planto/Monogram.png",
        title: "For Small Decs Ai Plat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        price: "50 000 Ar",
        addCard: <FaCalendarCheck size={"1em"} className='stroke-0' />
    },
    {
        image: "/planto/Monogram1.png",
        title: "For Small Decs Ai Plat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        price: "Rs. 599/-",
        addCard: <FaCalendarCheck size={"1em"} className='stroke-0' />
    },
    {
        image: "/planto/Monogram2.png",
        title: "For Small Decs Ai Plat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
        price: "Rs. 599/-",
        addCard: <FaCalendarCheck size={"1em"} className='stroke-0' />
    }
]



const CardContent = ({ item, position }: { item: ItemCard, position:number }) => {
    return (
        <Tooltip 
        showArrow
        placement="right"
        content={item.title}
        classNames={{
          base: [
            // arrow color
            "before:bg-neutral-400 dark:before:bg-white",
          ],
          content: [
            "py-2 px-4 shadow-xl",
            "text-black bg-gradient-to-br from-white to-neutral-400",
          ],
        }}
      >
        <div className={`${position > 2 ? " mt-40 " : " mt-auto "} space-y-4 text-basecolor p-8 backdrop-blur-md bg-[#ffffff10] relative rounded-[40px] curved  border-l-[1px] border-b-[1px] border-[#ffffff4f] border-t-0 border-r-0`} >

            <div className='relative mb-10 flex flex-col justify-center items-center cursor-pointer gap-4'>
                <Image
                    alt="NextUI Fruit Image with Zoom"
                    src={item.image}
                    loading="lazy"
                    removeWrapper={true}
                    className='flex  w-auto h-[328px] -mt-40 drop-shadow-md'
                />

            </div>
            <h3 className='font-bold text-[30px] text-left'>{item.title}</h3>
            <p className='text-[18px] font-light line-clamp-2'>{item.description}</p>


            <div className='flex flex-row gap-4 items-center justify-between w-full  '>

                <div className=' inline-block '>
                    <p className='font-bold text-[30px]'>{item.price}</p>
                </div>

                <div className='border border-white rounded-md p-4'>
                    <FaCalendarCheck size={"1em"} className='stroke-0' />
                </div>

            </div>

        </div>
        </Tooltip>
    )
}

const Card: NextPage<Props> = ({ }) => {
    return (
        <div className='block mx-auto w-full lg:w-[80%] '>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 '>

                {
                    LiestCard.map((item: ItemCard, index: number) => <CardContent item={item} key={index} position={index} />)
                }

            </div>
        </div>
    )
}

export default Card