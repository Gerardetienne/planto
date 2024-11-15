import { Button } from '@nextui-org/react'
import { NextPage } from 'next'
import { ReactNode } from 'react';


type ButtonSize = 
    | "md" | "sm" | "lg"

interface Props {
    colorTxt?: string;
    bgColor?:string 
    children:ReactNode | string
    borderColor?:string 
    hoverEffect?:string 
    size?:ButtonSize,
    radius?:ButtonSize
}

const ButtonCustom: NextPage<Props> = ({colorTxt,bgColor,children,borderColor,size, hoverEffect,radius }:Props) => {
  return (
  <Button size={size ? size : "md"} 
   
  radius={radius ? radius : "none"} className={`${colorTxt ? colorTxt : "text-black"}  
   ${bgColor ? bgColor : 'bg-bgBaseColor'}
   ${borderColor ? borderColor : ' border-2 border-transparent' }
   ${hoverEffect ? hoverEffect : 'hover:bg-white hover:z-50'} my-custome btn uppercase font-semibold z-50  `} fullWidth={false} >


  {children}
   
  
  </Button>
  )
}

export default ButtonCustom