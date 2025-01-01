import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Blog() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">OUR BLOG</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
              <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <ul className="list-disc list-inside text-gray-600 ">
                  {/* {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))} */}

                  <Link
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors duration-200"
                    href={`/blog/${post.slug}`} >Learn More <ArrowRight className="ml-2 h-4 w-4" /> </Link>

                </ul>
              </div>
            </div>
          ))}
        </div>


        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
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
        </div> */}

      </div>
    </div>
  )
}

const blogPosts = [
  {
    title: "THE FUTURE OF AI IN BUSINESS",
    excerpt: "Explore how artificial intelligence is reshaping industries and driving innovation.",
    image: "/blog-images/TheFutureofAIinBusiness.jpeg",
    slug: "future-of-ai-in-business"
  },
  {
    title: "5 CLOUD MIGRATION STRATEGIES FOR ENTERPRISES",
    excerpt: "Learn about effective strategies for moving your business to the cloud.",
    image: "/blog-images/Cloud_Migration_Strategies_for_Enterprises.jpeg",
    slug: "cloud-migration-strategies"
  },
  {
    title: "SECURING YOUR DIGITAL ASSETS: BEST PRACTICES",
    excerpt: "Discover essential cybersecurity measures to protect your organization from threats.",
    image: "/blog-images/Securing_Your_Digital_Assets.jpeg",
    slug: "securing-digital-assets"
  },
  {
    title: "AGILE METHODOLOGIES IN SERVICE MANAGEMENT",
    excerpt: "Streamline service delivery with Agile practices to enhance flexibility, collaboration, and customer satisfaction.",
    image: "/blog-images/Agile_Methodologies_in_Service_Management.jpeg",
    slug: "agile-service-management"
  },
  {
    title: "SUSTAINABILITY IN SERVICE OFFERINGS",
    excerpt: "Integrate eco-friendly practices into services to reduce environmental impact and meet evolving customer expectations",
    image: "/blog-images/Sustainability_in_Service_Offerings_1.jpeg",
    slug: "sustainability-in-services"
  },
  {
    title: "SOLID PRINCIPLES IN JAVA",
    excerpt: "A set of object-oriented design guidelines (SRP, OCP, LSP, ISP, DIP) that promote clean, scalable, and maintainable software development.",
    image: "/blog-images/SOLID_Principles_in_JAVA.jpeg",
    slug: "solid-principles-java"
  }
]

