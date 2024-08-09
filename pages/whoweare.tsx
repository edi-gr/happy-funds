import Head from 'next/head'
import Image from 'next/image'
import HappyFundsWithText from '@/public/HappyFundsWithText.svg'
import shadab from '@/public/shadab.png'
import garvit from '@/public/garvit.png'
import edson from '@/public/edson.png'
import Link from 'next/link'
// import Bits from '@/public/Bits.jpeg'

const whoweare = () => {
  return (
    <div>
      <Head>
        <title>Happy Funds - Who We Are?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          position: 'relative',
          width: '100vw',
          paddingBottom: '100px',
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('/Bits.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col items-center sm:flex-row sm:items-start">
          <div className="m-4">
            <Link href="/">
              <button
                className="bg-transparent border border-[#FF005C] hover:bg-[#ff2775]
                    py-2 px-6 text-[#FF005C] hover:text-white rounded-full
                    transition duration-300 ease-in-out"
                type="button"
              >
                Homepage
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative mr-20">
              <Image
                src={HappyFundsWithText}
                alt="HappyFunds"
                width={450}
                className="mx-auto my-5"
              />
            </div>
            <br />
            <br />
            <div className="sm:flex-col md:flex-row flex justify-start space-x-20 w-full sm:w-4/6 ml-6">
              <div className="flex flex-col items-center mb-4 sm:mb-0">
                <Image src={garvit} alt="Garvit Jain" width={188} height={188} />
                <div className="text-black text-xl mt-2">Garvit Jain</div>
              </div>
              <div className="flex flex-col items-center mb-4 sm:mb-0">
                <Image src={edson} alt="Edson George Rebello" width={188} height={188} />
                <div className="text-black text-xl mt-2">Edson George Rebello</div>
              </div>
              <div className="flex flex-col items-center">
                <Image src={shadab} alt="Md Shadab Kalim" width={188} height={188} />
                <div className="text-black text-xl mt-2">Md Shadab Kalim</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center w-full sm:w-7/12 text-black mt-12 text-2xl leading-10 mr-20">
                We are a group of engineers from BITS Pilani K K Birla Goa Campus College in Pilani
                working together for the betterment of the Society. We Prepare Web3 Solutions for
                Daily Problems. Garvit is Highly Proficient in Figma, while Edson and Shadab are
                Full Stack Developers at DogeCapital
              </div>
            </div>
            <br />
            <div className="relative xl:fixed xl:bottom-1 xl:right-0 text-lg text-black  space-y-2 mr-5">
              <div className="font-bold underline">For details Contact</div>
              <div>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.open(
                      'https://mail.google.com/mail/u/0/?view=cm&to=f20211247@goa.bits-pilani.ac.in',
                      '_blank'
                    )
                  }}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  f20211247@goa.bits-pilani.ac.in
                </a>
              </div>
              <div>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.open(
                      'https://mail.google.com/mail/u/0/?view=cm&to=f20213058@goa.bits-pilani.ac.in',
                      '_blank'
                    )
                  }}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  f20213058@goa.bits-pilani.ac.in
                </a>
              </div>
              <div>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.open(
                      'https://mail.google.com/mail/u/0/?view=cm&to=f20212840@goa.bits-pilani.ac.in',
                      '_blank'
                    )
                  }}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  f20212840@goa.bits-pilani.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default whoweare
