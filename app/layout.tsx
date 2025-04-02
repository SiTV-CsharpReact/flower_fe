import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/share/Footer';
import ScrollToTop from '@/components/share/ScrollToTop';
import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/share/Header';
import { Toaster } from "@/components/ui/sonner"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Fleru - The Sign of Love',
  description: 'Fleru - Cửa hàng hoa tươi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <div className='relative'>
          <Header/>
          {children}
          <Toaster />
          <Footer />
          <ScrollToTop />
        </div>
       
      </body>
    </html>
  )
}
