import React from 'react'
import { MdChevronRight } from 'react-icons/md'
import { LuBadgeCheck } from 'react-icons/lu'
import Link from 'next/link'

const Quote = () => {
  return (
    <div className="bg-[#FF005C] text-white py-10 my-10">
      <div className="text-white lg:w-2/3 w-full mx-auto space-y-4 mt-2 px-8 lg:px-0">
        <h4 className="font-semibold flex justify-start items-center space-x-1">
          <LuBadgeCheck />
          <span>Trust & Safety</span>
        </h4>
        <h1 className="font-semibold text-5xl">We've got you covered.</h1>
        <p className="w-full lg:w-2/4">
          With a team dedicated to trust and safety, we’ve successfully managed fundraisers . Don’t
          worry about a thing, we’ve got it covered.
        </p>

        <div className="flex">
          <Link
            href={'/donations/create'}
            className="bg-white text-[#FF005C] px-4 space-x-1
            flex justify-center items-center rounded-full text-center py-3
            transition duration-300 ease-in-out hover:bg-[#ff005c] hover:text-white"
          >
            <MdChevronRight size={25} />
            <span>Start a Happy Fund</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Quote
