"use client"

import Link from "next/link"
import { Input } from "@nextui-org/react";
import { FaRegNewspaper } from "react-icons/fa6";
import { MdEventAvailable } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { FaCommentDots } from "react-icons/fa6";
import { Spacer } from "@nextui-org/react";
import { ReactNode, useState } from "react";
import { FB, Github, Google, LinkDin, Pinterest, Twitter } from "@/components/ReseauxSocieaux/ReseauxSocieaux";
import { Image } from "@nextui-org/react";
import Subscribe from "@/components/Subscribe/Subscribe";


export const MailIcon = ({ props }: any) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
      fill="currentColor"
    />
  </svg>
);

const CopyRigth = () => {
  return (
    <div className="w-full text-[#fff] p-4 text-center gap-2 border-t-[0.5px] border-b-0 border-l-0 border-r-0 border-bgBaseColor bg-black/50 ">

      <p className='text-white font-light z-40 italic text-[12px] '>
        © 2024 Copyright: <span className='text-basesportcolor underline underline-offset-2 '>Gérard design environnement</span>
      </p>
    </div>
  )
}





interface Props {
  link: string
  icone: ReactNode
}

const Sociaux: Props[] = [
  {
    link: "www.facebook.com",
    icone: <FB />
  },
  {
    link: "#!",
    icone: <Twitter />
  },
  {
    link: "#!",
    icone: <Google />
  },
  {
    link: "#!",
    icone: <Pinterest />
  },
  {
    link: "#!",
    icone: <LinkDin />
  },
  {
    link: "#!",
    icone: <Github />
  },
]


type ServiceProps = {
  title: string
  icone: ReactNode
}




const MediaSocial: React.FC<any> = ({ Sociaux }) => {
  return (
    <div className=" flex space-x-2">
      {
        Sociaux.map((item: Props, index: number) => {
          return (
            <Link
              key={index}
              href={item.link}
              type="button"
              className="rounded-full bg-white p-1 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              {
                item.icone
              }
            </Link>

          )
        })
      }
    </div>
  )
}

const liste: string[] = [
  "Home",
  "Type's of plant's",
  "Contact",
  "Privacy"
]

const Footer = () => {

  return (
    <footer className="backdrop-blur-md bg-[#222c1d] ">

      <div className="block w-full  lg:w-[90%] mx-auto text-white">

        <div className="flex flex-col md:flex-row gap-6 py-20 ">
          <div className="flex-auto w-full md:w-[40%] items-center px-2  ">
            <div className="">
              <div className="flex min-w-0 gap-x-4 items-center ">
                <Image alt="" src={"/planto/plante (5).png"} className="size-12 flex-none" />
                <div className="min-w-0 flex-auto">
                  <p className="text-[45px] font-semibold text-[#c6c8c5]">{"Planto."}</p>
                </div>
              </div>

              <p className="text-[18px] mt-4 pl-2 pr-2 xl:pr-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua , consectetur adipiscing elit.
              </p>

              <Spacer className="my-20" />

              <MediaSocial Sociaux={Sociaux} />

            </div>
          </div>


          <div className="flex-auto w-full md:w-[20%] px-2">
            <div className=" space-y-8 ">
              <h3 className="text-white font-semibold mb-3 text-[30px]">{"Quick link's:"}</h3>

              <div className="flex flex-col gap-4">
                {
                  liste.map((item: string, index: number) => <Link href={"#"} key={index} className=" cursor-pointer text-white "  >{item}</Link>)
                }

              </div>

            </div>
          </div>


          <div className="flex-auto w-full md:w-[40%] px-2">
            <div className="">
              <h3 className="text-white font-semibold mb-3 text-[30px]">{"For Every Update."}</h3>
              <Spacer className="my-10" />
              <Subscribe />


            </div>
          </div>


        </div>
      </div>

      <CopyRigth />


    </footer>

  )
}


export default Footer