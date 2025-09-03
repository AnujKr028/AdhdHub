"use client";

import NavbarComponent from "./navbar/page";

const TakeTest = () => {
  return (
    <section className="py-8">
      <NavbarComponent />

      <div className="w-full flex flex-col lg:py-16 py-5 text-white bg-indigo-900 items-center justify-center ">
        <p className="text-5xl font-bold lg:pb-5 pb-10 lg:text-center text-center">ADHD Self Assessment</p>
        <p className="text-2xl font-bold lg:pb-5 pb-10 lg:bg-center text-center">
          Are You Wondering If You Have ADHD? This Test May Help*
        </p>
        <button className="bg-pink-400 text-lg px-5 py-2 rounded-md shadow-lg font-light">
          Go to test
        </button>
      </div>

      <main className="lg:px-20 px-4 py-5 lg:space-y-8 space-y-8 text-lg leading-relaxed">
        <p>
          Many adults live with undiagnosed ADHD, often dismissing their
          struggles as simple procrastination, lack of discipline, or personality
          flaws. The stigma surrounding ADHD leads some to avoid seeking help,
          while others may even doubt that the condition exists at all.
        </p>

        <p>
          Yet, decades of clinical studies clearly show that ADHD is a real
          condition that can significantly impact relationships, careers, and
          overall well-being if left unaddressed. Becoming aware of your symptoms
          and considering a proper evaluation is far better than silently
          enduring daily challenges.
        </p>

        <p>
          Once identified, ADHD can be managed in many different ways—ranging
          from therapy and lifestyle adjustments to medical treatments. Because
          every individual’s experience is unique, the right approach requires
          careful assessment. Taking this adult ADHD self-assessment can be a
          valuable first step toward clarity and support.
        </p>
      </main>


        <h3 className="lg:px-20 px-4 lg:w-full  text-3xl pt-9 pb-4" >ADHD Test for Adults: Next Steps</h3>

    <main className="lg:px-20 px-4 lg:space-y-6 space-y-8 text-lg leading-relaxed">
        
  <p>
    This online test is quick and straightforward. It is based on a
    self-screening tool developed by the World Health Organization* to help you
    identify whether you may have symptoms of adult ADHD.
  </p>

  <p>
    The Adult Self-Report Scale (ASRS) Screener is designed to highlight common
    patterns of adult ADHD. Completing the test is simple—just follow these
    three steps:
  </p>

  <p>The test usually takes about 3–10 minutes to finish.</p>

  <ol className="list-decimal list-inside space-y-4">
    <li>
      Carefully read each question and select the answer that best describes
      your experiences. Choose your response by clicking on the option provided.
    </li>
    <li>
      After completing all the questions, you’ll be asked to enter your name and
      email address.
    </li>
    <li>
      Your quiz results will be sent to you immediately. Based on your answers,
      we may suggest possible next steps—but whether you wish to pursue them is
      completely up to you.
    </li>
  </ol>
</main>


    </section>
  );
};

export default TakeTest;
