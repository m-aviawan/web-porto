'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import heroImage from "@/public/assets/images/my-photo.jpg"
import logo from "@/public/assets/images/logo-avi.png"
import Kontak from "@/features/home/components/Kontak";
import TentangSaya from "@/features/home/components/TentangSaya";
import Portfolio from "@/features/home/components/Portfolio";

export default function Home() {

  const [ hamburgerActive, setHamburgerActive ] = useState('')
  const [ showHamburgerNav, setShowHamburgerNav ] = useState('scale-y-0')
  const [ fixedNavbar, setFixedNavbar ] = useState<string>('absolute-navbar')

  const toggleHamburgerActive = () => {
    if(!hamburgerActive) {
      setHamburgerActive('hamburger-active')
      setShowHamburgerNav('scale-y-100')
    } else {
      setHamburgerActive('')
      setShowHamburgerNav('scale-y-0')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 0) {
        setFixedNavbar('fixed-navbar')
      } else {
        setFixedNavbar('absolute-navbar')
      }
    })
  }, [])

  return (
    <main className="flex flex-col pb-20 w-full overflow-hidden">
      {/* Header Section Start */}
      <header className={fixedNavbar}>
        <div className="py-3 px-3 sm:px-8 md:px-12 lg:px-16 w-full">
          <div className="flex items-center justify-end relative">
            <figure className="px-4 absolute left-3 font-bold text-lg text-green-600 overflow-hidden h-16 flex items-center justify-center">
              <Link href='/'>
                <Image
                src={logo}
                width={500}
                height={500}
                alt='logo'
                className="w-28 h-28 object-contain"
                />
              </Link>
            </figure>
            <div className="flex items-center md:px-2 px-4">
              <button onClick={toggleHamburgerActive} type="button" id="hamburger" name='hamburger' className={`md:hidden block ${hamburgerActive}`}>
                <span className="hamburger-strip transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-strip transition duration-300 ease-in-out"></span>
                <span className="hamburger-strip transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
              <nav className={`${showHamburgerNav} md:scale-100 w-full md:w-full sm:w-[400px] text-base origin-top md:bg-inherit bg-white z-50 transition duration-300 md:static fixed top-[55px] right-0 sm:right-14 md:shadow-none shadow-lg`}>
                <ul className="flex md:flex-row md:gap-1 flex-col p-2" >
                  <Link href='/'>
                  <li className="px-5 py-2 hover:bg-green-600 md:rounded-full hover:cursor-pointer active:scale-90 hover:text-white transition duration-200">Beranda</li>
                  </Link>
                  <Link href='#tentang-saya'>
                  <li onClick={toggleHamburgerActive}>
                    <div 
                    className="px-5 py-2 hover:bg-green-600 md:rounded-full hover:cursor-pointer active:scale-90 hover:text-white transition duration-200">Tentang Saya
                    </div>
                  </li>
                  </Link>
                  <Link href='#portfolio'>
                  <li onClick={toggleHamburgerActive}>
                    <div
                    className="px-5 py-2 hover:bg-green-600 md:rounded-full hover:cursor-pointer active:scale-90 hover:text-white transition duration-200">Portfolio
                    </div>
                  </li>
                  </Link>
                  <Link href='#kontak'>
                  <li onClick={toggleHamburgerActive}>
                    <div
                    className="px-5 py-2 hover:bg-green-600 md:rounded-full hover:cursor-pointer active:scale-90 hover:text-white transition duration-200">Kontak
                    </div>
                  </li>
                  </Link>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Header Section End */}
      {/* Hero Section Start */}
      <section id='hero' className="pt-36">
        <div className="px-3 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base md:text-xl lg:text-2xl font-semibold text-green-600">
                Halo Semua ✌️, perkenalkan saya <span className="block font-bold text-4xl md:text-5xl text-gray-900">Muhamad Fauzi Aviawan</span>
              </h1>
              <h2 className='font-medium md:text-xl lg:text-2xl text-gray-800 text-lg mb-5'>Junior Fullstack Web Developer</h2>
              <p className="font-medium md:text-lg lg:text-xl mb-10 text-gray-700 leading-relaxed">Seorang yang melakukan switching career sebagai web developer sejak 2024</p>
              <Link href='#kontak'>
                <p className="bg-green-600 transtition duration-150 py-3 px-6 hover:opacity-75 active:scale-90 rounded-full w-fit text-white mb-10 font-bold leading-relaxed">Hubungi Saya</p>
              </Link>
            </div>
            <div className="w-full flex justify-center items-center px-4 lg:w-1/2">
              <div className="mt-10">
                <figure className="bg-gray-300 hero-image w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] overflow-hidden">
                  <Image
                  width={400}
                  height={400}
                  alt="my-pict"
                  src={heroImage}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
      <section id='tentang-saya'>
      <TentangSaya/>
      </section>
      <section id='portfolio'>
      <Portfolio/>
      </section>
      <section id='kontak'>
      <Kontak />
      </section>
    </main>
  );
}
