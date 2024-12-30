import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getBlogPostBySlug, blogPosts, BlogSection } from '../../../lib/blogData'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

function renderSection(section: BlogSection) {
  return (
    <section key={section.title} className="mb-16">
      <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>
      <div className="flex flex-col md:flex-row items-start gap-8">
        {section.image && (
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <Image
              src={section.image.src}
              alt={section.image.alt}
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-[300px]"
            />
          </div>
        )}
        <div className={`w-full ${section.image ? 'md:w-1/2' : ''}`}>
          {section.type === 'content' && (
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: section.content }} />
          )}
          {(section.type === 'examples' || section.type === 'industries') && (
            <ul className="list-disc pl-6 space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-lg">{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

interface BlogPostProps {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{post.headerDescription}</p>
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full h-[60vh] object-cover rounded-lg"
        />
      </header>

      {/* Main Content */}
      <div className="prose max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.mainContent }} />

      {/* Sections */}
      {post.sections && post.sections.map(renderSection)}

      {/* Technology Description */}
      {post.technologyDescription && (
        <section className="bg-gray-100 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-semibold mb-4">Technology Insights</h2>
          <p className="text-gray-700">{post.technologyDescription}</p>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t pt-8">
        <p className="text-gray-600">
          Thank you for reading this article on {post.title}. For more insights on technology and business, explore our other blog posts.
        </p>
      </footer>
    </article>
  )
}

