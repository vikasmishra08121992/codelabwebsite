import Image from 'next/image'
import { ServiceLayout } from '../../../components/service-layout';
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function FrontendDevelopers() {
  return (
    <ServiceLayout
      title="FRONTEND DEVELOPERS"
      subtitle="Expert frontend developers specializing in creating responsive, interactive user interfaces with modern frameworks and technologies"
      headerImage="/services/servicesHeader.png"
    >
      <div className="grid gap-16">
        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-8">OUR FRONTEND DEVELOPMENT EXPERTISE</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-orange-200 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process */}
        <div className="grid md:grid-cols-2">
          <section>
            <h2 className="text-2xl font-bold mb-8">OUR DEVELOPMENT APPROACH</h2>
            <div className="grid gap-8">
              <div>
                <ul className="space-y-4">
                  {process.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-orange-600 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section>
            <h2 className="text-2xl font-bold mb-8">TECHNOLOGIES & FRAMEWORKS</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="mb-2"
                  />
                  <span className="text-sm font-medium text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </ServiceLayout>
  )
}

const features = [
  {
    title: 'Responsive Web Design',
    description: 'Create websites that look and function perfectly on all devices and screen sizes.',
    icon: CheckCircle
  },
  {
    title: 'Modern JavaScript Frameworks',
    description: 'Expertise in React, Angular, Vue.js, and Next.js for building dynamic applications.',
    icon: CheckCircle
  },
  {
    title: 'UI/UX Implementation',
    description: 'Transform designs into functional, accessible, and user-friendly interfaces.',
    icon: CheckCircle
  },
  {
    title: 'Performance Optimization',
    description: 'Optimize applications for speed, SEO, and excellent user experience.',
    icon: CheckCircle
  },
  {
    title: 'Cross-Browser Compatibility',
    description: 'Ensure consistent functionality across all major browsers and platforms.',
    icon: CheckCircle
  },
  {
    title: 'Progressive Web Apps',
    description: 'Build fast, reliable, and engaging web applications that work offline.',
    icon: CheckCircle
  }
]

const process = [
  {
    title: 'Requirements Analysis',
    description: 'Understanding project requirements, target audience, and design specifications.'
  },
  {
    title: 'Design Review & Planning',
    description: 'Analyzing UI/UX designs and planning the technical implementation approach.'
  },
  {
    title: 'Component Development',
    description: 'Building reusable components and implementing responsive layouts.'
  },
  {
    title: 'Integration & Testing',
    description: 'Integrating with backend APIs and thorough testing across devices.'
  },
  {
    title: 'Performance Optimization',
    description: 'Optimizing load times, bundle sizes, and overall user experience.'
  },
  {
    title: 'Deployment & Maintenance',
    description: 'Deploying to production and providing ongoing support and updates.'
  }
]

const technologies = [
  { name: 'React', icon: '/tech-icons/react.svg' },
  { name: 'Angular', icon: '/tech-icons/angular.svg' },
  { name: 'Vue.js', icon: '/tech-icons/vue.svg' },
  { name: 'Next.js', icon: '/tech-icons/nextjs.svg' },
  { name: 'TypeScript', icon: '/tech-icons/typescript.svg' },
  { name: 'Tailwind CSS', icon: '/tech-icons/tailwind.svg' },
  { name: 'JavaScript', icon: '/tech-icons/javascript.svg' },
  { name: 'HTML5', icon: '/tech-icons/html5.svg' },
  { name: 'CSS3', icon: '/tech-icons/css3.svg' },
  { name: 'Redux', icon: '/tech-icons/redux.svg' },
  { name: 'GraphQL', icon: '/tech-icons/graphql.svg' },
  { name: 'Webpack', icon: '/tech-icons/webpack.svg' }
] 