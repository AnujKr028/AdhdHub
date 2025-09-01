"use client";

import FeaturesPage from "./features/page";
import FeaturedResourcesPage from "./featuredResources/page";
import ExploreContentTypePage from "./exploreContent/page";
import NewsAndUpdatesPage from "./newsAndUpdates/page";
import FAQS from "./faqs/page";
import Footer from "./footer/page";
import Navigation from "./navigation/page";

import { Playfair_Display } from "next/font/google";


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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

          <p className="text-gray-600 mb-6">
            Discover curated research, expert articles, podcasts, and guides
            from trusted sources to help you understand and manage ADHD. All in
            one place.
          </p>

          {/* action buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition">
              Take Test
            </button>
            <button className="px-6 py-2 rounded-full border border-gray-800 text-gray-800 hover:bg-gray-100 transition">
              Explore Resources
            </button>
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
