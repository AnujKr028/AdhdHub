"use client";

import { Microscope , Newspaper , Podcast , BookMarked } from "lucide-react";   

import { Playfair_Display , IBM_Plex_Sans , Lato } from "next/font/google";

import { Roboto_Slab } from "next/font/google";


// fonnts

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


 const ibmSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400","500"] });
 
 const lato = Lato({ subsets: ["latin"], weight: ["400","700"] });

 const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: ["400","700"] });

 

const ExploreContentTypePage = () => {
  const cards = [
    {
      title: "Research and Studies",
      description: "Latest peer-reviewed research and clinical studies.",
      link: "https://www.abbott.com/content/dam/corp/abbott/en-us/hub/closeupportraityoungscie_642870.jpg",
      tags: "120+ Papers",
      icons: <Microscope className="w-9 h-9 text-gray-600 mb-4" />,  // ✅ Capital M
    },
    {
      title: "Expert Articles",
      description: "In-depth articles by medical professionals.",
      link: "https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/Attention+Deficit+Hyperactivity+Disorder+%28ADHD%29+PACE+Hospitals-1920w.jpg",
      tags: "200+ Articles",
      icons: <Newspaper className="w-9 h-9 text-gray-600 mb-4" />,
    },
    {
      title: "ADHD Focused Podcasts",
      description: "Listen to expert discussions and patient stories.",
      link: "https://adhduk.co.uk/wp-content/uploads/2024/01/globalplayer.jpeg",
      tags: "50+ Episodes",
      icons: <Podcast className="w-9 h-9 text-gray-600 mb-4" />,
    },
    {
      title: "Comprehensive Guides",
      description: "Step-by-step guides for patients and families.",
      link: "https://www.news-medical.net/image-handler/picture/2019/6/shutterstock_569968933.jpg",
      tags: "30+ Guides",
      icons: <BookMarked  className="w-9 h-9 text-gray-600 mb-4" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition hover:-translate-y-1 duration-200"
        >
          <img
            className="rounded-t-xl h-36 w-full object-cover"
            src={card.link}
            alt="Card Thumbnail"
          />
          <div className="p-4">
            {/*  Icons will now show */}
            {card.icons}

            <p className={` ${robotoSlab.className} inline-block mb-2 text-xs font-medium text-indigo-700 bg-indigo-100 px-2 py-1 rounded-full`}>
              {card.tags}
            </p>

            <h5 className={`${playfair.className} mb-2 text-lg font-semibold text-gray-800`}>
              {card.title}
            </h5>

            <p className={`${ibmSans.className} mb-3 text-sm text-gray-600`}>{card.description}</p>

            <a
              href="#"
              className= {` ${lato.className} inline-flex items-center text-sm font-medium text-sky-600 hover:text-indigo-800`}
            >
              Explore here →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExploreContentTypePage;
