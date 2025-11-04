import Image from 'next/image';
import FussballIllustration from "../public/Fussball.svg";
import Hero from "../public/Hero.png";
import LogoRettungsanker from "../public/LogoNeu.png";
import Cocktail from "../public/Cocktailglas.svg"
import Albers from "../public/albers.jpg";
import AstraBier from "../public/astra-remove.png";


export default function Bento2() {
  return (
    
  <div className="grid grid-cols-6 grid-rows-6 gap-4">
  <div className="bg-gray-200 col-span-4 row-span-2">
     <h1 className="text-center text-5xl headingA text-yellow-500 lg:text-9xl">Gastlichkeit ist unsere Philosophie</h1>
      
  </div>
  <div className="bg-gray-200 col-span-2 row-span-2">
    <div className="mt-[3vh] flex flex-col items-center space-x-4 justify-center h-[70vh] w-[]">
          <Image src={Hero} alt="Hero Bar Vollperspektive" width={1920} height={1080} className="border border-white
           relative top-0 left-0 w-full h-full object-cover pointer-events-none opacity-50"/>
           <h1 className="mt-[12vh] text-6xl text-center headingA text-red-700 lg:text-7xl">Angebot und Service</h1>
        </div>
  </div>
  <div className="bg-gray-200 col-span-2 row-span-4"></div>
  <div className="bg-gray-200 row-span-4"></div>
  <div className="bg-gray-200 col-span-2 row-span-4"></div>
  <div className="bg-gray-200 row-span-4"></div>
</div>
  
  );
}