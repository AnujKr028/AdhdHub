"use client";
import { useState } from "react";

import { Poppins , IBM_Plex_Sans } from "next/font/google";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});



const QuizSection = () => {
  const questions = [
    "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
    "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
    "How often do you have problems remembering appointments or obligations?",
    "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
    "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
    "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
    "How often do you make careless mistakes when you have to work on a boring or difficult project?",
    "How often do you have difficulty keeping your attention when you are doing boring or repetitive work?",
    "How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?",
    "How often do you misplace or have difficulty finding things at home or at work?",
    "How often are you distracted by activity or noise around you?",
    "How often do you leave your seat in meetings or other situations in which you are expected to remain seated?",
    "How often do you feel restless or fidgety?",
    "How often do you have difficulty unwinding and relaxing when you have time to yourself?",
    "How often do you find yourself talking too much when you are in social situations?",
    "When you’re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?",
    "How often do you have difficulty waiting your turn in situations when turn taking is required?",
    "How often do you interrupt others when they are busy?",
    "How often do you have trouble sustaining attention in tasks or activities, such as lectures, conversations, or reading?",
    "How often do you blurt out answers before questions have been completed?",
  ];

  const options = ["Never", "Rarely", "Sometimes", "Often", "Very Often"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({ type: "", total: 0, inatt: 0, hyper: 0 });

  const handleAnswerChange = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (answers[currentIndex] !== null) {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        // Calculate result
        const responseScores = answers.map((ans, idx) => {
          const qNum = idx + 1;
          const specialQuestions = [1, 2, 3, 9, 12, 16, 18, 19];
          const isSpecial = specialQuestions.includes(qNum);
          const threshold = isSpecial ? "Sometimes" : "Often";
          const order = ["Never", "Rarely", "Sometimes", "Often", "Very Often"];
          if (order.indexOf(ans) >= order.indexOf(threshold)) {
            return 1;
          }
          return 0;
        });

        const inattentionIndices = [0, 1, 2, 3, 6, 7, 8, 9, 10, 18]; // Questions 1,2,3,4,7,8,9,10,11,19 (0-based)
        const hyperIndices = [4, 5, 11, 12, 13, 14, 15, 16, 17, 19]; // Questions 5,6,12,13,14,15,16,17,18,20 (0-based)

        const inattScore = inattentionIndices.reduce((sum, i) => sum + responseScores[i], 0);
        const hyperScore = hyperIndices.reduce((sum, i) => sum + responseScores[i], 0);
        const totalScore = inattScore + hyperScore;

        let adhdType = "";
        if (inattScore >= 5 && hyperScore >= 5) {
          adhdType = "Combined Type";
        } else if (inattScore >= 5) {
          adhdType = "Predominantly Inattentive Type";
        } else if (hyperScore >= 5) {
          adhdType = "Predominantly Hyperactive/Impulsive Type";
        } else {
          adhdType = "Symptoms do not meet the threshold for an ADHD diagnosis";
        }

        setResult({ type: adhdType, total: totalScore, inatt: inattScore, hyper: hyperScore });
        setShowResult(true);
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className={`${poppins.className} text-3xl font-bold text-center text-gray-900 mb-6`}>
          ADHD Self-Diagnosis Test
        </h2>
        <p className={`${ibmPlexSans.className} text-center text-gray-600 mb-8 text-md`}>
          Answer the following questions honestly. This test is not a formal
          diagnosis but may help you understand your symptoms better.
        </p>
        {!showResult && (
          <>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
              <div
                className="bg-gray-900 h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {currentIndex + 1}. {questions[currentIndex]}
              </h3>
              <div className="lg:space-y-2 space-y-3">
                {options.map((option, optIndex) => (
                  <label
                    key={optIndex}
                    className="flex items-center lg:space-x-3 space-x-2   lg:py-5 py-4 lg:px-3 px-3  border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100"
                  >
                    <input
                      type="radio"
                      name={`q${currentIndex + 1}`}
                      value={option}
                      checked={answers[currentIndex] === option}
                      onChange={(e) => handleAnswerChange(e.target.value)}
                      className="w-4 h-4 text-gray-900"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-6">
              {currentIndex > 0 && (
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                >
                  Previous
                </button>
              )}
              <button
                onClick={handleNext}
                disabled={answers[currentIndex] === null}
                className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentIndex < questions.length - 1 ? "Next" : "Submit"}
              </button>
            </div>
          </>
        )}
        {showResult && (
          <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Your Results</h3>
            <p className="text-gray-700">Total symptoms endorsed: {result.total} out of 20</p>
            <p className="text-gray-700">Inattention: {result.inatt} / 10</p>
            <p className="text-gray-700">Hyperactivity/Impulsivity: {result.hyper} / 10</p>
            <p className="text-gray-700">Likely ADHD Type: {result.type}</p>
<div className="mt-4 p-4 rounded-xl bg-red-50 border border-red-200 text-gray-900 text-sm font-medium">
  ⚠️ Disclaimer: This is a self-assessment tool based on the WHO Adult ADHD
  Self-Report Scale and is not a substitute for professional diagnosis. Please
  consult a healthcare professional for accurate assessment.
</div>

          </div>
        )}
      </div>
    </section>
  );
};

export default QuizSection;