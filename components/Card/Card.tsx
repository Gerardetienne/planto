"use client"
import { ReactNode, useEffect, useState } from 'react'
import { Avatar, Badge, Image } from "@nextui-org/react";
import { FaCalendarCheck } from 'react-icons/fa6';
import { Tooltip, Button } from "@nextui-org/react";
import CardTooltip from '../CardTooltip/CardTooltip';
import { DataPlante, DataPlanteTypes, ItemCard, LiestCard, test } from '@/app/data';


interface Props { }

const isJSON = (value: any): boolean => {
    return (
        typeof value === 'object' &&
        value !== null
    );
};

const CardContent = ({ item, position }: { item: DataPlanteTypes, position: number }) => {

    const [inCart, setInCart] = useState([]) as any;
    const [qt, setQt] = useState(null) as any;

    useEffect(() => {

        if (typeof window !== "undefined") {
            // Vérifier si les données existent dans le localStorage
            const dataIncart = localStorage.getItem("cart");
            if (dataIncart) {
                // Si elles existent, les charger
                setInCart(JSON.parse(dataIncart));
            }
        }

    }, []);

    let data = false;
    let currentItemInCart = null;
    let prod = "";
    const CartProduct = inCart?.products

    if (CartProduct) {
        data = CartProduct.find((elem: test) => elem.id === item.id)
        currentItemInCart = data ? CartProduct.filter((elem: test) => elem.id === item.id) : 0
        prod = isJSON(currentItemInCart) ? currentItemInCart[0].quantity : 0
        console.log(prod)

    }



    return (
        <Tooltip
            showArrow
            placement="right"
            content={<CardTooltip items={item} />}
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
            <div className={`${position > 2 ? " mt-40 " : " mt-auto "} space-y-4 cursor-pointer text-basecolor p-8 backdrop-blur-md bg-[#ffffff10] relative rounded-[40px] curved  border-l-[1px] border-b-[1px] border-[#ffffff4f] border-t-0 border-r-0`} >

                <div className='relative mb-10 flex flex-col justify-center items-center cursor-pointer gap-4'>
                    <Image
                        alt="NextUI Fruit Image with Zoom"
                        src={item.image_featured}
                        loading="lazy"
                        removeWrapper={true}
                        className='flex  w-auto h-[328px] -mt-40 drop-shadow-md'
                    />
                </div>
                <h3 className='font-bold text-[30px] text-left'>{item.nom}</h3>
                <p className='text-[18px] font-light line-clamp-2'>{item.description}</p>


                <div className='flex flex-row gap-4 items-center justify-between w-full  '>

                    <div className='inline-block'>
                        <p className='font-bold text-[30px] text-success '>{item.price} {" $ "}</p>
                    </div>

                    <Badge color="default" content={prod ? prod : 0} placement="top-left">
                        {/* <Avatar isBordered radius="md" src="https://i.pravatar.cc/150?u=a04258114e29026708c" /> */}
                        <div className='flex flex-row items-center gap-3'>
                            <div className='border border-white rounded-md p-4'>
                                <FaCalendarCheck size={"1em"} className='stroke-0' />
                            </div>
                        </div>
                    </Badge>

                </div>

            </div>
        </Tooltip>
    )
}

const Card: React.FC<Props> = ({ }) => {


    const [dataWithQuantity, setDataWithQuantity] = useState([]) as any;
    useEffect(() => {

        if (typeof window !== "undefined") {
            // Vérifier si les données existent dans le localStorage
            const storedData = localStorage.getItem("dataCart");
            if (storedData) {
                // Si elles existent, les charger
                setDataWithQuantity(JSON.parse(storedData));
            } else {
                // Si elles n'existent pas, ajouter "quantity" et les stocker
                const updatedData = DataPlante.map((item) => ({
                    ...item,
                    quantity: 1,
                }));

                localStorage.setItem("dataCart", JSON.stringify(updatedData));
                setDataWithQuantity(updatedData);
            }
        }

    }, []);

    return (
        <div className='block mx-auto w-full lg:w-[80%] '>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 '>
                {
                    dataWithQuantity.map((item: DataPlanteTypes, index: number) => <CardContent item={item} key={index} position={index} />)
                }
            </div>
        </div>
    )
}

export default Card