'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import locknLockWebsiteCloneImage from "@/public/assets/images/locknlock-cloning-website.png"

interface IPortfolioProps {
    isUseAOS?: boolean
}

const Portfolio = ({ isUseAOS = true }: IPortfolioProps) => {

  useEffect(() => {
    AOS.init()
  }, [])  
  return (
    <section>
        <div className="px-3 sm:px-8 pt-20 md:px-12 lg:px-16 pb-4">
          <div className="w-full px-4">
            <section className="mx-auto text-center mb-16" data-aos={isUseAOS && 'fade-up'}>
              <h1 className="font-semibold text-lg text-green-600 mb-2">Portfolio</h1>
              <h2 className="font-bold text-gray-800 text-3xl mb-4">Project Terbaru</h2>
              <p className="font-base text-gray-700 text-md mb-4">Jika tertarik untuk berkolaborasi, silahkan <Link href='#kontak'><span className="hover:underline active:scale-90 hover:cursor-pointer">hubungi saya</span></Link> dan membangun project bersama-sama!</p>
            </section>
            <section className="flex flex-col gap-5">
                <Link href='https://code-challenge-2-avi-pwd.vercel.app/' target="_blank">
                <figure className="bg-gray-300 overflow-hidden w-full rounded-3xl h-[400px] hover:cursor-pointer" data-aos={isUseAOS && 'zoom-in'}>
                  <Image
                  src={locknLockWebsiteCloneImage}
                  width={1200}
                  height={1200}
                  alt='project-image'
                  className='object-cover w-full h-full active:opacity-75'
                  />
                </figure>
                </Link>
                <article className="flex flex-col gap-5 leading-relaxed" data-aos={isUseAOS && 'fade-left'}>
                    <h1 className='text-3xl font-bold text-green-600'>LocknLock Website Clone</h1>
                    <p className="text-justify">
                    Project LocknLock Website Clone merupakan salah satu tugas wajib di bootcamp Purwadhika.  
                    Pembuatan project ini dilakukan dalam kurun waktu 3 minggu.  
                    Project ini menggunakan framework Next JS dengan Tailwind CSS sebagai framework CSS. 
                    Berdasarkan hasil pengujian di pagespeed.web.dev, nilai yang diperoleh untuk setiap aspek di antaranya
                    performance (96 | 100), accessibility (96 | 100), best pratices (100 | 100), dan SEO (100 | 100)
                    </p>
                </article>
            </section>
          </div>
        </div>
      </section>
  )
}

export default Portfolio
