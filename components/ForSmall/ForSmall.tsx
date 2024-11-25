import { NextPage } from 'next'
import ButtonCustom from '../ButtonCustom/ButtonCustom'
import { FaCalendarCheck } from 'react-icons/fa6'
import { Image } from "@nextui-org/react";

interface Props { }

const ForSmall: NextPage<Props> = ({ }) => {
    return (
        <div className='w-full h-full px-6 '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 p-16 backdrop-blur-md bg-[#ffffff10] rounded-[70px] h-auto  w-auto shadow-sm shadow-white  '>

                <div className='relative w-full lg:w-[70%]  flex flex-row justify-center md:justify-start'>
                <Image
                                    radius='full'
                             
                                    alt="NextUI Fruit Image with Zoom"
                                    src="/planto/PlanteModel1.png"
                                    loading="lazy"
                                    removeWrapper={true}
                                    className='flex w-auto h-auto md:h-[481px] -mt-40'
                                />

                </div>

                <div className='flex flex-col justify-center gap-4 text-basecolor ' >
                    <h3 className='font-bold text-[30px]'>For Small Decs Ai Plat</h3>
                    <p className='text-[18px] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br /> tempor incididunt ut labore et dolore magna aliqua</p>
                    <p className='font-bold text-[30px]'>Rs. 599/-</p>

                    <div className='flex flex-row gap-4 items-center '>

                        <div className=' inline-block '>
                            <ButtonCustom colorTxt={"text-basecolor px-10 "} size={"lg"} bgColor={"bg-transparent"} borderColor={"border border-white"} radius={"sm"}>
                                {"Explore"}

                            </ButtonCustom>
                        </div>

                        <div className='border border-white rounded-md p-4'>
                            <FaCalendarCheck size={"1em"} className='stroke-0' />
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default ForSmall