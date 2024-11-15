import { NextPage } from 'next'
import { ReactNode } from 'react'
import { Image } from "@nextui-org/react";
import { FaCalendarCheck } from 'react-icons/fa6';

interface Props {}


interface ItemCard {
    image:string
    title:string 
    description:string 
    price:string 
    addCard:ReactNode | string
}


const LiestCard:ItemCard[] = [
{
    image: "/planto/PlanteModel1.png" ,
    title: "For Small Decs Ai Plat",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
    price: "Rs. 599/-",
    addCard: <FaCalendarCheck size={"1em"} className='stroke-0' />
},
{
    image: "/planto/PlanteModel1.png" ,
    title: "For Small Decs Ai Plat",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
    price: "Rs. 599/-",
    addCard: <FaCalendarCheck size={"1em"} className='stroke-0' />
},
{
    image: "/planto/PlanteModel1.png" ,
    title: "For Small Decs Ai Plat",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
    price: "Rs. 599/-",
    addCard: <FaCalendarCheck size={"1em"} className='stroke-0' />
}
]


const CardContent = ({item}:{item:ItemCard}) => {
    return(
        <div className='flex flex-col justify-center items-center gap-4 text-basecolor p-8 backdrop-blur-md bg-[#ffffff10] relative rounded-[40px]' >

              <div className='relative'>
                    <Image
                        alt="NextUI Fruit Image with Zoom"
                        src={item.image}
                        loading="lazy"
                        removeWrapper={true}
                        className='flex  w-auto h-auto -mt-40 '
                    />

                </div>
        <h3 className='font-bold text-[30px]'>For Small Decs Ai Plat</h3>
        <p className='text-[18px] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br /> tempor incididunt ut labore et dolore magna aliqua</p>
      

        <div className='flex flex-row gap-4 items-center justify-between  '>

            <div className=' inline-block '>
            <p className='font-bold text-[30px]'>Rs. 599/-</p>
            </div>

            <div className='border border-white rounded-md p-4'>
                <FaCalendarCheck size={"1em"} className='stroke-0' />
            </div>

        </div>
    </div>
    )
}

const Card: NextPage<Props> = ({}) => {
  return (
  <div>
       <div className='grid grid-cols-1 md:grid-cols-3 gap-8 '>

        {
            LiestCard.map((item:ItemCard, index:number) => <CardContent item={item} key={index} />)
        }

       </div>
  </div>
)
}

export default Card