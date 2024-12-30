import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '../lib/blogData'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image 
        src={post.image} 
        alt={post.title} 
        width={400} 
        height={200} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link 
          href={`/blog/${post.slug}`} 
          className="text-orange-500 font-semibold hover:text-orange-600"
        >
          Read More
        </Link>
      </div>
    </div>
  )
}

