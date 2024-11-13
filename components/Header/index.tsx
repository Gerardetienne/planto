"use client"
import React, {useEffect, useState} from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { useTabContext } from "@/app/contexts/TabContext";
import { Image } from "@nextui-org/react";
import { BiSolidContact } from "react-icons/bi";


export default function Navbars() {
  const {  setActiveTab } = useTabContext();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  // const handleAncre = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //   event.preventDefault();
  //   const targetId = event.currentTarget.getAttribute('href')?.substring(1);
  //   const targetElement = document.getElementById(targetId!);

  //   if (targetElement) {
  //     targetElement.scrollIntoView({ behavior: 'smooth' });
  //   } 
  // };


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[] );

  const menuItems = [
    {
      title: "A propos",
      ancre: "#about",
      tab: "about"
    },
    {
      title: "Techno",
      ancre: "#skills",
      tab: "skills"
    },
    {
      title: "Exps",
      ancre: "#experience",
      tab: "experience"
    },
    {
      title: "Grade",
      ancre: "#grade",
      tab: "grade"
    },
    {
      title: "Projets",
      ancre: "#projets",
      tab: "projets"
    },
    {
      title: "Contact",
      ancre: "#contact",
      tab: "contact"
    },
  ];


  return (
  <>
    <Navbar className={`${isScrolled ? "backdrop-blur-md bg-white/10" : "bg-transparent"} text-white w-full`}
       isBlurred={true}  isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>

      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu" } />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image src="/gerard/gerardlogo-removebg.png" alt="Gerard" height={100} width={100} removeWrapper={true} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Image src="/gerard/gerardlogo-removebg.png" alt="Gerard" height={100} width={100} removeWrapper={true} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex flex-row gap-2 items-center hover:text-basePortfolio border-0 hover:border-b-2 hover:border-[#22D3EE] py-1 text-[14px] ">
          <BiSolidContact />
          <p className=" cursor-pointer " onClick={()=> setActiveTab('contact')}>
            Contact
          </p>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item:any, index:number) => (

        <NavbarMenuItem key={`${item}-${index}`} className=" cursor-pointer " >
          <Link href={item.ancre} className="w-full" size="lg" onClick={() => {setActiveTab(item.tab)}}>
          {item.title}
          </Link>
        </NavbarMenuItem>
        ))
        }
      </NavbarMenu>

    </Navbar>
  </>

  );
}
