"use client";

const NewsAndUpdatesPage = () => {
  const news = [
    {
      source: "Pyschology Today",
      title: "This is the first title for the news",
      date: "March 2018",
      description:
        "Hey this is the first time ever vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdHxTIRDZgYPbpZgwfu73sxCX7jr2AaR2-w&s",
      link: "#",
      
    },
    {
      source: "CATEGORY",
      title: "This is the second title for the news",
      date: "12 Jun 2019",
      description:
        "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL__FQV1czu2XfsxttzTrYDRzWtuXf6Gd9vw&s",
      link: "#",
    },
    {
      source: "CATEGORY",
      title: "Bitters hashsource waistcoat fashion axe chia unicorn",
      date: "12 Jun 2019",
      description:
        "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dhm32UhUkm0b1hBIfAlgQUL-sJZg1dznLw&s",
      link: "#",
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
                

                <h2 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h2>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>


                
                    {/* source */}
                 <span className=" inline-block text-xs font-medium text-green-700   rounded-full bg-green-100 px-2 py-1">
                 Source :  {item.source},
                </span>
                    {/* date */}
                     <span className=" inline-block text-xs font-medium text-grey-600  pl-2  py-1 rounded-full">
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
