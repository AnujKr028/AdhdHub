"use client";

import {CircleArrowRight} from "lucide-react"


// fonts
import { Playfair_Display  , IBM_Plex_Sans , Lato} from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400","500"] });
const lato = Lato({ subsets: ["latin"], weight: ["400","700"] });






const FAQS = () => {
  return (
    <div className="px-3 sm:px-16 py-12 font-sans text-gray-700  bg-white   mx-auto">
      <div className="flow-root">
        <div className="-my-4 flex flex-col divide-y divide-gray-200">
          <details className="group py-4 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden" > 
            <summary className="flex items-center justify-between gap-1.5 cursor-pointer text-gray-800 font-medium  transition-colors">
              <h2 className={`${playfair.className} text-lg font-semibold`}>
                I’m confused — I think I might have ADHD but I’m not sure. What should I do?
              </h2>
              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className={`${ibmSans.className} pt-3 text-sm text-gray-600 leading-relaxed overflow-hidden
    transition-[max-height,opacity] duration-500 ease-in-out
    max-h-0 opacity-0 group-open:max-h-[800px] group-open:opacity-100`}>
              If you suspect you may have ADHD, the first step is self-reflection and awareness. Notice whether difficulties with focus, organization, impulsivity, or restlessness consistently affect your daily life, school, or work. You can start with a self-assessment questionnaire (like the one on this site) to get an initial idea.
However, self-tests are not diagnostic. To get clarity, consider reaching out to a mental health professional (psychiatrist, psychologist, or a trained therapist). They can conduct a full evaluation, review your history, and determine whether your symptoms align with ADHD or another condition.
            </p>
          </details>

          <details className="group py-4 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 cursor-pointer text-gray-800 font-medium  transition-colors">
              <h2 className={`${playfair.className} text-lg font-semibold`}>
                When should I go for a diagnosis to a psychiatrist?
              </h2>
              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className={`${ibmSans.className} pt-3 text-sm text-gray-600 leading-relaxed overflow-hidden
    transition-[max-height,opacity] duration-500 ease-in-out
    max-h-0 opacity-0 group-open:max-h-[800px] group-open:opacity-100`}>
              You should seek a professional evaluation if your symptoms are persistent, cause significant distress, or interfere with daily functioning. Signs that it may be time to see a psychiatrist or psychologist include:

Ongoing struggles with focus, organization, or forgetfulness

Restlessness, impulsive decisions, or emotional outbursts

Difficulty completing tasks at school, work, or home

Feeling overwhelmed despite trying to manage with lifestyle changes

Early diagnosis is important because ADHD symptoms can overlap with other conditions like anxiety or depression. A psychiatrist will help clarify the cause and suggest the right treatment plan.
            </p>
          </details>

          <details className="group py-4 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 cursor-pointer text-gray-800 font-medium  transition-colors">
              <h2 className={`${playfair.className} text-lg font-semibold`}>
                Do medications help? How much time will it take to fix my problem?
              </h2>
              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className={`${ibmSans.className} pt-3 text-sm text-gray-600 leading-relaxed overflow-hidden
    transition-[max-height,opacity] duration-500 ease-in-out
    max-h-0 opacity-0 group-open:max-h-[800px] group-open:opacity-100`}>
              Medications for ADHD, such as stimulants (e.g., methylphenidate, amphetamines) or non-stimulants (e.g., atomoxetine, guanfacine), are proven to be effective for many people. They don’t “cure” ADHD, but they can significantly reduce symptoms like inattention, impulsivity, and hyperactivity.
Effects can often be noticed within hours to days after starting treatment, though finding the right medication and dosage may take a few weeks under a doctor’s supervision. ADHD is not something that can be “fixed” permanently, but with the right combination of medication, therapy, and strategies, most people manage it successfully and lead fulfilling lives.
            </p>
          </details>



             <details className="group py-4 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 cursor-pointer text-gray-800 font-medium  transition-colors">
              <h2 className={`${playfair.className} text-lg font-semibold`}>
                I feel mental fog, breakdowns, burden, and concentration lapses all day. Are these signs of ADHD?
              </h2>
              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className={`${ibmSans.className} pt-3 text-sm text-gray-600 leading-relaxed overflow-hidden
    transition-[max-height,opacity] duration-500 ease-in-out
    max-h-0 opacity-0 group-open:max-h-[800px] group-open:opacity-100`}>
             Mental fog, emotional overwhelm, and concentration problems can be symptoms of ADHD — but they are not exclusive to it. Conditions such as anxiety, depression, stress, poor sleep, or medical issues (like thyroid imbalance) can also cause similar experiences.
If these struggles are long-term, daily, and significantly affecting your quality of life, it’s worth consulting a psychiatrist or psychologist. They can evaluate whether ADHD, another mental health condition, or a combination of factors is contributing. A professional diagnosis ensures you get the right support — whether it’s ADHD treatment, therapy, lifestyle changes, or addressing other underlying causes.
            </p>
          </details>




        </div>
      </div>

      {/* Centered minimalist button */}
      <div className="flex justify-center mt-10">
       

         {/* CTA Button */}
        <button className="flex items-center mx-auto sm:mt-12 md:mt-10 lg:mt-10 px-5 py-2 border border-gray-400 text-gray-700 rounded-lg text-sm font-light transition-colors duration-200 hover:bg-gray-600 hover:border-gray-500 hover:text-white cursor-pointer">
  Read More Faqs <CircleArrowRight className="w-4 h-4 ml-2" />
</button>

      </div>
    </div>
  );
};

export default FAQS;
