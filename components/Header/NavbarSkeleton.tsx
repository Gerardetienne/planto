import React from "react";
import {Navbar, Skeleton} from "@nextui-org/react";


export default function NavbarSkeleton() {


  return (
    <>
    <Navbar position="static" className=" bg-transparent text-white w-full" isBlurred={false} >
      <div className="flex flex-row gap-2 justify-between  w-full">

      <Skeleton className="w-[20%] md:w-[10%] rounded-lg bg-slate-400/70">  
      <Skeleton className="flex rounded-full w-12 h-6 bg-transparent "/>
     </Skeleton>

      <div className="w-[60%] md:w-[80%] rounded-lg">

      </div>


        <Skeleton className="w-[20%] md:w-[10%] rounded-lg bg-slate-400/70">  
          <div className="h-3 w-2/5 rounded-lg bg-transparent"></div>
        </Skeleton>
      </div>
    </Navbar>
    </>
    
  );
}
