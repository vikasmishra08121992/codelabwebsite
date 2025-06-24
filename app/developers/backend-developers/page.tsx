import Image from 'next/image'
import { ServiceLayout } from '../../../components/service-layout';
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function BackendDevelopers() {
  return (
    <ServiceLayout
      title="BACKEND DEVELOPERS"
      subtitle="Skilled backend developers who build robust server-side applications, APIs, and database solutions for scalable systems"
      headerImage="/services/servicesHeader.png"
    >
      <div className="grid gap-16">
        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-8">OUR BACKEND DEVELOPMENT EXPERTISE</h2>
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
    title: 'API Development',
    description: 'Design and build robust RESTful APIs and GraphQL endpoints for seamless integration.',
    icon: CheckCircle
  },
  {
    title: 'Database Design',
    description: 'Expert database architecture, optimization, and management for scalable applications.',
    icon: CheckCircle
  },
  {
    title: 'Server Architecture',
    description: 'Build scalable, secure, and high-performance server-side applications.',
    icon: CheckCircle
  },
  {
    title: 'Microservices',
    description: 'Develop modular, maintainable applications using microservices architecture.',
    icon: CheckCircle
  },
  {
    title: 'Security Implementation',
    description: 'Implement comprehensive security measures including authentication and authorization.',
    icon: CheckCircle
  },
  {
    title: 'Performance Optimization',
    description: 'Optimize application performance, caching strategies, and database queries.',
    icon: CheckCircle
  }
]

const process = [
  {
    title: 'Architecture Planning',
    description: 'Designing scalable system architecture and database schema based on requirements.'
  },
  {
    title: 'API Design',
    description: 'Creating comprehensive API specifications and documentation for frontend integration.'
  },
  {
    title: 'Core Development',
    description: 'Building server-side logic, database operations, and business logic implementation.'
  },
  {
    title: 'Security Implementation',
    description: 'Implementing authentication, authorization, and security best practices.'
  },
  {
    title: 'Testing & Optimization',
    description: 'Comprehensive testing including unit tests, integration tests, and performance optimization.'
  },
  {
    title: 'Deployment & Monitoring',
    description: 'Deploying to production with monitoring, logging, and maintenance setup.'
  }
]

const technologies = [
  { name: 'Node.js', icon: '/tech-icons/nodejs.svg' },
  { name: 'Python', icon: '/tech-icons/python.svg' },
  { name: 'Java', icon: '/tech-icons/java.svg' },
  { name: 'Spring Boot', icon: '/tech-icons/springboot.svg' },
  { name: 'Express.js', icon: '/tech-icons/expressjs.svg' },
  { name: 'NestJS', icon: '/tech-icons/nestjs.svg' },
  { name: 'PostgreSQL', icon: '/tech-icons/postgresql.svg' },
  { name: 'MongoDB', icon: '/tech-icons/mongodb.svg' },
  { name: 'MySQL', icon: '/tech-icons/mysql.svg' },
  { name: 'Redis', icon: '/tech-icons/redis.svg' },
  { name: 'Docker', icon: '/tech-icons/docker.svg' },
  { name: 'AWS', icon: '/tech-icons/aws.svg' }
] 