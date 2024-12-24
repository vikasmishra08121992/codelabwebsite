'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isTransparent = isHomePage && !isScrolled

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? 'bg-white py-4' 
          : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 bg-shadow">
        <div className="flex justify-between items-center">
          {/* Logo Section - Left */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center relative z-10">
              <Image 
                src={isTransparent ? "/TECHNOLOGIES.png" : "/TECHNOLOGIES.png"}
                alt="CodeLab Technologies Logo" 
                width={200} 
                height={54}
                className="transition-opacity duration-300"
              />
            </Link>
          </div>

          {/* Right side container for Navigation and Contact Button */}
          <div className="flex items-center">
            {/* Navigation Menu - Right */}
            <nav className="hidden lg:flex items-center mr-8">
              <ul className="flex items-center space-x-12">
                {[
                  { name: 'HOME', path: '/' },
                  { name: 'SERVICES', path: '/services' },
                  { name: 'ABOUT', path: '/about' },
                  { name: 'TECHNOLOGIES', path: '/technologies' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.path}
                      className={`text-l  transition-colors duration-300 ${
                        isTransparent 
                          ? 'text-gray-700 hover:text-orange-300' 
                          : 'text-gray-700 hover:text-orange-500'
                      } ${pathname === item.path ? 'text-orange-500' : ''}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Button - Right */}
            <Button 
              asChild 
              className="bg-orange-500 text-l hover:bg-orange-600 text-white transition-colors duration-300"
            >
              <Link href="/contact">LET'S CONNECT</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

