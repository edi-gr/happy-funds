import Head from 'next/head'
import HappyFundsWithText from '@/public/HappyFundsWithText.svg'
import Image from 'next/image'
import Hardhat from '@/public/hardhat.png'
import NextJs from '@/public/nextjs.png'
import Polygon from '@/public/polygon.png'
import Vercel from '@/public/Vercel.png'
import Solidity from '@/public/solidity.png'
import Ethers from '@/public/ethers.svg'
import Ethereum from '@/public/ethereum.png'
import Link from 'next/link'

const techused = () => {
  return (
    <div className="bg-gradient-to-b from-[#989898] to-white h-screen w-full">
      <Head>
        <title>Happy Funds - How It Works?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">
        <button
          className="absolute mt-4 ml-4 bg-[#ff2775] border border-[#FF005C] hover:bg-pink-600
        py-2 px-6 text-white hover:text-white rounded-full
        transition duration-300 ease-in-out"
          type="button"
        >
          Homepage
        </button>
      </Link>
      <div className="flex flex-col items-center pt-16 sm:pt-0">
        <div className="flex flex-row">
          <Image src={HappyFundsWithText} alt="HappyFunds" width={450} className="mx-auto my-10" />
        </div>

        <div className="w-full grid md:grid-cols-3  sm:grid-cols-2 gap-10  justify-items-center">
          <div className="bg-white rounded-3xl p-5">
            <Image src={Ethereum} alt="eth" width={220} className="mx-0.5 my-1" />
            <br />
            <div className="flex justify-center flex-col">
              <div className="flex justify-center">Best network for Web3</div>
              <div className="flex justify-center">Development</div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-5">
            <Image src={Polygon} alt="Polygon" width={220} className="mx-0.5 my-1" />
            <br />
            <div className="flex justify-center flex-col">
              <div className="flex justify-center">Cost efficient use of Ethereum</div>
              <div className="flex justify-center">Network</div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-9">
            <Image src={Vercel} alt="replit" width={220} className="mx-0.5 my-1" />
            <br />
            <div className="flex justify-center flex-col">
              <div className="flex justify-center h-4"></div>{' '}
              <div className="flex justify-center">For Hosting</div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-5 ">
            <Image src={NextJs} alt="Next" width={180} className="mx-0.5 my-1 ml-6" />
            <br />
            <div className="flex justify-center flex-col space-y-3">
              <div className="flex justify-center h-4">Framework with performance</div>{' '}
              <div className="flex justify-center">and SEO benefits</div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10">
            <Image src={Ethers} alt="ethers" width={180} className="mx-0.5 my-1" />
            <br />
            <div className="flex justify-center flex-col space-y-2">
              <div className="flex justify-center h-4">For interaction with</div>{' '}
              <div className="flex justify-center"> ethereum blockchain</div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-10">
            <Image
              src={Hardhat}
              alt="Hardhat"
              width={180}
              className="mx-0.5 my-1 flex justify-center"
            />
            <br />
            <div className="flex justify-center flex-col space-y-2">
              <div className="flex justify-center h-4">For debugging and</div>{' '}
              <div className="flex justify-center">deploying smart contract</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default techused
