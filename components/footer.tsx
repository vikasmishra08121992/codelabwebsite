import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/codelab-logo.png"
              alt="CodeLab Technologies Logo"
              width={150}
              height={40}
            />
            <p className="text-sm">
            Power Your Business Growth with CodeLab: Elevate Your Potential
          
            </p>
          </div>
          

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-development" className="text-sm hover:text-white">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-development" className="text-sm hover:text-white">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-solutions" className="text-sm hover:text-white">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/fullstack-development" className="text-sm hover:text-white">
                Fullstack Development
                </Link>
              </li>
              <li>
                <Link href="/services/quality-assurance" className="text-sm hover:text-white">
                Quality Assurance & Testing
                </Link>
              </li>
              <li>
                <Link href="/services/deveops-cicd" className="text-sm hover:text-white">
                DEVOPS & CI/CD Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Hire Developers</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm hover:text-white">
                Frontend Developers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white">
                Backend Developers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white">
                Fullstack Developers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white">
                Mobile Developers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white">
                Quality Assurance Developers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white">
                DEVOPS & CI/CD Developers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm">Email: info@codelabtechnologies.com</li>
              <li className="text-sm">Phone: +91 9722780697</li>
              <li className="text-sm">
                Address: 123 Tech Street<br />
                Silicon Valley, CA 94025
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} CodeLab Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

