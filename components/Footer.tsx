import Link from 'next/link'
import React from 'react'
import HappyFundsWithText from '@/public/HappyFundsWithText.svg'
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <>
      <div className="border-t border-gray-300 py-5 my-10">
        <div className="lg:w-2/3 w-full mx-auto px-5">
          <div
            className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4
        justify-items-start items-start"
          >
            <Link
              className="text-sm font-semibold leading-relaxed text-[#FF005C]
            flex justify-start items-center py-2 whitespace-no-wrap uppercase"
              href="/"
            >
              <Image src={HappyFundsWithText} alt="HappyFunds" width={250} />
            </Link>

            <div className="space-y-2">
              <h4 className="font-semibold">Fundraise for</h4>
              <ul className="space-y-2">
                <li>Medical</li>
                <li>Emergency</li>
                <li>Education</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Learn more</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/techused">Technology We Used</Link>
                </li>
                <li>
                  <Link href="/whoweare">Who We Are</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 py-5 my-10">
        <div className="lg:w-2/3 w-full mx-auto px-5">
          <div
            className="flex flex-col sm:flex-row
            justify-center sm:justify-between"
          >
            <p className="flex space-x-4 items-center text-[#FF005C]">
              Made with ♥️ by Happy Funds &copy;{new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
