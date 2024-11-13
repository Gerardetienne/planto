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
            label: "Accueil",
            link: "/"
        },
        {
            label: "Landing",
            link: "/landing"
        }
    ]

    const MenuItemList = ({ navigation }: any) => {

        const menuItems = navigation.map((item: any, index: number) => (
            <NavbarItem key={item.label} isActive={pathname === item.link}>

                <Link color="foreground" href={item.link} style={{
                    color: pathname === item.link ? '#FFC63D' : 'black',
                    fontWeight: pathname === item.link ? 'bold' : 'normal',
                }}>
                    {item.label}
                </Link>

            </NavbarItem>

        ));
        return <>{menuItems}</>;
    };


    return (
        <div className="py-2">
            <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand className="hidden md:flex">
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



                <NavbarContent justify="end">
                    <NavbarContent className="hidden sm:flex gap-4" justify="center">

                        <MenuItemList navigation={navigation} />

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
