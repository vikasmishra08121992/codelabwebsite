import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ServiceLayoutProps {
  title: string
  subtitle: string
  children: React.ReactNode
}

export function ServiceLayout({ title, subtitle, children }: ServiceLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-400/80" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {subtitle}
            </p>
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-white/90">
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </section>
    </div>
  )
}

