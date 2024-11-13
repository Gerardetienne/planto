"use client"

import { FaSquareGitlab , FaLinkedin, FaFacebook  } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";


interface HeaderLink {
    icon: React.ReactNode;
    iconHover: React.ReactNode;
    link: string;
    identifiant: string;
    color: string;
  }

  const SwitchIcone = ({ dataItem }: any) => {
    const [over, setOver] = useState<boolean>(false);
    var value: React.ReactNode;

    if (over) {
      value = dataItem.iconHover;
    } else {
      value = dataItem.icon;
    }
    return (
      <div
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      >
      {value}
      </div>
    );
  };

const SocialLists = () => {

    const Icone: HeaderLink[] = [
        {
          icon: <FaSquareGitlab size={"2em"} className="text-bgBaseColor " />,
          iconHover: <FaSquareGitlab size={"2em"} color={'rgba(226,67,40,255)'}/>,
          link: 'https://gitlab.com/Dev-gerard',
          identifiant: 'git',
          color: 'secondary',
        },
        {
          icon: <FaLinkedin size={"2em"} className="text-bgBaseColor" />,
          iconHover: <FaLinkedin size={"2em"} color={'#0e76a8'} />,
          link: 'https://www.linkedin.com/in/gerard-etienne-rafanomezantsoa-35a571213',
          identifiant: 'Linkdin',
          color: 'secondary',
        },
        {
          icon: <FaFacebook size={"2em"} className="text-bgBaseColor" />,
          iconHover: <FaFacebook size={"2em"} color={'#fff'} />,
          link: 'https://web.facebook.com/gerardetienne.rafanomezantsoa/',
          identifiant: 'facebook',
          color: 'secondary',
        },
      ];
    
    
      return (
        <div className='flex flex-row justify-start [&>*:last-child]:gap-0 gap-4 z-50 '>
        {
          Icone.map((item:any, index:number)=>{
            return (
              <Link href={item.link} target='_blanck' key={index} id={item.identifiant}> 
                    <SwitchIcone dataItem={item} />
               </Link>
            )
          })
        }
        </div>
    )


}


export default  SocialLists