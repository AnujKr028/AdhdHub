"use client";
import  {useState} from "react"; 
import { Menu, X } from "lucide-react";







import {Lato , IBM_Plex_Sans , Roboto_Slab} from  "next/font/google" ;

const lato = Lato({ subsets: ["latin"], weight: ["400","700"] });
const ibmSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400","500"] });
 const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: ["400","700"] });

 

const Navigation = () => {


  const [isMenuOpen,  setIsMenuOpen] = useState(false) ;


  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-sm bg-white">
      {/* left : logo */}
      <div className="flex items-center">
        <img
          src="https://i.postimg.cc/43LNRk2L/copped-logo.png"
          alt="logo"
          className="h-12 md:h-16 w-auto object-contain"  
        />
      </div>

      {/* right: nav links  - hide on small screens*/  }
      <div className={`${robotoSlab.className} hidden md:flex space-x-6`}>
  <a href="#" className="relative text-gray-700 hover:text-gray-900 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full">
    Home
  </a>
  <a href="/FeaturesLinkPages/symtomps" className="relative text-gray-700 hover:text-gray-900 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full">
    Symptoms
  </a>
  <a href="#exploreContent" className="relative text-gray-700 hover:text-gray-900 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full">
    Resources
  </a>
  <a href="#footer" className="relative text-gray-700 hover:text-gray-900 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full">
    Contact us
  </a>
  <a href="#footer" className="relative text-gray-700 hover:text-gray-900 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full">
    About
  </a>
</div>




      {/* menu {shown on smalls screens} */}
      <div className="md:hidden"> 
        <button className="md:hidden"
        
        onClick={ () => setIsMenuOpen(!isMenuOpen)}> 
          {isMenuOpen ? <X size = {28}/> : <Menu size = {28} />}
        </button>
      </div> 


 {/* mobile menu dropdown */}
      {isMenuOpen && (
        <div className= {` ${robotoSlab.className} absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center space-y-4 py-6 z-50`}>
         <a href="#" className="text-gray-700 hover:text-gray-900">
          Home
        </a>
        <a href="/FeaturesLinkPages/symtomps" className="text-gray-700 hover:text-gray-900">
          Symptoms
        </a>
        <a href="/exploreContent" className="text-gray-700 hover:text-gray-900">
          Resources
        </a>
        <a href="/footer" className="text-gray-700 hover:text-gray-900">
          Contact us
        </a>
        <a href="/footer" className="text-gray-700 hover:text-gray-900">
          About
        </a>
        </div>
      )}


    </nav>
  );
};

export default Navigation;
