"use client";

import { Brain, Lightbulb, Search } from "lucide-react";
import Link from "next/link";

// importing page 
import WhatIsAdhdPage from "../FeaturesLinkPages/what-is-adhd/page";
import Symptoms from "../FeaturesLinkPages/symtomps/page";
import Research from "../FeaturesLinkPages/latestResearch/page";

import { CircleArrowRight } from "lucide-react";

import { Playfair_Display , Roboto , Inter , IBM_Plex_Sans} from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({ subsets: ["latin"], weight: ["400","600"] });

const ibmSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400","500"] });



const FeaturesPage = () => {
  const cards = [
    {
      title: "What is ADHD?",
      description:
        "Understand the basics of Attention Deficit Hyperactivity Disorder (ADHD), its symptoms, and how it affects individuals.",
      icon: <Brain className="w-9 h-9 text-gray-600 mb-4" />,
      color: "bg-blue-50",
      link: "/FeaturesLinkPages/what-is-adhd",
    },
    {
      title: "Symptoms & Types",
      description: "Explore different types of ADHD and their symptoms.",
      icon: <Lightbulb className="w-9 h-9 text-gray-600 mb-4" />,
      color: "bg-green-50",
      link: "/FeaturesLinkPages/symtomps",
    },
    {
      title: "Latest Research",
      description: "Stay updated with the newest research and findings on ADHD.",
      icon: <Search className="w-9 h-9 text-gray-600 mb-4" />,
      color: "bg-purple-50",
      link: "/FeaturesLinkPages/latestResearch",
    },
  ];

  return (
   <main className=" bg-gradient-to-b from-gray-50 via-white to-gray-50 px-6 py-16 mt-10 mb-10">

      {/* features cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`${card.color} rounded-2xl shadow-sm p-8 flex flex-col h-full`}
          >
            <div className="flex flex-col items-start">
              {card.icon}
              <h2 className={`${playfair.className}  text-lg font-semibold text-gray-800 mb-3`}>
                {card.title}
              </h2>
              <p className={`${ibmSans.className}text-gray-800 mb-6`}>{card.description}</p>
            </div>
            <div className="mt-auto">

             <Link href={card.link}>
  <button
    className={`${ibmSans.className} px-5 py-2 rounded-full bg-gray-800 text-white 
      transition-transform transform hover:-translate-y-1 hover:scale-105 
      hover:bg-gray-900 shadow-md hover:shadow-lg active:scale-95 cursor-pointer`}
  >
    Read More <CircleArrowRight className="inline-block h-4 w-auto" />

  </button>
</Link>

            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FeaturesPage;
