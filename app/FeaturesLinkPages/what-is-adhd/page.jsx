"use client" ;
import NavbarComponent from "@/app/Take-test/navbar/page";
import ADHDPage from "./structure/page";

import { IBM_Plex_Sans , Lato} from "next/font/google";

const ibmSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400","500"] });
const lato = Lato({ subsets: ["latin"], weight: ["400","700"] });


const WhatIsAdhdPage = () => { 
    return ( 

        <section>
           <NavbarComponent/>
 
        <h1 className="px-20 pt-20 text-5xl font-bold text-gray-800">What Is ADHD ? </h1>
        <h2 className={`${ibmSans.className} px-21 py-2 text-md  text-gray-700`}>Are you confused with your brain ? </h2>

        <ADHDPage/>
        </section>
        
        
    )
}

export default WhatIsAdhdPage;