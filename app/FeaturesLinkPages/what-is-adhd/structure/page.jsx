"use client";

import { useState, useEffect, useRef } from "react";
import content from "@/app/data/adhdContent.json";

// fonts
import { IBM_Plex_Sans, Lato } from "next/font/google";

const ibmSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

const sections = [
  { id: "modernInterpretation", title: "Modern Understanding" },
  { id: "history", title: "Historical Context" },
  { id: "definitions", title: "Defining ADHD" },
  { id: "science", title: "Science Of ADHD" },
  { id: "differentiations", title: "ADHD and other conditions" },
  { id: "facts", title: "ADHD vs Anxiety Disorder" },
  { id: "conclusion", title: "Conclusion" },
];

const ADHDPage = () => {
  const [active, setActive] = useState("history");
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      if (sectionRefs.current[s.id]) {
        observer.observe(sectionRefs.current[s.id]);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
   <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-6 md:px-14 py-10 md:py-20 gap-8">
  {/* Sidebar */}
<aside className="w-full md:w-64 md:border-r md:border-gray-400 md:pr-4 text-center md:text-left mb-8 md:mb-0 md:sticky md:top-6 md:self-start">
  <h2 className={`${lato.className} font-bold mb-4 text-gray-800`}>
    On This Page
  </h2>
  <ul
    className={`${ibmSans.className} space-y-2 text-md flex flex-col items-center md:items-start`}
  >
    {sections.map((s) => (
      <li key={s.id}>
        <a
          href={`#${s.id}`}
          className={`inline-block px-2 py-1 rounded font-light ${
            active === s.id
              ? "text-gray-900 border-l-0 md:border-l-4 border-gray-500 font-light underline md:no-underline"
              : "hover:text-gray-600"
          }`}
        >
          {s.title}
        </a>
      </li>
    ))}
  </ul>
</aside>


  {/* Content */}
  <main className="flex-1 space-y-12">
    {sections.map((s) => (
      <section
        id={s.id}
        key={s.id}
        ref={(el) => (sectionRefs.current[s.id] = el)}
      >
        <h2
          className={`${lato.className} bg-sky-700 px-3 py-4 text-3xl text-gray-100 font-semibold mb-3`}
        >
          {content[s.id].title}
        </h2>

        {/* Default text paragraphs */}
        {content[s.id].text.split("\n\n").map((para, index) => (
          <p
            key={index}
            className={`${ibmSans.className} text-md leading-7 text-gray-600 font-light mb-5`}
          >
            {para}
          </p>
        ))}

        {/* Extra rendering for facts.comparison */}
        {s.id === "facts" && content.facts.comparison && (
          <div className="mt-8">
            <div className={`${ibmSans.className} overflow-x-auto`}>
              <table className="min-w-full border border-gray-100 text-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-800 font-light">
                    <th className="border border-gray-100 px-4 py-2 text-left">
                      Characteristic
                    </th>
                    <th className="border border-gray-100 px-4 py-2 text-left">
                      ADHD
                    </th>
                    <th className="border border-gray-100 px-4 py-2 text-left">
                      Anxiety Disorder
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {content.facts.comparison.rows.map((row, i) => (
                    <tr key={i} className="odd:bg-white even:bg-gray-50">
                      <td className="border border-gray-100 px-4 py-2 font-medium text-gray-800">
                        {row.characteristic}
                      </td>
                      <td className="border border-gray-100 px-4 py-2 text-gray-700">
                        {row.adhd}
                      </td>
                      <td className="border border-gray-100 px-4 py-2  text-gray-700">
                        {row.anxiety}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p
              className={`${ibmSans.className} text-md leading-7 text-gray-600 font-light mt-4`}
            >
              {content.facts.comparison.note}
            </p>
          </div>
        )}
      </section>
    ))}
  </main>
</div>

  );
};

export default ADHDPage;
