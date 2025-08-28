"use client"

const FeaturedResourcesPage = () => {
  return (
   <section className="text-gray-600 body-font bg-gradient-to-r from-green-20 via-green-50 to-green-20 mt-3">

      <div className="container px-5 py-24 mx-auto">

        {/* Card 1 - Self Assessment */}
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRrDTYFsx1jNWpySea5Zb9k1NdoOn0JyCimA&s" 
              alt="ADHD Self Assessment"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              ADHD Self-Assessment: Understand Your Symptoms
            </h2>
            <p className="leading-relaxed text-base">
              A quick, research-based self-check to reflect on common ADHD symptoms in adults and children.
            </p>
            <a
            href="https://www.psychiatry.org/patients-families/adhd/what-is-adhd"
            target="_blank"
            className="mt-3 text-sky-700   inline-flex items-center cursor-pointer hover:text-sky-900">
              Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Card 2 - Daily Life */}
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              How ADHD Shows Up in Daily Life
            </h2>
            <p className="leading-relaxed text-base">
              Explore how ADHD affects focus, memory, emotions, work, and relationships differently in adults and children.
            </p>
            <a 
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11151783/#s6"
            target="_blank"
            className="mt-3 text-sky-700  inline-flex items-center cursor-pointer hover:text-sky-900 ">
              Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:ml-10 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden order-first sm:order-none">
            <img 
              src="https://media.istockphoto.com/id/1365960834/vector/human-head-with-many-thoughts-task-and-ideas-child-or-adult-with-adhd-syndrome-attention.jpg?s=612x612&w=0&k=20&c=9hvZeQR_D4ZtbYjqnUytFSSDtLY4yt1cOc4LgfrqCvk=" 
              alt="ADHD in Daily Life"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Card 3 - Science & Research */}
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden">
            <img 
              src="https://media.springernature.com/full/springer-static/image/art%3A10.1203%2FPDR.0b013e318212b40f/MediaObjects/41390_2011_Article_BFpr9201196_Fig1_HTML.jpg" 
              alt="ADHD Science"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              The Science of ADHD: Brain & Research Insights
            </h2>
            <p className="leading-relaxed text-base">
              Understand what brain regions are involved in ADHD, how dopamine works, and the latest research findings.
            </p>
            <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5391018/"
            target="_blank" 
            className="mt-3 text-sky-700  inline-flex items-center cursor-pointer  hover:text-sky-900">
              Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* CTA Button */}
        <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Explore More
        </button>
      </div>
    </section>
  )
}

export default FeaturedResourcesPage
