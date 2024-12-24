import Image from 'next/image'
import { ServiceLayout } from '../../../components/service-layout';
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function WebDevelopment() {
  return (
    <ServiceLayout
      title="WEB DEVELOPMENT SERVICES"
      subtitle="Create powerful, scalable web applications with modern technologies and best practices"
    >
      <div className="grid gap-16">
        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-8">OUR WEB DEVELOPMENT EXPERTISE</h2>
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
        <div className="grid md:grid-cols-2 ">
        <section>
          <h2 className="text-2xl font-bold mb-8">OUR DEVELOPMENT PROCESS</h2>
          <div className="grid  gap-8">
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
          <h2 className="text-2xl font-bold mb-8">TECHNOLOGIES WE USE</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md"
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="mb-3"
                />
                <span className="text-sm font-medium">{tech.name}</span>
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
    title: 'Custom Web Applications',
    description: 'Tailored solutions that perfectly match your business requirements and goals.',
    icon: CheckCircle
  },
  {
    title: 'Responsive Design',
    description: 'Websites that look and function perfectly on all devices and screen sizes.',
    icon: CheckCircle
  },
  {
    title: 'E-commerce Solutions',
    description: 'Powerful online stores with secure payment processing and inventory management.',
    icon: CheckCircle
  },
  {
    title: 'Progressive Web Apps',
    description: 'Fast, reliable, and engaging web applications that work offline.',
    icon: CheckCircle
  },
  {
    title: 'API Development',
    description: 'Robust and scalable APIs that power your web applications.',
    icon: CheckCircle
  },
  {
    title: 'Performance Optimization',
    description: 'Fast-loading websites optimized for search engines and user experience.',
    icon: CheckCircle
  }
]

const process = [
  {
    title: 'Discovery and Planning',
    description: 'We start by understanding your business goals, target audience, and project requirements.'
  },
  {
    title: 'Design and Prototyping',
    description: 'Creating wireframes and interactive prototypes to visualize the final product.'
  },
  {
    title: 'Development',
    description: 'Building your web application using modern technologies and best practices.'
  },
  {
    title: 'Testing and QA',
    description: 'Rigorous testing to ensure quality, security, and optimal performance.'
  },
  {
    title: 'Deployment',
    description: 'Launching your web application with proper setup and configuration.'
  },
  {
    title: 'Maintenance and Support',
    description: 'Ongoing support and updates to keep your application running smoothly.'
  }
]

const technologies = [
  { name: 'React', icon: '/tech-icons/react.svg' },
  { name: 'Angular', icon: '/tech-icons/angular.svg' },
  { name: 'Next.js', icon: '/tech-icons/nextjs.svg' },
  { name: 'Node.js', icon: '/tech-icons/nodejs.svg' },
  { name: 'Python', icon: '/tech-icons/python.svg' },
  { name: 'PostgreSQL', icon: '/tech-icons/postgresql.svg' },
  { name: 'MongoDB', icon: '/tech-icons/mongodb.svg' },
  { name: 'AWS', icon: '/tech-icons/aws.svg' },
  { name: 'Docker', icon: '/tech-icons/docker.svg' },
  { name: 'Redis', icon: '/tech-icons/redis.svg' },
  { name: 'Java', icon: '/tech-icons/java.svg' },
  {
    name: 'AWS',
    icon: '/tech-icons/aws.svg',

  },{
    name: 'Google Cloud',
    icon: '/tech-icons/gcp.svg',
    description: 'Suite of cloud computing services'
  },
  {
    name: 'Microsoft Azure',
    icon: '/tech-icons/azure.svg',
    description: 'Cloud computing service for building, testing, and managing applications'
  },
  {
    name: 'Kubernetes',
    icon: '/tech-icons/kubernetes.svg',
    description: 'Open-source container orchestration platform'
  },
  {
    name: 'Docker',
    icon: '/tech-icons/docker.svg',
    description: 'Platform for developing, shipping, and running applications in containers'
  }
]




