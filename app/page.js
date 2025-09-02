"use client";

import FeaturesPage from "./features/page";
import FeaturedResourcesPage from "./featuredResources/page";
import ExploreContentTypePage from "./exploreContent/page";
import NewsAndUpdatesPage from "./newsAndUpdates/page";
import FAQS from "./faqs/page";
import Footer from "./footer/page";
import Navigation from "./navigation/page";
import { BookCheck , LibraryBig} from "lucide-react";
import { Playfair_Display , Inter  } from "next/font/google";

import { Source_Sans_3 } from '@next/font/google';

import Link from "next/link";

// import test page 
import TakeTestPage from "./Take-test/page";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const sourceSans3 = Source_Sans_3({
  subsets: ['latin'], // Specify the necessary subsets
  display: 'swap',   // Control font loading behavior
  weight: ['400', '700'], // Specify desired weights if not using variable font
  // variable: '--font-source-sans-3', // Optional: for CSS variables
});

import { Merriweather, Lato } from "next/font/google";

const merriweather = Merriweather({ subsets: ["latin"], weight: ["400","700"] });
const lato = Lato({ subsets: ["latin"], weight: ["400","700"] });




import { IBM_Plex_Serif, IBM_Plex_Sans } from "next/font/google";

const ibmSerif = IBM_Plex_Serif({ subsets: ["latin"], weight: ["400","600"] });
const ibmSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400","500"] });




export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* navigation */}
      <Navigation />

      {/* home content */}
      <main className="flex-grow flex flex-col md:flex-row items-center max-w-6xl mx-auto mt-5 px-6 py-12 gap-10 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
        {/* intro left */}
        <div className="flex-shrink-0">
          <img
            src="https://images.pexels.com/photos/8378741/pexels-photo-8378741.jpeg"
            alt="adhd-picture"
            className="w-96 h-72 object-cover rounded-xl shadow-md"
          />
        </div>

        {/* intro right */}
        <div className="flex flex-col justify-center text-left max-w-xl">
          <h2
            className={`${playfair.className} text-4xl font-semibold text-gray-700 mb-4`}
          >
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-300 font-bold text-4xl">
              ADHDHUB
            </span>{" "}
            – Your Trusted ADHD Resource and Research Hub
          </h2>

          <p className={`${ ibmSans.className} text-gray-800 mb-6  `} >
            Discover curated research, expert articles, podcasts, and guides
            from trusted sources to help you understand and manage ADHD. All in
            one place.
          </p>

        
<div className="flex gap-4">
  {/* Primary button */}
  <Link
  href="/Take-test"
    className={`${ibmSans.className} flex items-center gap-2 px-6 py-2 rounded-full bg-gray-800 text-white font-medium shadow-md hover:shadow-lg hover:bg-gray-900 active:scale-95 transition cursor-pointer`}
  >
    <BookCheck className="w-5 h-5" />
    Take Test
  </Link>

  {/* Secondary button */}
  <Link
  href={"/exploreContent"}
    className={`${ibmSans.className} flex items-center gap-2 px-6 py-2 rounded-full border border-white text-gray-800 bg-white font-medium shadow-sm hover:bg-gray-50 hover:shadow-md active:scale-95 transition cursor-pointer`}
  >
    <LibraryBig className="w-5 h-5" />
    Explore Resources
  </Link>
</div>

        </div>
      </main>

      {/* features */}
      <FeaturesPage />

      {/* featured resources */}
      <div className="mt-5 mb-5">
        <h2 className="text-3xl text-center font-semibold text-gray-700">
          Featured Resources
        </h2>
        <FeaturedResourcesPage />
      </div>

      {/* explore by content */}
      <div className="mt-2 mb-10">
        <h2 className="text-3xl text-center font-semibold text-gray-700 mb-7">
          Explore by Content Type
        </h2>
        <ExploreContentTypePage />
      </div>

      {/* updates */}
      <div className="mt-10 mb-10">
        <h2 className="text-3xl text-center font-semibold text-gray-700 mb-7">
          Latest Update and News
        </h2>
        <NewsAndUpdatesPage />
      </div>

      {/* faqs */}
      <div className="mt-10 mb-10">
        <h2 className="text-3xl text-center font-semibold text-gray-700 mb-7">
          FAQs
        </h2>
        <FAQS />
      </div>

      {/* footer */}
      <div className="mt-10 mb-10">
        <h2 className="text-3xl text-center font-semibold text-gray-700 mb-7">
          Contact Us
        </h2>
        <Footer />
      </div>
    </div>
  );
}
