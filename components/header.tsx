import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-white shadow-sm bg-gradient-to-r from-secondary to-orange-400">
      <div className=" container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/codelab-logo.png" alt="CodeLab Technologies Logo" width={180} height={50} />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-gray-600 hover:text-orange-500">Home</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-orange-500">About</Link></li>
            <li><Link href="/services" className="text-gray-600 hover:text-orange-500">Services</Link></li>
            <li><Link href="/technologies" className="text-gray-600 hover:text-orange-500">Technologies</Link></li>
            <li><Link href="/blog" className="text-gray-600 hover:text-orange-500">Blog</Link></li>
            <li><Link href="/contact" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

