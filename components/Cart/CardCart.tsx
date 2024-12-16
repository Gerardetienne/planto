"use client"
import { NextPage } from 'next'
import { DataPlante, DataPlanteTypes, ItemCard, LiestCard, test } from '@/app/data';
import { Divider } from '@nextui-org/react';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { MdCancel } from 'react-icons/md';
import { Image } from "@nextui-org/react";
import { ReactNode } from 'react';
import CartAdvanceDistribute from '@/app/contexts/CartLocalStorage';
import { useCallback, useContext } from 'react';

interface Props {
    items: test
    removeItem: () => void | null
}
const CardCart: NextPage<Props> = ({ items, removeItem }) => {


    const authContext = useContext(CartAdvanceDistribute);
    const QuantityAjust = authContext?.QuantityAjuster 


    return <div className=''>
        <div className="flex">
            <div className="flex-auto w-[20%]">

                <div className='relative flex flex-row justify-center items-center p-2'>
                    <Image
                        alt="NextUI Fruit Image with Zoom"
                        src={items.image_featured}
                        loading="lazy"
                        removeWrapper={true}
                        className='flex  w-auto h-[250px] float-left drop-shadow-md single-image'
                    />
                </div>


            </div>

            <div className="flex-auto w-[80%]">
                <div className='grid grid-cols-1 md:grid-cols-2' >
                    
                    <div className=' flex flex-col justify-between h-auto md:min-h-64 py-10 overflow-hidden relative '>
                        <div className='' >
                            <h3>{items.nom}</h3>
                            <div className="flex h-5 items-center space-x-4 text-small">
                                <div>{items.famille}</div>
                                <Divider orientation="vertical" />
                                <div>{items.nom_scientifique}</div>
                                <Divider orientation="vertical" />
                                <div>{items.nomenclature}</div>
                            </div>

                            <p>{items.price}</p>

                        </div>

                        <div className='' >
                            <div className='flex flex-row gap-2 items-center '>
                                {
                                    items.instock ? <FaRegCircleCheck size={"1.2em"} className={"text-[#6ec74d]"} /> : <MdCancel size={"1.2em"} className={"text-[#FF0000]"} />
                                }
                                In stock and ready to ship
                            </div>
                        </div>

                    </div>

                    <div className='flex flex-row justify-between items-start gap-2 py-10'>
                        <div>
                        <QuantityAjust product={items} key={items.id} />

                        </div>

                    </div>


                </div>

            </div>
        </div>

    </div>

}

export default CardCart