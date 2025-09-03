"use client"
import { CircleArrowRight } from "lucide-react";
import { Playfair_Display, IBM_Plex_Sans, Lato } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

const FeaturedResourcesPage = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-r from-green-20 via-green-50 to-green-20 mt-3">
      <div className="container px-5 py-24 mx-auto">
        
        {/* Card 1 - Self Assessment */}
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          {/* Circle Image */}
          <div className="sm:w-28 sm:h-28 w-20 h-20 sm:mr-10 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRrDTYFsx1jNWpySea5Zb9k1NdoOn0JyCimA&s"
              alt="ADHD Self Assessment"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className={`${playfair.className} text-gray-800 text-lg title-font font-medium mb-2`}>
              ADHD Self-Assessment: Understand Your Symptoms
            </h2>
            <p className={`${ibmSans.className} leading-relaxed text-base`}>
              A quick, research-based self-check to reflect on common ADHD symptoms in adults and children.
            </p>

            {/* Tags */}
            <span className={`${lato.className}`}>
              <p className="inline-block mt-5 text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                Source: American Psychiatric Association
              </p>
              <p className="inline-block mt-5 ml-2 text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                ADHD
              </p>
              <p className="inline-block mt-5 ml-2 text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                Mental Health
              </p>
            </span>

            {/* Learn More button */}
            <a
              href="https://www.psychiatry.org/patients-families/adhd/what-is-adhd"
              target="_blank"
              rel="noopener noreferrer"
              className={`${ibmSans.className} block text-sky-700 hover:text-sky-900 pt-2`}
            >
              <span className="inline-flex items-center px-1 text-md">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Card 2 - Daily Life */}
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className={`${playfair.className} text-gray-800 text-lg title-font font-medium mb-2`}>
              How ADHD Shows Up in Daily Life
            </h2>
            <p className={`${ibmSans.className} leading-relaxed text-base`}>
              Explore how ADHD affects focus, memory, emotions, work, and relationships differently in adults and children.
            </p>

            <span className={`${lato.className}`}>
              <p className="inline-block mt-5 text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full hover:bg-green-200">
                Source: National Library of Medicine (NCFBI)
              </p>
              <p className="inline-block mt-5 ml-2 text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                Functioning
              </p>
              <p className="inline-block mt-5 ml-2 text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                Daily Life
              </p>
            </span>

            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11151783/#s6"
              target="_blank"
              className={`${ibmSans.className} block text-sky-700 hover:text-sky-900 pt-2`}
            >
              <span className="inline-flex items-center px-1 text-md">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </span>
            </a>
          </div>

          {/* Circle Image */}
          <div className="sm:w-28 sm:h-28 w-20 h-20 sm:ml-10 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden order-first sm:order-none">
            <img
              src="https://media.istockphoto.com/id/1365960834/vector/human-head-with-many-thoughts-task-and-ideas-child-or-adult-with-adhd-syndrome-attention.jpg?s=612x612&w=0&k=20&c=9hvZeQR_D4ZtbYjqnUytFSSDtLY4yt1cOc4LgfrqCvk="
              alt="ADHD in Daily Life"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Card 3 - Science & Research */}
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          {/* Circle Image */}
          <div className="sm:w-28 sm:h-28 w-20 h-20 sm:mr-10 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden">
            <img
              src="https://media.springernature.com/full/springer-static/image/art%3A10.1203%2FPDR.0b013e318212b40f/MediaObjects/41390_2011_Article_BFpr9201196_Fig1_HTML.jpg"
              alt="ADHD Science"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className={`${playfair.className} text-gray-800 text-lg title-font font-medium mb-2`}>
              The Science of ADHD: Brain & Research Insights
            </h2>
            <p className={`${ibmSans.className} leading-relaxed text-base`}>
              Understand what brain regions are involved in ADHD, how dopamine works, and the latest research findings.
            </p>

            <span className={`${lato.className}`}>
              <p className="inline-block mt-5 text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full hover:bg-green-200">
                Source: National Library of Medicine (NCFBI)
              </p>
              <p className="inline-block mt-5 ml-2 text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                Brain Anatomy
              </p>
              <p className="inline-block mt-5 ml-2 text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                MRI Research
              </p>
            </span>

            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5391018/"
              target="_blank"
              className={`${ibmSans.className} block text-sky-700 hover:text-sky-900 pt-2`}
            >
              <span className="inline-flex items-center px-1 text-md">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* CTA Button */}
        <button className="flex items-center mx-auto mt-20 px-5 py-2 border border-gray-400 text-gray-700 rounded-lg text-sm font-light transition-colors duration-200 hover:bg-gray-600 hover:border-gray-500 hover:text-white cursor-pointer">
          Explore More <CircleArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </section>
  );
};

export default FeaturedResourcesPage;
