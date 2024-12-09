import { NextPage } from 'next'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import { Badge, Code, Image } from "@nextui-org/react";
import { RatingBlog } from '../Rating/Rating';

import ShinyButton from '../magicui/shiny-button';
import { FaCartPlus, FaRegCircleCheck } from 'react-icons/fa6';
import { MdCancel } from 'react-icons/md';
import Link from 'next/link';
import { DataPlanteTypes } from '@/app/data';

import CartAdvanceDistribute from '@/app/contexts/CartLocalStorage';
import { useContext } from 'react';
import ButtonAddCart from "@/components/ButtonAddCart/ButtonAddCart";


interface Props {
  items: DataPlanteTypes
}

const CardTooltip: NextPage<Props> = ({ items }) => {



  // initialise le useContext
  const authContext = useContext(CartAdvanceDistribute)
  if (!authContext) {
    return <div>Chargement...</div>;
  }
  const { AddItem, ItemTotal } = authContext;


const ListeItemInCart:number = ItemTotal() 


  return <div className='block p-4 box-border bg-transparent min-w-96 w-[500px] '>

    <div className='hidden md:flex md:flex-row items-center gap-4 '>

      <div className="flex-auto w-[40%] ...">
        <div className='relative flex flex-col justify-center items-center cursor-pointer '>
          <Image
            alt="NextUI Fruit Image with Zoom"
            src={items.image_featured}
            loading="lazy"
            removeWrapper={true}
            className='flex  w-auto h-[328px] drop-shadow-md'
          />

          <Link href={`/plante/${items.id}`} className=" italic cursor-pointer mt-2" >
            <ShinyButton className=' italic font-semibold text-black/50 mb-2' text={" View full details"} />
          </Link>
        </div>

      </div>

      <div className="flex-auto w-[60%] ...">
        <div className='block space-y-8  ' >
          <h2 className=' text-[1.5rem] font-bold '>{items.nom}</h2>

          <div>
            <div className='flex flex-row justify-between items-center gap-2 w-full'>
              <ShinyButton className=' italic font-semibold text-black/50 mb-2  ' text={items.price + " $"} />
              <Code size="sm" color="success"><p><span className='font-light'>Type:</span> {items.famille}</p></Code>
            </div>


            <RatingBlog star={items.rating} />
          </div>


          <div className='flex flex-row gap-2 items-center '>
            {
              items.instock ? <FaRegCircleCheck size={"1.2em"} className={"text-[#6ec74d]"} /> : <MdCancel size={"1.2em"} className={"text-[#FF0000]"} />
            }
            In stock and ready to ship
          </div>

          <p className='mb-4 line-clamp-5'>{items.description}</p>



          <ButtonAddCart addCart={() => AddItem(items, items.price)} isDisabled={items.instock} colorTxt={"text-[#1b2316] px-10 "} size={"lg"} bgColor={"bg-white"} borderColor={"border border-white"} radius={"sm"}>
            <div className="flex flex-row items-center gap-4">
              {"Ajouter au panier"}
          
              <Badge color="default" content={ListeItemInCart} shape="circle" >
                 <FaCartPlus size={"1.5em"} className={`${ListeItemInCart > 0 ? "text-success " : " text-default "}  `} />
              </Badge>
    
   
            </div>
          </ButtonAddCart>


        </div>


      </div>
    </div>
  </div>
}

export default CardTooltip