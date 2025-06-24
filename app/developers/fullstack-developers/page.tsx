import Image from 'next/image'
import { ServiceLayout } from '../../../components/service-layout';
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function FullstackDevelopers() {
  return (
    <ServiceLayout
      title="FULLSTACK DEVELOPERS"
      subtitle="Versatile fullstack developers capable of handling both frontend and backend development with comprehensive project expertise"
      headerImage="/services/servicesHeader.png"
    >
      <div className="grid gap-16">
        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-8">OUR FULLSTACK DEVELOPMENT EXPERTISE</h2>
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
            <h2 className="text-2xl font-bold mb-8">TECHNOLOGIES & STACKS</h2>
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
    title: 'End-to-End Development',
    description: 'Complete application development from database design to user interface implementation.',
    icon: CheckCircle
  },
  {
    title: 'MERN Stack Expertise',
    description: 'Proficient in MongoDB, Express.js, React, and Node.js for modern web applications.',
    icon: CheckCircle
  },
  {
    title: 'Spring Boot Development',
    description: 'Enterprise-grade applications using Spring Boot with Java for robust backend solutions.',
    icon: CheckCircle
  },
  {
    title: 'Database Integration',
    description: 'Seamless integration of various databases with both frontend and backend systems.',
    icon: CheckCircle
  },
  {
    title: 'API Development & Consumption',
    description: 'Build and consume APIs for seamless communication between application layers.',
    icon: CheckCircle
  },
  {
    title: 'Deployment & DevOps',
    description: 'Full application deployment with CI/CD pipelines and cloud infrastructure setup.',
    icon: CheckCircle
  }
]

const process = [
  {
    title: 'Full Project Planning',
    description: 'Comprehensive planning covering both frontend and backend architecture and requirements.'
  },
  {
    title: 'Database Design',
    description: 'Designing efficient database schemas and relationships for optimal performance.'
  },
  {
    title: 'Backend Development',
    description: 'Building robust APIs, business logic, and server-side functionality.'
  },
  {
    title: 'Frontend Development',
    description: 'Creating responsive user interfaces and implementing client-side functionality.'
  },
  {
    title: 'Integration & Testing',
    description: 'Seamless integration of frontend and backend with comprehensive testing.'
  },
  {
    title: 'Deployment & Maintenance',
    description: 'Full-stack deployment with monitoring, maintenance, and ongoing support.'
  }
]

const technologies = [
  { name: 'React', icon: '/tech-icons/react.svg' },
  { name: 'Node.js', icon: '/tech-icons/nodejs.svg' },
  { name: 'MongoDB', icon: '/tech-icons/mongodb.svg' },
  { name: 'Express.js', icon: '/tech-icons/expressjs.svg' },
  { name: 'Java', icon: '/tech-icons/java.svg' },
  { name: 'Spring Boot', icon: '/tech-icons/springboot.svg' },
  { name: 'PostgreSQL', icon: '/tech-icons/postgresql.svg' },
  { name: 'Next.js', icon: '/tech-icons/nextjs.svg' },
  { name: 'TypeScript', icon: '/tech-icons/typescript.svg' },
  { name: 'Docker', icon: '/tech-icons/docker.svg' },
  { name: 'AWS', icon: '/tech-icons/aws.svg' },
  { name: 'Redis', icon: '/tech-icons/redis.svg' }
] 