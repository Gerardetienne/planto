"use client"
import React from "react";
import { useState, FormEvent, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { MdLogout } from "react-icons/md";
import { usePathname } from 'next/navigation';
// interface MenuProps {
//     client:any
//     isFilled:any
// }

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pathname = usePathname();

    const menuItems = [
        "Accueil",
        "Landing",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    const navigation = [
        {
            label: "Home",
            link: "/"
        },
        {
            label: "Plants Type",
            link: "/"
        }
        ,
        {
            label: "More",
            link: "/"
        }
        ,
        {
            label: "Contact",
            link: "/"
        }
    ]


    const navigationRight = [
        {
          image: "/planto/search-interface-symbol 1.png",
            link: "/"
        },
        {
            image: "/planto/bag 1.png",
            link: "/"
        }
        ,
        {
            image: "/planto/Group 3.png",
            link: "/"
        }
        ,

    ]
    const MenuItemList = ({ navigation }: any) => {

        const menuItems = navigation.map((item: any, index: number) => (
            <NavbarItem key={item.label} isActive={pathname === item.link} >

                <Link  className="font-light text-white" href={item.link} 
                    // style={{
                    // color: pathname === item.link ? '#FFC63D' : 'black',
                    // fontWeight: pathname === item.link ? 'bold' : 'normal',
                    //  }}
                     >
                    {item.label}
                </Link>

            </NavbarItem>

        ));
        return <>{menuItems}</>;
    };


    const MenuItemListRight = ({ navigationRight }: any) => {

        const menuItems = navigationRight.map((item: any, index: number) => (
            <NavbarItem key={index} isActive={pathname === item.link}>

                <Link color="foreground" className="font-light" href={item.link} 
                     >
                    <Image
                            radius="none"
                            width={20}
                            height={20}
                            alt="NextUI Fruit Image with Zoom"
                            src={item.image}
                            loading="lazy"
                            removeWrapper={true}
                        />
                </Link>

            </NavbarItem>

        ));
        return <>{menuItems}</>;
    };

    return (
        <div className="w-full custom-container ">
            <Navbar onMenuOpenChange={setIsMenuOpen} position="sticky" className=" bg-transparent   py-6 text-white"> 
                <NavbarContent justify="start">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand className="hidden md:flex gap-2">
                        <Image
                            
                            radius="none"
                            width={40}
                            height={50}
                            alt="NextUI Fruit Image with Zoom"
                            src="/planto/plante (5).png"
                            loading="lazy"
                            removeWrapper={true}
                        />
                        <p>Planto</p>
                    </NavbarBrand>
                </NavbarContent>


                <NavbarContent justify="center">
                    <NavbarContent className="hidden sm:flex gap-6" justify="center">

                        <MenuItemList navigation={navigation} />

                    </NavbarContent>
                </NavbarContent>


                <NavbarContent justify="end">
                    <NavbarContent className="hidden sm:flex gap-8" justify="center">

                        <MenuItemListRight navigationRight={navigationRight} />

                    </NavbarContent>
                </NavbarContent>

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href={ index === 0 ? '/' : (index === 1 ? '/landing' : '#') }
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>

                <NavbarContent justify="end" className="flex md:hidden ">
                    <NavbarContent className="" justify="center">

                        <NavbarBrand>
                            <Image
                                isZoomed={true}
                                radius="sm"
                                width={80}
                                height={80}
                                alt="NextUI Fruit Image with Zoom"
                                src="/gerard-removebg-preview.png"
                                loading="lazy"
                            />
                        </NavbarBrand>
                    </NavbarContent>
                </NavbarContent>
            </Navbar>

        </div>

    );
}
