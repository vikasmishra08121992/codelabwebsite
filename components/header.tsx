'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 590)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 ${isScrolled ? 'bg-white shadow-md' : 'bg-orange-200'}`}>
   
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/codelab-logo.png" alt="CodeLab Technologies Logo" width={150} height={40} />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className={`hover:text-orange-500 ${isScrolled ? 'text-gray-600' : 'text-white'}`}>Home</Link></li>
            <li><Link href="/about" className={`hover:text-orange-500 ${isScrolled ? 'text-gray-600' : 'text-white'}`}>About</Link></li>
            <li><Link href="/services" className={`hover:text-orange-500 ${isScrolled ? 'text-gray-600' : 'text-white'}`}>Services</Link></li>
            <li><Link href="/technologies" className={`hover:text-orange-500 ${isScrolled ? 'text-gray-600' : 'text-white'}`}>Technologies</Link></li>
            <li><Link href="/blog" className={`hover:text-orange-500 ${isScrolled ? 'text-gray-600' : 'text-white'}`}>Blog</Link></li>
            <li>
              <Button asChild variant={isScrolled ? "default" : "secondary"}>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

