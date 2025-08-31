"use client";

import {CircleArrowRight} from "lucide-react"

const FAQS = () => {
  return (
    <div className="px-3 sm:px-16 py-12 font-sans text-gray-700  bg-white rounded-2xl shadow-xl   mx-auto">
      <div className="flow-root">
        <div className="-my-4 flex flex-col divide-y divide-gray-200">
          <details className="group py-4 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden" open>
            <summary className="flex items-center justify-between gap-1.5 cursor-pointer text-gray-800 font-medium  transition-colors">
              <h2 className="text-lg font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing?
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
            <p className="pt-3 text-sm text-gray-600 leading-relaxed transition-all duration-700 ease-in-out group-open:max-h-[1000px] max-h-0 overflow-hidden opacity-0 group-open:opacity-100">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias
              culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo
              officiis explicabo consequuntur distinctio corporis earum similique!
            </p>
          </details>

          <details className="group py-4 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 cursor-pointer text-gray-800 font-medium  transition-colors">
              <h2 className="text-lg font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing?
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
            <p className="pt-3 text-sm text-gray-600 leading-relaxed transition-all duration-700 ease-in-out group-open:max-h-[1000px] max-h-0 overflow-hidden opacity-0 group-open:opacity-100">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias
              culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo
              officiis explicabo consequuntur distinctio corporis earum similique!
            </p>
          </details>

          <details className="group py-4 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 cursor-pointer text-gray-800 font-medium  transition-colors">
              <h2 className="text-lg font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing?
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
            <p className="pt-3 text-sm text-gray-600 leading-relaxed transition-all duration-700 ease-in-out group-open:max-h-[1000px] max-h-0 overflow-hidden opacity-0 group-open:opacity-100">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias
              culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo
              officiis explicabo consequuntur distinctio corporis earum similique!
            </p>
          </details>



             <details className="group py-4 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 cursor-pointer text-gray-800 font-medium  transition-colors">
              <h2 className="text-lg font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing?
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
            <p className="pt-3 text-sm text-gray-600 leading-relaxed transition-all duration-700 ease-in-out group-open:max-h-[1000px] max-h-0 overflow-hidden opacity-0 group-open:opacity-100">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias
              culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo
              officiis explicabo consequuntur distinctio corporis earum similique!
            </p>
          </details>




        </div>
      </div>

      {/* Centered minimalist button */}
      <div className="flex justify-center mt-10">
       

         {/* CTA Button */}
        <button className="flex items-center mx-auto sm:mt-12 md:mt-10 lg:mt-10 px-5 py-2 border border-gray-400 text-gray-700 rounded-lg text-sm font-light transition-colors duration-200 hover:bg-gray-600 hover:border-gray-500 hover:text-white cursor-pointer">
  Explore More <CircleArrowRight className="w-4 h-4 ml-2" />
</button>

      </div>
    </div>
  );
};

export default FAQS;
