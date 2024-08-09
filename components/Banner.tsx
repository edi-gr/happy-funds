import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { MdSunnySnowing } from 'react-icons/md'
import charity from '@/public/charity.jpg'
import poor from '@/public/poor.jpg'
import kids from '@/public/kids.jpg'
import boy from '@/public/boy.jpg'
import monk from '@/public/monks.jpg'
import orphan from '@/public/orphan.jpg'

const images = [charity, poor, kids, orphan, boy, monk]

const Banner: React.FC<{ mine?: boolean }> = ({ mine }) => {
  const [currentImage, setCurrentImage] = useState(images[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(images[(images.indexOf(currentImage) + 1) % images.length])
    }, 5000)
    return () => clearInterval(interval)
  }, [currentImage])

  return (
    <div
      style={{ backgroundImage: `url(${currentImage.src})` }}
      className="relative w-full h-[44rem] flex items-center justify-center text-white
      bg-no-repeat bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
      <div className="flex flex-col justify-end text-white p-8 space-y-8 relative z-10 h-80">
        {!mine ? (
          <h1 className="text-7xl text-center font-semibold">
            Your Home <br /> for Help
          </h1>
        ) : (
          <h1 className="text-7xl text-center font-semibold">
            Your Charity <br /> Projects
          </h1>
        )}
        <Link
          href={'/donations/create'}
          className="bg-[rgba(255,255,255,0.55)] text-[#FF005C] px-4 space-x-1
flex justify-center items-center rounded-full text-center py-3
transition duration-300 ease-in-out border-2 border-transparent hover:border-[#FF005C] backdrop-filter backdrop-blur-lg"
        >
          <Image
            className="mr-2"
            src="/HappyFunds(pinkYellow).svg"
            alt="Happy"
            width={25}
            height={25}
          />
          <span className="font-bold">Start a Happy Fund</span>
        </Link>
      </div>
    </div>
  )
}

export default Banner
