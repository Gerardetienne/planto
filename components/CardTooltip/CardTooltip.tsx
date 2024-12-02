import { NextPage } from 'next'
import { ReactNode } from 'react'
import { Image } from "@nextui-org/react";
import { RatingBlog } from '../Rating/Rating';
import ButtonCustom from '../ButtonCustom/ButtonCustom';
import ShinyButton from '../magicui/shiny-button';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { MdCancel } from 'react-icons/md';
import Link from 'next/link';

interface ItemCard {
  image: string
  title: string
  description: string
  price: string
  addCard: ReactNode | string
  rating: number
  instock: boolean
}


interface Props {
  items: ItemCard
}

const CardTooltip: NextPage<Props> = ({ items }) => {
  return <div className='block p-4 box-border bg-transparent min-w-96 w-[500px] '>

    <div className='hidden md:flex md:flex-row items-center gap-4 '>

      <div className="flex-auto w-[40%] ...">
        <div className='relative flex flex-col justify-center items-center cursor-pointer '>
          <Image
            alt="NextUI Fruit Image with Zoom"
            src={items.image}
            loading="lazy"
            removeWrapper={true}
            className='flex  w-auto h-[328px] drop-shadow-md'
          />

          <Link href="#" className=" italic cursor-pointer mt-2" >
            <ShinyButton className=' italic font-semibold text-black/50 mb-2' text={" View full details"} />
          </Link>
        </div>

      </div>

      <div className="flex-auto w-[60%] ...">
        <div className='block space-y-8  ' >
          <h2 className=' text-[1.5rem] font-bold '>{items.title}</h2>

          <div>
            <ShinyButton className=' italic font-semibold text-black/50 mb-2' text={items.price + " $"} />

            <RatingBlog star={items.rating} />
          </div>



          <div className='flex flex-row gap-2 items-center '>

            {
              items.instock ? <FaRegCircleCheck size={"1.2em"} className={"text-[#6ec74d]"} /> : <MdCancel size={"1.2em"} className={"text-[#FF0000]"} />
            }

            In stock and ready to ship

          </div>



          <p className='mb-4'>{items.description}</p>


          <ButtonCustom isDisabled={items.instock} colorTxt={"text-[#1b2316] px-10 "} size={"lg"} bgColor={"bg-white"} borderColor={"border border-white"} radius={"sm"}>
            {"Ajouter au panier"}
          </ButtonCustom>


        </div>


      </div>
    </div>
  </div>
}

export default CardTooltip