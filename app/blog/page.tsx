import Image from 'next/image'
import Link from 'next/link'

export default function Blog() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-orange-500 font-semibold hover:text-orange-600">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const blogPosts = [
  {
    title: "The Future of AI in Business",
    excerpt: "Explore how artificial intelligence is reshaping industries and driving innovation.",
    image: "/blog-images/ai-business.jpg",
    slug: "future-of-ai-in-business"
  },
  {
    title: "5 Cloud Migration Strategies for Enterprises",
    excerpt: "Learn about effective strategies for moving your business to the cloud.",
    image: "/blog-images/cloud-migration.jpg",
    slug: "cloud-migration-strategies"
  },
  {
    title: "Securing Your Digital Assets: Best Practices",
    excerpt: "Discover essential cybersecurity measures to protect your organization from threats.",
    image: "/blog-images/cybersecurity.jpg",
    slug: "securing-digital-assets"
  },
  {
    title: "Agile Methodologies in Service Management",
    excerpt: "Streamline service delivery with Agile practices to enhance flexibility, collaboration, and customer satisfaction.",
    image: "/blog-images/pwa.jpg",
    slug: "agile-service-management"
  },
  {
    title: "Sustainability in Service Offerings",
    excerpt: "Integrate eco-friendly practices into services to reduce environmental impact and meet evolving customer expectations",
    image: "/blog-images/machine-learning.jpg",
    slug: "sustainability-in-services"
  },
  {
    title: "SOLID Principles in Java",
    excerpt: "A set of object-oriented design guidelines (SRP, OCP, LSP, ISP, DIP) that promote clean, scalable, and maintainable software development.",
    image: "/blog-images/5g-mobile.jpg",
    slug: "solid-principles-java"
  }
]

