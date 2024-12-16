"use client"
import { DataPlante, DataPlanteTypes } from "@/app/data";
import React, { ReactNode, useState, useEffect } from "react";
import { Accordion, AccordionItem, Badge, BreadcrumbItem, Breadcrumbs, Code, Divider } from "@nextui-org/react";
import { useParams } from "next/navigation"; // Pour récupérer les paramètres
// Assurez-vous que le chemin est correct
import { Image } from "@nextui-org/react";
import ImageGallery from "react-image-gallery";
import { VscTypeHierarchySuper } from "react-icons/vsc";
import "react-image-gallery/styles/css/image-gallery.css";
import ShinyButton from "@/components/magicui/shiny-button";
import { RatingBlog } from "@/components/Rating/Rating";
import { FaBook, FaBookOpen, FaCartPlus, FaRegCircleCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import ButtonCustom from "@/components/ButtonCustom/ButtonCustom";
import { IoArrowRedo } from "react-icons/io5";
import { GiPlantSeed } from "react-icons/gi";
import { PiPlantFill } from "react-icons/pi";
import { BiSolidCategory } from "react-icons/bi";
import { FaMapMarkedAlt, FaMapSigns } from "react-icons/fa";

import CartAdvanceDistribute from '@/app/contexts/CartLocalStorage';
import { useContext } from 'react';
import ButtonAddCart from "@/components/ButtonAddCart/ButtonAddCart";

type typeInformation = {
    name: string
    icone: ReactNode
    description: string
    value: string | string[]
}

interface Product {
    id: number;
    image_featured: string;
    rating: number;
    instock: boolean;
    nom: string;
    variete: string;
    variation: string;
    lieux_de_cultivation: string;
    type: string;
    famille: string;
    nom_scientifique: string;
    nomenclature: string[];
    categorie: string;
    baseUrl: string;
    image: string[];
    price: number;
    description: string;
    quantity: number;
}


const AccordionTitle = ({ title }: { title: string }) => {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => setOpen(v => !v)

    return (
        <div className="flex items-center gap-4" onClick={toggle} >
            <h2 className="text-[#c6c8c5] text-[20px] ">👉 {title}</h2>
            {
                open ? <FaBookOpen className="text-[#12A150]" size={"2em"} /> : <FaBook className="text-white" size={"2em"} />
            }
        </div>
    )
}


const AccordionContent = ({ item }: { item: typeInformation }) => {
    return (
        <div>
            <div className="flex flex-row items-center gap-2 mb-2">
                {item.icone}
                <h3 className="text-[#c6c8c5] text-[18px] font-semibold italic">
                    {item.name}
                </h3>
            </div>
            <div className="flex flex-row items-center gap-2">
                <Code size="sm" color="success" className="flex flex-row items-center gap-2">
                    <IoArrowRedo />
                    {
                        (item.value instanceof Array) ? (item.value.map((elem: string, index: number) => <p key={index}>{elem}</p>)) : <p>{item.value}</p>
                    }
                </Code>
            </div>
            <Divider orientation="horizontal" className="my-8 bg-white/20 " />
        </div>

    )
}



const ItemDetailsPage = () => {
    const params = useParams(); // Récupérer les paramètres dynamiques
    const { id } = params; // Extraire 'id'


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


    // initialise le useContext
    const authContext = useContext(CartAdvanceDistribute)
    if (!authContext) {
        return <div>Chargement...</div>;
    }
    const { AddItem, ItemTotal, PriceTotal, QuantityAjuster, RemoveItem, ClearItem, cart } = authContext;


    // Convertir `id` en nombre car les IDs dans `LiestCard` sont numériques
    const item = dataWithQuantity.find((item: Product) => item.id === Number(id)) as Product;

    // Gérer les cas où l'élément n'existe pas
    if (!item) {
        return <div>Item not found</div>;
    }


   // creer un structure pour le react gallery slide
    const tableGallery: any = [];
    item.image.map((url: any, index: number) => {
        tableGallery.push(
            {
                original: url,
                thumbnail: url
            }
        )
    })


    const information: typeInformation[] = [
        {
            name: "Variete",
            icone: <VscTypeHierarchySuper size={"1.5em"} />,
            description: "",
            value: item.variete
        },
        {
            name: "Variation",
            icone: <GiPlantSeed size={"1.5em"} />,
            description: "",
            value: item.variation
        },
        {
            name: "Lieux de cultivation",
            icone: <FaMapMarkedAlt size={"1.5em"} />,
            description: "",
            value: item.lieux_de_cultivation
        },
        {
            name: "Famille",
            icone: <PiPlantFill size={"1.5em"} />,
            description: "",
            value: item.famille
        },
        {
            name: "Nom scientifique",
            icone: <FaMapSigns size={"1.5em"} />,
            description: "",
            value: item.nom_scientifique
        },
        {
            name: "Categorie",
            icone: <BiSolidCategory size={"1.5em"} />,
            description: "",
            value: item.categorie
        },
    ]


    const defaultContent = "Lorem ipsum dolor sit amet, consectetur";

    return (
        <div className="py-10 ">
            <section className='block w-full  lg:w-[80%] mx-auto '>
                <div>
                    <Breadcrumbs className="text-white" color="success">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Plante</BreadcrumbItem>
                        <BreadcrumbItem>{item.type}</BreadcrumbItem>
                        <BreadcrumbItem>{item.nom}</BreadcrumbItem>
                    </Breadcrumbs>
                </div>
                <p className=' font-light mb-10 text-white my-5 '>{"Famille: " + item.famille}</p>

                <div className="flex flex-col md:flex-row items-center w-full my-10 gap-6">
                    <div className="flex-auto w-full md:w-[30%]  ">


                        {/* https://www.npmjs.com/package/react-image-gallery */}
                        <ImageGallery
                            showBullets={true}
                            showNav={false}
                            slideDuration={650}
                            items={tableGallery}
                            showFullscreenButton={false}
                            additionalClass={"customImageSlide"}
                        />
                    </div>

                    <div className="flex-auto w-full md:w-[70%] p-5  text-basecolor backdrop-blur-md bg-[#ffffff10]">

                        <div className='block space-y-8  ' >


                            <h2 className=' text-[1.5rem] font-bold '>{item.nom}</h2>

                            <div>
                                <div className='flex flex-row justify-between items-center gap-2 w-full'>
                                    <div className="p-0 inline-flex bg-slate-200 rounded-md mb-3">
                                        <ShinyButton className=' italic font-semibold text-black/50' text={item.price + " $"} />
                                    </div>

                                    <Code size="sm" color="success"><p><span className='font-light'>Type:</span> {item.famille}</p></Code>
                                </div>


                                <RatingBlog star={item.rating} />
                            </div>


                            <div className='flex flex-row gap-2 items-center '>
                                {
                                    item.instock ? <FaRegCircleCheck size={"1.2em"} className={"text-[#6ec74d]"} /> : <MdCancel size={"1.2em"} className={"text-[#FF0000]"} />
                                }
                                In stock and ready to ship
                            </div>




                            <div className='relative mb-10 flex items-center cursor-pointer gap-4'>
                                <Image
                                    alt="NextUI Fruit Image with Zoom"
                                    src={item.image_featured}
                                    loading="lazy"
                                    removeWrapper={true}
                                    className='flex  w-auto h-[150px] float-left drop-shadow-md single-image'
                                />

                                <p className='mb-4 line-clamp-5'>{item.description}</p>

                            </div>

                            <Accordion>
                                <AccordionItem key="1" aria-label="Accordion 1" title={<AccordionTitle title="Voir plus d'information" />} >
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 ">
                                        {
                                            information.map((item: typeInformation, index: number) => <AccordionContent item={item} key={index} />)
                                        }
                                    </div>
                                </AccordionItem>
                            </Accordion>


                            <ButtonAddCart addCart={() => AddItem(item, item.price)}isDisabled={item.instock} colorTxt={"text-[#1b2316] px-10 "} size={"lg"} bgColor={"bg-white"} borderColor={"border border-white"} radius={"sm"}>
                             <div className="flex flex-row items-center gap-4">
                             {"Ajouter au panier"}
                                <Badge color="default" content={ItemTotal()}  shape="circle">
                                   <FaCartPlus size={"2em"} className="text-success" />
                                </Badge>
                             </div>
                            </ButtonAddCart>


                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ItemDetailsPage;