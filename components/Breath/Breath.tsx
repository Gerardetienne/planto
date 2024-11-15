import { NextPage } from 'next'
import ButtonCustom from '../ButtonCustom/ButtonCustom'
import { Spacer } from '@nextui-org/spacer'
import { GoPlay } from "react-icons/go";
import { Image } from "@nextui-org/react";

interface Props { }

const Breath: NextPage<Props> = ({ }) => {
    return <div className='flex md:flex-row flex-col w-full h-full px-6  '>

        <Spacer className="my-14" />


        <div className='flex-auto w-full md:w-[60%] p-0 m-0'>
            <div className='flex flex-col  space-y-64 '>
                <div className='flex flex-col gap-3  text-basecolor'>
                    <h1 className='font-extrabold text-[100px] p-0 m-0 '>{"Breath Natureal"}</h1>
                    <p className='font-light text-[20px] -mt-10 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />incididunt ut labore et dolore magna aliqua.</p>

                    <div className='flex flex-row gap-4 items-center '>

                        <div className=' inline-block '>
                            <ButtonCustom colorTxt={"text-basecolor px-10 "} size={"lg"} bgColor={"bg-transparent"} borderColor={"border border-white"} radius={"md"}>
                                {"Explore"}

                            </ButtonCustom>
                        </div>

                        <GoPlay size={"3em"} className='stroke-0' />

                        <p className='text-[20px] font-light '>{"Live Demo..."}</p>
                    </div>
                </div>



                <div className='block  '>

                    <div className='p-8 rounded-[40px] inline-block  backdrop-blur-md bg-[#ffffff10]'>
                        <div className='flex flex-row gap-6 items-center   '>

                            <div className='relative shrink-0 ' >
                                <Image
                                    radius='full'
                                    width={64}
                                    height={64}
                                    alt="NextUI Fruit Image with Zoom"
                                    src="/planto/author.png"
                                    loading="lazy"
                                    removeWrapper={true}
                                    className='flex object-cover '
                                />
                            </div>

                            <div className='block'>
                                <h3 className='text-white text-[16px]'>Gerard Etienne</h3>
                                <div className='relative ' >
                                    <Image
                                        radius='full'
                                        height={10}
                                        alt="NextUI Fruit Image with Zoom"
                                        src="/planto/Group 7.png"
                                        loading="lazy"
                                        removeWrapper={true}
                                        className='flex object-cover '
                                    />
                                </div>

                            </div>
                        </div>



                        <p className='text-basecolor text-[16px] mt-6'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit sed do eiusmod,<br />  tempor incididunt...</p>

                    </div>

                </div>

            </div>
        </div>

        <div className='flex-auto w-full md:w-[40%] p-0 m-0'>
            <div className='flex flex-row  justify-center items-start'>

                <div className='flex flex-col gap-4  backdrop-blur-md rounded-[40px]  bg-[#ffffff10] w-full md:w-[90%] lg:w-[75%]  p-8'>


                    <div className='relative -mt-28 z-50 mb-10'>
                        <Image
                            width={459}
                            alt="NextUI Fruit Image with Zoom"
                            src="/planto/calethea-removebg.png"
                            loading="lazy"
                            removeWrapper={true}
                            className='z-50'
                        />

                    </div>


                    <p className='text-basecolor text-[16px] '>Trendy House Plant</p>
                    <h3 className='text-basecolor text-[38px] font-light '>

                        Calathea plant
                    </h3>

                    <div className=' inline-block '>
                        <ButtonCustom colorTxt={"text-basecolor px-10 "} size={"lg"} bgColor={"bg-transparent"} borderColor={"border border-white"} radius={"md"}>
                            {"By now"}
                        </ButtonCustom>
                    </div>
                </div>
            </div>



        </div>
    </div>
}

export default Breath