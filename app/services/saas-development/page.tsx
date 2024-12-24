import Image from 'next/image'
import { ServiceLayout } from '../../../components/service-layout';
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function SaaSDevelopment() {
  return (
    <ServiceLayout
      title="SAAS DEVELOPMENT SERVICES"
      subtitle="Create scalable, multi-tenant software solutions that drive business growth"
    >
      <div className="grid gap-16">
        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-8">OUR SAAS DEVELOPMENT EXPERTISE</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
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
          <h2 className="text-2xl font-bold mb-8">OUR SAAS DEVELOPMENT PROCESS</h2>
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
    title: 'Multi-tenant Architecture',
    description: 'Secure and efficient handling of multiple customers on a single platform.',
    icon: CheckCircle
  },
  {
    title: 'Scalable Infrastructure',
    description: 'Cloud-native solutions that grow with your business needs.',
    icon: CheckCircle
  },
  {
    title: 'Subscription Management',
    description: 'Flexible billing and subscription handling systems.',
    icon: CheckCircle
  },
  {
    title: 'Custom Integration',
    description: 'Seamless integration with third-party services and APIs.',
    icon: CheckCircle
  },
  {
    title: 'Analytics & Reporting',
    description: 'Comprehensive analytics and reporting capabilities.',
    icon: CheckCircle
  },
  {
    title: 'Security & Compliance',
    description: 'Enterprise-grade security and regulatory compliance.',
    icon: CheckCircle
  }
]

const process = [
  {
    title: 'Discovery & Planning',
    description: 'Understanding your business model and SaaS requirements.'
  },
  {
    title: 'Architecture Design',
    description: 'Designing scalable and secure multi-tenant architecture.'
  },
  {
    title: 'Development',
    description: 'Agile development with regular iterations and feedback.'
  },
  {
    title: 'Testing & QA',
    description: 'Comprehensive testing of functionality and performance.'
  },
  {
    title: 'Deployment',
    description: 'Smooth deployment and infrastructure setup.'
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing support and feature enhancement.'
  }
]

const technologies = [
  { name: 'React', icon: '/tech-icons/react.svg' },
  { name: 'Node.js', icon: '/tech-icons/nodejs.svg' },
  { name: 'PostgreSQL', icon: '/tech-icons/postgresql.svg' },
  { name: 'MongoDB', icon: '/tech-icons/mongodb.svg' },
  { name: 'Redis', icon: '/tech-icons/redis.svg' },
  { name: 'AWS', icon: '/tech-icons/aws.svg' },
  { name: 'Docker', icon: '/tech-icons/docker.svg' },
  { name: 'Kubernetes', icon: '/tech-icons/kubernetes.svg' },
  { name: 'Elasticsearch', icon: '/tech-icons/elasticsearch.svg' }
]

