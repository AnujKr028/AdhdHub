import Image from "next/image";
import styles from "./page.module.css";
import FeaturesPage from "./features/page";
import FeaturedResourcesPage from "./featuredResources/page";
import ExploreContentTypePage from "./exploreContent/page";
import NewsAndUpdatesPage from "./newsAndUpdates/page";

export default function Home() {
  return (
   
    <div className="min-h-screen bg-gray-50 flex flex-col"> 

    {/* navbar */} 

<nav className="flex justify-between items-center px-6 py-4 shadow-sm bg-white"> 

  {/* left : logo */} 
  <h1 className="text-2xl font-bold text-hray-800">AdhdHub</h1>



  {/* right: nav links */}

<div className="space-x-6">  
<a href="#" className="text-gray-700 hover:text-gray-900"> Home</a>
<a href="#" className="text-gray-700 hover:text-gray-900"> Research</a>
<a href="#" className="text-gray-700 hover:text-gray-900"> Symptoms</a>
<a href="#" className="text-gray-700 hover:text-gray-900"> Resources</a>
<a href="#" className="text-gray-700 hover:text-gray-900"> About</a>
  </div>
</nav>



{/* home content */} 
<main className="flex-grow flex flex-col md:flex-row items-center max-w-6xl mx-auto mt-5 px-6 py-12 gap-10   bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">


{/* intro left */}
{/* a photo would be here and below the photo two buttons would be there  */}
{/* a button for take test , a button for explore resources */}

  <div className="flex-shrink-0"> 
    <img 
    src="https://images.pexels.com/photos/8378741/pexels-photo-8378741.jpeg?_gl=1*1s4mrwa*_ga*MTcwOTY5MzE2OS4xNzQ0MjM1OTY4*_ga_8JE65Q40S6*czE3NTYzNzEyODEkbzMkZzAkdDE3NTYzNzEyODEkajYwJGwwJGgw" 
    alt="adhd-picture.jpg"
    className="w-96 h-72 object-cover rounded-xl shadow-md"
    />
  </div> 


 {/* intro right: text */}
        <div className="flex flex-col justify-center text-left max-w-xl">
          <h2 className="text-4xl font-semibold text-gray-700 mb-4">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-300 font-bold">
  ADHDHUB
</span>



 – Your Trusted ADHD Resource and Research Hub
          </h2>
          <p className="text-gray-600 mb-6">
            Discover curated research, expert articles, podcasts, and guides
            from trusted sources to help you understand and manage ADHD. All in
            one place.
          </p>

          {/* action buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition">
              Take Test
            </button>
            <button className="px-6 py-2 rounded-full border border-gray-800 text-gray-800 hover:bg-gray-100 transition">
              Explore Resources
            </button>
          </div>
        </div>
      </main>

      {/* features section */}
      <FeaturesPage />



        {/* featuredResources section */} 
        <div className="mt-5 mb-5"> 
          <h2 className="text-3xl text-center font-semibold text-gray-700">Featured Resources</h2>
          <FeaturedResourcesPage />
        </div>



        {/* explore by content type */}
            <div className="mt-2 mb-10"> 
        <h2 className="text-3xl text-center font-semibold text-gray-700 mb-7">Explore by Content Type</h2>
          < ExploreContentTypePage/>

            </div>


          {/* updates and news */}
          <div className="mt-10 mb-10"> 
      <h2 className="text-3xl text-center font-semibold text-gray-700 mb-7">Latest Update and News</h2>
          <NewsAndUpdatesPage/>
          </div>

    </div>




  );
}