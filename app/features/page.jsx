"use client";

import { Brain, Lightbulb, Search } from "lucide-react";
import Link from "next/link";

const FeaturesPage = () => {
  const cards = [
    {
      title: "What is ADHD?",
      description:
        "Understand the basics of Attention Deficit Hyperactivity Disorder (ADHD), its symptoms, and how it affects individuals.",
      icon: <Brain className="w-9 h-9 text-gray-600 mb-4" />,
      color: "bg-blue-50",
      link: "/features/adhd",
    },
    {
      title: "Symptoms & Types",
      description: "Explore different types of ADHD and their symptoms.",
      icon: <Lightbulb className="w-9 h-9 text-gray-600 mb-4" />,
      color: "bg-green-50",
      link: "/features/symptoms",
    },
    {
      title: "Latest Research",
      description: "Stay updated with the newest research and findings on ADHD.",
      icon: <Search className="w-9 h-9 text-gray-600 mb-4" />,
      color: "bg-purple-50",
      link: "/features/research",
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
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                {card.title}
              </h2>
              <p className="text-gray-600 mb-6">{card.description}</p>
            </div>
            <div className="mt-auto">
              <Link href={card.link}>
                <button className="px-5 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition">
                  Read More
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
