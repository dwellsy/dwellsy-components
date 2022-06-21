import "../App.css";
import { Button }from "../components/buttons";
import Heading from "../components/text/Heading";
import Paragraph from "../components/text/Paragraph";
import Subheading from "../components/text/Subheading";

import House1 from '../assets/images/house1.jpg';
import House2 from '../assets/images/house2.jpg';
import House3 from '../assets/images/house3.jpg';
import React from "react";

const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  alert("Clicked");
}

export const HomeTemplate = () => {
  return (
    <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
        <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <Heading level="h1" size="md">Beach House in Collingwood</Heading>
        </div>
        <div className="grid gap-2 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-2 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img src={House1} alt="" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" />
          <img src={House2} alt="" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" />
          <img src={House3} alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" />
        </div>
        <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
          <dt className="sr-only">Reviews</dt>
          <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
            <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current dark:stroke-indigo-500">
              <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>4.89 <span className="text-slate-800 dark:text-slate-200 font-normal">(128)</span></span>
          </dd>
          <dt className="sr-only">Location</dt>
          <dd className="flex items-center dark:text-slate-200">
            <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
              <circle cx="1" cy="1" r="1" />
            </svg>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
              <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
              <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
            </svg>
            Collingwood, Ontario
          </dd>
        </dl>
        <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
          <Button onClick={handleClick} type="primary" size="sm">
            <svg height="24" className="w-8 mr-2" version="1.1" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5,4C13.09,4 16,6.91 16,10.5C16,12.12 15.41,13.6 14.43,14.73L20.08,20.38L19.37,21.09L13.72,15.44C12.59,16.41 11.11,17 9.5,17C5.91,17 3,14.09 3,10.5C3,6.91 5.91,4 9.5,4M9.5,5C6.46,5 4,7.46 4,10.5C4,13.54 6.46,16 9.5,16C12.54,16 15,13.54 15,10.5C15,7.46 12.54,5 9.5,5Z"
              className="fill-white" 
            /></svg>
            Check availability
          </Button>
        </div>
        <Paragraph size="md">
          This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head 
          for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and 
          supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthur's Seat.
        </Paragraph>
      </div>
    </main>
  );
}

export default HomeTemplate;