"use client";


// fonts
import { Playfair_Display  , IBM_Plex_Sans , Lato} from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400","500"] });
const lato = Lato({ subsets: ["latin"], weight: ["400","700"] });



const NewsAndUpdatesPage = () => {
  const news = [
    {
      source: "Stanford Medicine",
      title: "ADHD drugs are being prescribed too quickly to preschoolers",
      date: "29 August 2025",
      description:
        "A major Stanford Medicine-led study warns that ADHD medication is being prescribed to preschoolers too quickly, often before behavioral therapy is attempted, despite guidelines from the American Academy of Pediatrics urging behavioral approaches first for young children. Stimulant drugs can lead to more side effects in very young children, and six months of behavior therapy before starting medication is recommended.",
      image:
        "https://med.stanford.edu/news/all-news/2025/08/adhd-preschoolers/_jcr_content/_cq_featuredimage.coreimg.80.1280.jpeg/1756157448112/preschool-kids.jpeg",
      link: "https://med.stanford.edu/news/all-news/2025/08/adhd-preschoolers.html",
      
    },
    {
      source: "Uc Davis Health",
      title: "Autism, ADHD or both? Research offers new insights for clinicians",
      date: "18 August 2025",
      description:
        "A large international study led by Southampton University found ADHD medication, especially stimulant drugs, is linked to a reduced risk of suicide, drug abuse, and criminal behavior in people with ADHD. This aligns with current guidelines recommending stimulants as first-line treatment.",
      image:
        "https://health.ucdavis.edu/media-resources/contenthub/health-news/2025/08/marquee/adhd-small-marquee.jpg",
      link: "https://health.ucdavis.edu/news/headlines/autism-adhd-or-both-research-offers-new-insights-for-clinicians/2025/08",
    },
    {
      source: "University Of Southampton",
      title: "Medication and Long-Term Risks",
      date: "14 August 2025",
      description:
        "A large international study led by Southampton University found ADHD medication, especially stimulant drugs, is linked to a reduced risk of suicide, drug abuse, and criminal behavior in people with ADHD. This aligns with current guidelines recommending stimulants as first-line treatment.",
      image:
        "https://www.southampton.ac.uk/leaf_content/uploads/hal-gatewood-_jbclosdsd4-unsplash.jpg",
      link: "https://www.southampton.ac.uk/news/2025/08/adhd-medication-reduces-risk-of-suicide-drug-abuse-and-criminal-behaviour-study-finds.page",
    },
  ];

  return (
    <section className="text-gray-700 body-font   bg-gradient-to-r from-pink-10 via-pink-50 to-pink-10">
       <div className="px-3 sm:px-4 py-16">
    <div className="space-y-10 max-w-6xl mx-auto">
          {news.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-8 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="w-full md:w-1/3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg object-cover w-full h-48 md:h-40"
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                

                 <h2 className= {` ${playfair.className} text-xl font-semibold text-gray-800`}>
                  {item.title}
                </h2>

                <p className= {` ${ibmSans.className} text-sm text-gray-600 leading-relaxed`}>
                  {item.description}
                </p>


                
                    {/* source */}
                 <span className={` ${lato.className} inline-block text-xs  text-green-700  font-semibold rounded-full bg-green-100 px-2 py-1`}>
                 Source :  {item.source}
                </span>
                    {/* date */}
                     <span className= {` ${lato.className}  inline-block text-xs font-semibold text-grey-600  pl-2  py-1 rounded-full `}>
                 {item.date}
                </span>

                <a
                  href={item.link}
                  className="block items-center text-sm font-medium text-sky-700 hover:text-sky-900"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 inline-flex"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsAndUpdatesPage;
