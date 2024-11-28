'use client'

import React, { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { contactMeValidationSchema } from '../schemas/contactMeValidationSchema'
import AOS from 'aos'
import 'aos/dist/aos.css'
import useSendMessageHook from '../hooks/useSendMessageHook'

const Kontak = ({ isUseAOS = true }) => {
    
  const { sendMessage, isLoading } = useSendMessageHook()

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section id='kontak'>
        <div className="px-3 sm:px-8 md:px-12 lg:px-16 pt-20 pb-4">
            <Formik
            initialValues={{
              name: '',
              email: '',
              message: ''
            }}
            validationSchema={contactMeValidationSchema}
            onSubmit={(values, { resetForm }) => {
              sendMessage(values)
              resetForm({
                values: {
                  name: '',
                  email: '',
                  message: ''
                }
              })
            }}
            >
              {
                ({setFieldValue}) => (
                <Form className="flex flex-col px-4 gap-10">
                  <hgroup className="flex flex-col justify-center items-start" data-aos={isUseAOS && 'fade-left'}>
                    <h1 className="font-semibold text-lg text-green-600 mb-2">Butuh?</h1>
                    <h2 className="text-3xl font-bold text-justify mb-4">Kontak Saya</h2>
                    <p className="text-justify w-full text-base">
                      Masukkan pesan anda dan dapatkan balasan email dari saya. 
                      Harap untuk mengirimkan pesan yang bersifat penting saja.
                    </p>
                  </hgroup>
                  <section className="flex flex-col md:p-10 gap-5 md:bg-gray-300 md:rounded-3xl" data-aos={isUseAOS && 'fade-left'}>
                    <div className="flex flex-col gap-1 leading-relaxed w-full">
                      <label htmlFor="name" className="font-semibold ml-5 text-base">Nama</label>
                      <Field as={Input} placeholder="Aviawan" name='name' id='name' type='text' className='py-2 px-5 text-base md:border-none border-2 border-gray-600 bg-white rounded-3xl shadow-none'/>
                      <ErrorMessage component={'div'} name='name' className="text-sm font-semibold text-red-600 ml-5"/>
                    </div>
                    <div className="flex flex-col gap-1 leading-relaxed w-full">
                      <label htmlFor="email" className="font-semibold ml-5 text-base">Email</label>
                      <Field as={Input} placeholder="Aviawan123@email.com" name='email' id='email' type='email' className='py-2 px-5 text-base md:border-none border-2 border-gray-600 bg-white rounded-3xl shadow-none'/>
                      <ErrorMessage component={'div'} name='email' className="text-sm font-semibold text-red-600 ml-5"/>
                    </div>
                    <div className="flex flex-col gap-1 leading-relaxed w-full">
                      <label htmlFor="message" className="font-semibold ml-5 text-base">Pesan</label>
                      <Field as={Textarea} placeholder="Masukkan pesanmu di sini..." name='message' id='message' className='py-2 px-5 text-base md:border-none border-2 border-gray-600 bg-white h-[150px] rounded-3xl shadow-none'/>
                      <ErrorMessage component={'div'} name='message' className="text-sm font-semibold text-red-600 ml-5"/>
                    </div>
                    <button disabled={isLoading} type="submit" className="disabled:opacity-60 disabled:scale-100 text-semibold bg-green-600 text-white rounded-full px-6 py-3 hover:opacity-75 active:scale-95 transition duration-200">
                      Kirim pesan
                    </button>
                  </section>
                  <p className="text-left mt-[-35px] w-full text-sm">
                  Mohon maaf jika saya ada keterbatasan dalam membalas email.
                  </p>
                </Form>
                )
              }
            </Formik>

        </div>
      </section>
  )
}

export default Kontak
