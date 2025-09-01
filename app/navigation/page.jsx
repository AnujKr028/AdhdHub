"use client";
import  {useState} from "react"; 
import { Menu, X } from "lucide-react";

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
      <div className="hidden md:flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Home
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Research
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Symptoms
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Resources
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
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
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center space-y-4 py-6 z-50">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Research
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Symptoms
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Resources
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            About
          </a>
        </div>
      )}


    </nav>
  );
};

export default Navigation;
