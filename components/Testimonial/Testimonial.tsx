import { NextPage } from 'next'
import ButtonCustom from '../ButtonCustom/ButtonCustom'
import { Spacer } from '@nextui-org/spacer'
import { GoPlay } from "react-icons/go";
import { Image } from "@nextui-org/react";

interface testType {
    image: string 
    name: string 
    content: string 
}

interface Props {
    items: testType[]

}

const Testimonial:NextPage<Props> = ({items}) => {
  return (
<div className='grid grid-cols-1 md:grid-cols-3 gap-8 '>
{
        items.map((item:testType, index:number) => {
            return(
                <div className={`${index == 1 ? "rounded-[20px] " : "rounded-[40px] "} p-8 inline-block  backdrop-blur-md bg-[#ffffff10] w-full curved border-l-[1px] border-b-[1px] border-[#ffffff4f] border-t-0 border-r-0 `} key={index} >
                <div className='flex flex-row gap-6 items-center   '>

                    <div className='relative shrink-0 ' >
                        <Image
                            radius='full'
                            width={64}
                            height={64}
                            alt="NextUI Fruit Image with Zoom"
                            src={item.image}
                            loading="lazy"
                            removeWrapper={true}
                            className='flex object-cover drop-shadow-lg'
                        />
                    </div>

                    <div className='block'>
                        <h3 className='text-white text-[16px]'>{item.name}</h3>
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



                <p className='text-basecolor text-[16px] mt-6 line-clamp-4 '>{item.content}</p>

            </div>
            )
        })
    }

</div>
  )
}

export default Testimonial