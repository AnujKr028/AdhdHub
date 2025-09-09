"use client";

import { Lato, IBM_Plex_Sans } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["700"] });
const ibmSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500"] });

const data = [
  {
    characteristic: "Concentration Issues",
    adhd: "Pervasive difficulty focusing on tasks, even in calm situations, due to a core issue of attentional regulation.",
    anxiety:
      "Situational difficulty concentrating due to an overactive focus on worries, fears, or an impending sense of doom.",
  },
  {
    characteristic: "Restlessness/Fidgeting",
    adhd: "A core symptom of hyperactivity and impulsivity, rooted in the brain's need for stimulation and inability to sit still.",
    anxiety:
      "A physical manifestation of psychological tension, nervousness, and a feeling of being on edge.",
  },
  {
    characteristic: "Cause of Avoidance",
    adhd: "Avoids tasks that require sustained mental effort or are perceived as boring.",
    anxiety:
      "Avoids specific situations or tasks that provoke anxiety or worry.",
  },
  {
    characteristic: "Emotional State",
    adhd: "Emotional dysregulation, irritability, and frustration, often due to struggles caused by ADHD symptoms (e.g., poor academic performance).",
    anxiety:
      "Excessive worry, nervousness, or fear about a range of things, which may or may not be tied to life difficulties.",
  },
];

const ComparisonTable = () => {
  return (
    <div className="space-y-8">
      <h2
        className={`${lato.className} text-2xl font-semibold text-gray-800 mb-4`}
      >
        ADHD vs Anxiety Disorder
      </h2>

      <div className="space-y-6">
        {data.map((row, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-2xl shadow-sm p-6 border border-gray-200"
          >
            <h3
              className={`${lato.className} text-lg font-semibold text-gray-700 mb-4`}
            >
              {row.characteristic}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p
                  className={`${ibmSans.className} font-medium text-gray-900 mb-2`}
                >
                  ADHD
                </p>
                <p
                  className={`${ibmSans.className} text-gray-600 leading-6 text-md`}
                >
                  {row.adhd}
                </p>
              </div>
              <div>
                <p
                  className={`${ibmSans.className} font-medium text-gray-900 mb-2`}
                >
                  Anxiety Disorder
                </p>
                <p
                  className={`${ibmSans.className} text-gray-600 leading-6 text-md`}
                >
                  {row.anxiety}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className={`${ibmSans.className} text-gray-600 text-sm leading-6`}>
        Other conditions such as learning disabilities, oppositional defiant
        disorder, and disruptive mood dysregulation disorder also frequently
        co-occur with or mimic ADHD, underscoring the critical need for a
        comprehensive assessment by a qualified healthcare professional to
        ensure an accurate diagnosis.
      </p>
    </div>
  );
};

export default ComparisonTable;
