'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'SERVICES', path: '/services' },
  // { name: 'DEVELOPERS', path: '/developers' },
  { name: 'ABOUT', path: '/about' },
  { name: 'BLOG', path: '/blog' },
  { name: 'TECHNOLOGIES', path: '/technologies' }
]

const serviceDropdown = [
  { name: 'WEB DEVELOPMENT', path: '/services/web-development' },
  { name: 'MOBILE DEVELOPMENT', path: '/services/mobile-development' },
  { name: 'FULLSTACK DEVELOPMENT', path: '/services/fullstack-development' },
  { name: 'SAAS DEVELOPMENT', path: '/services/saas-development' },
  { name: 'DEDICATED DEVELOPMENT TEAM', path: '/services/dedicated-development-team' },
  { name: 'CLOUD SOLUTIONS', path: '/services/cloud-development' },
  { name: 'QUALITY ASSURANCE & TESTING', path: '/services/qa-testing' },
  { name: 'DEVOPS & CI/CD SERVICES', path: '/services/devops-development' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 drop-shadow-md ${
        isTransparent
          ? 'bg-white py-4' 
          : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Section - Left */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center relative z-10">
              <Image 
                src="/TECHNOLOGIES.png"
                alt="CodeLab Technologies Logo" 
                width={200} 
                height={54}
                priority
                className="transition-opacity duration-300"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden ml-auto mr-4 bg-orange-500 p-2 rounded-md"
          >
            <Menu className="h-6 w-6 text-white" />
          </button>

          {/* Right side container for Navigation and Contact Button */}
          <div className="hidden lg:flex items-center">
            {/* Navigation Menu - Right */}
            <nav className="flex items-center mr-8">
              <ul className="flex items-center space-x-12">
                {navItems.map((item) => (
                  <li key={item.name} className="relative group">
                    {item.name === 'SERVICES' ? (
                      <>
                        <Link 
                          href={item.path}
                          className={`text-l transition-colors duration-300 ${
                            isTransparent 
                              ? 'text-gray-700 hover:text-orange-300' 
                              : 'text-gray-700 hover:text-orange-500'
                          } ${pathname === item.path ? 'text-orange-500' : ''}`}
                        >
                          {item.name}
                        </Link>
                        {/* Dropdown */}
                        <div className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block z-50 min-w-[270px]">
                          <div className="bg-white rounded-xl shadow-2xl py-4 px-0 border border-gray-100">
                            <ul className="flex flex-col gap-1">
                              {serviceDropdown.map((service) => (
                                <li key={service.name}>
                                  <Link
                                    href={service.path}
                                    className="block px-6 py-2 text-base text-gray-800 rounded-md font-medium transition-all duration-200 hover:bg-orange-50 hover:text-orange-600 focus:bg-orange-100 focus:text-orange-700 outline-none"
                                  >
                                    {service.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link 
                        href={item.path}
                        className={`text-l transition-colors duration-300 ${
                          isTransparent 
                            ? 'text-gray-700 hover:text-orange-300' 
                            : 'text-gray-700 hover:text-orange-500'
                        } ${pathname === item.path ? 'text-orange-500' : ''}`}
                      >
                        {item.name}
                      </Link>
                    )}
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

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="p-4">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Image 
                  src="/TECHNOLOGIES.png"
                  alt="CodeLab Technologies Logo" 
                  width={200} 
                  height={54}
                  priority
                  className="transition-opacity duration-300"
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-orange-500 p-2 rounded-md"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <nav  className="">
              <ul className=" items-center space-x-0">
                {navItems.map((item) => (
                  <li key={item.name} className="border-b border-orange-200">
                    <Link 
                      href={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-l block py-4 px-4 ${
                        pathname === item.path 
                          ? 'bg-orange-500 text-white' 
                          : 'text-orange-600 bg-white hover:bg-orange-500 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="">
                  <Button 
                    asChild 
                    className="w-full bg-orange-500 text-l hover:bg-orange-600 text-white transition-colors duration-300"
                  >
                    <Link 
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      LET'S CONNECT
                    </Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

