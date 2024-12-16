'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
    <header className={`sticky top-0 z-50 ${isScrolled ? 'bg-white shadow-md' : 'bg-gradient-to-r from-secondary to-orange-400'}`}>
      <div className=" container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/codelab-logo.png" alt="CodeLab Technologies Logo" width={180} height={50} />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="font-medium hover:text-orange-500">Home</Link></li>
            <li><Link href="/about" className="font-medium hover:text-orange-500">About</Link></li>
            <li><Link href="/services" className="font-medium hover:text-orange-500">Services</Link></li>
            <li><Link href="/technologies" className="font-medium hover:text-orange-500">Technologies</Link></li>
            <li><Link href="/blog" className="font-medium hover:text-orange-500">Blog</Link></li>
            <li><Link href="/contact" className={`font-medium px-4 py-2 rounded hover:bg-orange-600 ${isScrolled ? 'bg-orange-500 text-white' : 'bg-white text-orange-500'}`}>Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header