import { NextPage } from 'next'
import { Image } from "@nextui-org/react";
import { FaCalendarCheck } from 'react-icons/fa6';
import { ReactNode } from 'react'
import Testimonial from '../Testimonial/Testimonial';


const LiestTestimonial  = [
    {
        image: "/planto/Testimonial-2.png",
        name: "For Small Decs Ai Plat",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
    },
    {
        image: "/planto/Testimonial-3.png",
        name: "For Small Decs Ai Plat",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
    },
    {
        image: "/planto/Testimonial-1.png",
        name: "For Small Decs Ai Plat",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua sed do eiusmodtempor incididunt ut labore et dolore magna aliqua",
    }
]

interface Props{
}

const Customer: NextPage<Props> = ({}) => {
  return (
    <div className='block mx-auto w-full  lg:w-[80%] '>
             <Testimonial items={LiestTestimonial} />
    </div>
  )
}

export default Customer