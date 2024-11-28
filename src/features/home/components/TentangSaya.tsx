'use client'

import React, { useEffect } from 'react'
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFormik } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import Link from 'next/link'

const TentangSaya = ({ isUseAOS = true }) => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section>
        <div className="px-3 sm:px-8 pt-20 md:px-12 pb-4 lg:px-16">
          <div className="flex flex-wrap">
            <section className="md:w-1/2 w-full px-4 mb-10" data-aos={isUseAOS && 'fade-right'}>
              <h1 className='font-bold uppercase text-green-600 mb-3'>Tentang Saya</h1>
              <h2 className="font-bold text-gray-800 text-3xl mb-5 max-w-xl">Bekerja dengan setulus hati</h2>
              <p className="font-medium text-base text-gray-700 text-justify">
                Saya merupakan seorang yang melakukan switching career semenjak tahun 2024.
                Saya merupakan pekerja keras yang berorientasikan pada usaha dan target. 
                Saya ingin memberikan kontribusi yang dapat dikenang dalam hal yang positif di perusahaan tempat saya bekerja.
                Dalam bekerja, saya berusaha untuk menciptakan lingkungan yang harmonis 
                serta membangun sehingga pekerjaan dapat dikerjakan secara maksimal dengan sepenuh hati.
              </p>
            </section>
            <section className="md:w-1/2 w-full px-4 mb-10" data-aos={isUseAOS && 'fade-left'}>
              <h1 className="font-semibold text-gray-800 text-2xl mb-4">Lebih Akrab</h1>
              <p className="font-medium text-base text-gray-700 mb-6 text-justify">
                Silahkan untuk menambahkan akun media sosial saya di dalam list pertemananmu. 
                Saya berharap dapat memberikan dampak yang positif bagi pengikut saya</p>
              <div className="flex items-center gap-3">
                <Link target='_blank' href='https://www.instagram.com/fauziaviawan/'>
                <FaInstagram className="w-9 h-9 text-gray-300 hover:text-red-500 active:scale-90 transition duration-150"/>
                </Link>
                <Link target='_blank' href='https://www.linkedin.com/in/mfauziaviawan/'>
                <FaLinkedin className="w-9 h-9 text-gray-300 hover:text-blue-600 active:scale-90 transition duration-150"/>
                </Link>
                <Link target='_blank' href='https://wa.me/6281272037034'>
                <FaWhatsapp className="w-9 h-9 text-gray-300 hover:text-green-700 active:scale-90 transition duration-150"/>
                </Link>
                <Link target='_blank' href='https://github.com/m-aviawan'>
                <FaGithub className="w-9 h-9 text-gray-300 hover:text-purple-600 active:scale-90 transition duration-150"/>
                </Link>
              </div>
            </section>
            <section className='w-full px-4 flex flex-col gap-5 items-center justify-center'>
              <h1 className='text-gray-800 font-bold text-2xl' data-aos='fade-up'>Kemampuan Bahasa, Library, dan Framework</h1>
              <div className='flex flex-wrap items-center justify-center gap-6' data-aos='fade-up'>
                <RiNextjsFill className='w-[38px] h-[38px] hover:scale-150 transition duration-200 text-black'/>
                <FaReact className='w-[38px] h-[38px] hover:scale-150 transition duration-200 text-teal-300'/>
                <IoLogoJavascript className='w-[38px] h-[38px] hover:scale-150 transition duration-200 text-yellow-400'/>
                <FaCss3Alt className='w-[38px] h-[38px] hover:scale-150 transition duration-200 text-blue-800'/>
                <FaHtml5 className='w-[38px] h-[38px] hover:scale-150 transition duration-200 text-orange-600'/>
                <RiTailwindCssFill className='w-[38px] h-[38px] hover:scale-150 transition duration-200 text-cyan-500'/>
                <SiFormik className='w-[38px] h-[38px] hover:scale-150 transition duration-200 text-blue-800'/>
                <DiMysql className='w-[38px] h-[38px] hover:scale-150 transition duration-200 text-sky-900'/>
                <SiTypescript className='w-[38px] h-[38px] hover:scale-150 transition duration-200 text-blue-700'/>
                <SiExpress className='w-[38px] h-[38px] hover:scale-150 transition duration-200 text-gray-900'/>
                <SiRedux className='w-[38px] h-[38px] hover:scale-150 transition duration-200 text-purple-700'/>
                <SiPrisma className='w-[38px] h-[38px] hover:scale-150 transition duration-200 text-gray-900'/>
                <SiReactrouter className='w-[38px] h-[38px] hover:scale-150 transition duration-200 text-red-600'/>
              </div>
            </section>
          </div>
        </div>
      </section>
  )
}

export default TentangSaya
