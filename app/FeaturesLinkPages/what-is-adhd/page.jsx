"use client" ;
import NavbarComponent from "@/app/Take-test/navbar/page";
import ADHDPage from "./structure/page";

import { IBM_Plex_Sans , Lato} from "next/font/google";

const ibmSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400","500"] });
const lato = Lato({ subsets: ["latin"], weight: ["400","700"] });

import FooterTest from "@/app/Take-test/footer/page";

const WhatIsAdhdPage = () => { 
    return ( 

        <section>
           <NavbarComponent/>
 
        <h1 className="px-20 pt-20 lg:text-6xl text-5xl lg:text-left text-center font-bold text-gray-800">What Is <span className="text-gray-800m md:bg-gradient-to-r from-gray-100 to-gray-200 md:px-2  md:py-1 rounded">
  ADHD ?
</span> </h1>
        <h2 className={`${ibmSans.className} px-21 py-2 lg:text-lg text-md lg:text-left text-center  text-gray-700`}>Are you confused with your brain ? </h2>

        <div className="pb-3"> 
            <img
            className="px-20 pt-2 md:w-full md:h-78"
            src="https://www.cdc.gov/adhd/media/images/ADHD-Blocks.png"/>
        </div>

        
        <ADHDPage/>

        <FooterTest/>
        </section>
        
        
    )
}

export default WhatIsAdhdPage;