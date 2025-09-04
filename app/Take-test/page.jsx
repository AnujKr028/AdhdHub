"use client";

import NavbarComponent from "./navbar/page";
import QuizSection from "./quiz/page";
import { Poppins, IBM_Plex_Sans , Montserrat } from "next/font/google";
import Link from "next/link";
import Footer from "../footer/page";
import FooterTest from "./footer/page";
// Import fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

const ibmSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-sans",
});



const TakeTest = () => {
  return (
    <section className={`${ibmSans.variable} ${poppins.variable} font-sans`}>
      <NavbarComponent />

      {/* Hero Section */}
      <div className="w-full flex flex-col lg:py-16 py-8 bg-indigo-900 items-center justify-center text-center text-white">
        <p className={`text-5xl font-bold lg:pb-5 pb-6 ${poppins.className} `}>
          ADHD Self Assessment
        </p>
        <p className={`text-2xl font-semibold lg:pb-5 pb-8 ${poppins.className} `}>
          Are You Wondering If You Have ADHD? This Test May Help*
        </p>
        <Link href={"#quiz"}>
        <button className="bg-pink-500 hover:bg-pink-600 transition-colors duration-300 text-lg px-6 py-3 rounded-xl shadow-lg font-semibold cursor-pointer">
          Go to Test
        </button>
        </Link>
      </div>

      {/* Intro Section */}
      <main
        className={`lg:px-20 px-4 py-8 lg:space-y-8 space-y-6 text-lg leading-relaxed text-gray-700 ${ibmSans.className}`}
      >
        <p>
          Many adults live with undiagnosed ADHD, often dismissing their
          struggles as procrastination, lack of discipline, or personality
          flaws. The stigma surrounding ADHD leads some to avoid seeking help,
          while others may even doubt that the condition exists at all.
        </p>
        <p>
          Decades of research confirm that ADHD is real and can significantly
          affect relationships, careers, and overall well-being if left
          unrecognized. Awareness and a proper evaluation are far better than
          silently enduring challenges.
        </p>
        <p>
          Once identified, ADHD can be managed in many ways—through therapy,
          lifestyle changes, or medical treatment. Every individual’s experience
          is unique, and finding the right approach requires careful assessment.
          Taking this self-assessment is a first step toward clarity and support.
        </p>
      </main>

      {/* Next Steps */}
      <h3
        className={`lg:px-20 px-4 text-3xl pt-9 pb-3 font-bold ${poppins.className} text-gray-800`}
      >
        ADHD Test for Adults: Next Steps
      </h3>

      <main
        className={`lg:px-20 px-4 lg:space-y-6 space-y-6 text-lg leading-relaxed text-gray-700 ${ibmSans.className}`}
      >
        <p>
          This online test is quick and straightforward. It is based on a
          self-screening tool developed by the World Health Organization* to
          help you identify whether you may have symptoms of adult ADHD.
        </p>
        <p>
          The Adult Self-Report Scale (ASRS) Screener is designed to highlight
          common patterns of adult ADHD. Completing the test is simple—just
          follow these steps:
        </p>
        <p>The test usually takes about 3–10 minutes to finish.</p>

        <ol className="list-decimal list-inside space-y-4">
          <li>
            Carefully read each question and select the answer that best
            describes your experiences.
          </li>
          <li>
            After completing all the questions, you’ll be asked to enter your
            name and email address.
          </li>
          <li>
            Your quiz results will be sent to you immediately. Based on your
            answers, possible next steps will be suggested.
          </li>
        </ol>
      </main>

      {/* Quiz Section */}
      <div id="quiz">
        <QuizSection  />
      </div>
      

      {/* Who Can Benefit */}
      <h3
        className={`lg:px-20 px-3 text-3xl pt-9  font-bold ${poppins.className} text-gray-800`}
      >
        Who Can Benefit From This ADHD Test
      </h3>
      <main
        className={`lg:px-20 px-4 py-5 lg:space-y-8 space-y-6 text-lg leading-relaxed text-gray-700 ${ibmSans.className}`}
      >
        <p>
          This ADHD self-assessment is for adults 18 and older who haven’t
          received a formal diagnosis. It’s open to anyone—regardless of
          background, gender identity, or nationality—who wants clearer insight
          into whether ADHD may be part of their daily struggles.
        </p>
        <p>
          Adult ADHD is more common than many realize, yet often goes unnoticed.
          Around 4.4% of U.S. adults are affected, but countless others continue
          to face its challenges without realizing ADHD is the underlying cause.
        </p>
      </main>

      {/* Reliability */}
      <h3
        className={`lg:px-20 px-4 text-3xl pt-9  font-bold ${poppins.className} text-gray-800 `}
      >
        How Reliable Is This ADHD Test?
      </h3>
      <main
        className={`lg:px-20 px-4 py-5 lg:space-y-8 space-y-6 text-lg leading-relaxed text-gray-700 ${ibmSans.className}`}
      >
        <p>
          This ADHD quiz is a starting point—not a diagnosis. It serves as a
          checklist of common ADHD symptoms in adults but cannot confirm or rule
          out the condition alone. A proper diagnosis cannot be made through an
          online test or quick doctor’s visit.
        </p>
        <p>
          Because other conditions can mimic ADHD, it’s important to work with a
          qualified professional who can evaluate your full medical and
          psychiatric history. A thorough assessment involves detailed
          interviews, screenings, and ruling out other possible conditions.
        </p>
      </main>


      <FooterTest/>
    </section>
  );
};

export default TakeTest;
