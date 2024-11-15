import { NextPage } from 'next'
import { ReactNode } from 'react'

interface Props { 
  espaceY?:string
  txtSize?:string
  children:ReactNode | string
}

const OurTrendy: NextPage<Props> = ({ espaceY,txtSize,children}) => {
    return (
        <div className={`${espaceY ? espaceY : "py-30"} flex flex-row justify-center items-center `}>
            <div className="title-container">
                <h2 className={`${txtSize ? txtSize : 'text-[55px]'} title relative font-semibold text-white`}>

                {children}
                </h2>
            </div>
        </div>
    )


}

export default OurTrendy