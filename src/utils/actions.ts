'use server'

import { Resend } from 'resend';
import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config()

interface ISendMailProps {
    email: string,
    name: string,
    message: string,
}

export default async function sendMail({email, message, name}: ISendMailProps) {
    try {
        const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
        const emailHTML = fs.readFileSync('./src/public/assets/bodyEmail/contactMeRespond.html', 'utf-8')
        
        const sendEmailToOther = await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: email,
          subject: 'Pesan Sudah Terkirim [aviawan]',
          html: emailHTML
        });
    
        const sendEmailToUser = await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: process.env.NEXT_PUBLIC_RESEND_USER as string,
          subject: `Pesan dari ${email} [${name}]`,
          html: `<p>${message}</p>`
        });

        return {
            sendEmailToOther,
            sendEmailToUser
        }
    } catch (err) {
        return {
            err
        }
    }
}