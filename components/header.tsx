'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 ${isScrolled ? 'bg-white shadow-md' : 'bg-zinc-50'}`}>
   
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/codelab-logo.png" alt="CodeLab Technologies Logo" width={150} height={40} />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className={`hover:text-orange-500 ${isScrolled ? 'font-semibold' : 'font-semibold '}`}>Home</Link></li>
            <li><Link href="/about" className={`hover:text-orange-500 ${isScrolled ? 'font-semibold' : 'font-semibold'}`}>About</Link></li>
            <li><Link href="/services" className={`hover:text-orange-500 ${isScrolled ? 'font-semibold' : 'font-semibold '}`}>Services</Link></li>
            <li><Link href="/technologies" className={`hover:text-orange-500 ${isScrolled ? 'font-semibold' : 'font-semibold '}`}>Technologies</Link></li>
            {/* <li><Link href="/blog" className={`hover:text-orange-500 ${isScrolled ? 'font-semibold' : 'font-semibold'}`}>Blog</Link></li> */}
            <li>
             
                <Link href="/contact" className={`hover:text-orange-500 ${isScrolled ? 'font-semibold' : 'font-semibold '}`}>Contact Us</Link>
             
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

