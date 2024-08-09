import React from 'react'
import ConnectBtn from './ConnectBtn'
import Link from 'next/link'

import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <header className="w-full absolute z-20 pt-5 px-5 sm:px-0">
      <nav
        className="flex flex-wrap items-center justify-center lg:w-2/3 w-full
        px-2 py-3 shadow-md text-white mb-3 bg-[rgba(255,255,255,0.55)] mx-auto rounded-full backdrop-filter backdrop-blur-lg"
      >
        <div
          className="container px-4 mx-auto flex flex-wrap items-center
          justify-center"
        >
          <div className="w-full relative flex justify-between px-4 lg:static">
            <Link
              className="text-sm font-semibold leading-relaxed text-[#FF005C]
            flex justify-start items-center py-2 whitespace-no-wrap uppercase"
              href="/"
            >
              <Image src="/HappyFunds(pinkYellow).svg" alt="Happy" width={30} height={30} />
              <span className="hidden sm:flex font-semibold text-lg">&nbsp;Happy Funds</span>
            </Link>

            <ConnectBtn />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
