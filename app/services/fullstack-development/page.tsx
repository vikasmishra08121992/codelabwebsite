import Image from 'next/image'
import { ServiceLayout } from '../../../components/service-layout';
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function FullstackDevelopment() {
  return (
    <ServiceLayout
      title="FULLSTACK DEVELOPMENT SERVICES"
      subtitle="End-to-end solutions covering both frontend and backend development"
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
        <div className="grid md:grid-cols-2 ">
        <section>
          <h2 className="text-2xl font-bold mb-8">OUR FULLSTACK DEVELOPMENT PROCESS</h2>
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
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces using modern frameworks.',
    icon: CheckCircle
  },
  {
    title: 'Backend Development',
    description: 'Building robust server-side applications and APIs.',
    icon: CheckCircle
  },
  {
    title: 'Database Design',
    description: 'Designing and implementing efficient database structures.',
    icon: CheckCircle
  },
  {
    title: 'API Integration',
    description: 'Seamlessly connecting various services and third-party APIs.',
    icon: CheckCircle
  },
  {
    title: 'Full-Stack Optimization',
    description: 'Enhancing performance across the entire application stack.',
    icon: CheckCircle
  },
  {
    title: 'DevOps Integration',
    description: 'Implementing CI/CD pipelines for smooth deployment and scaling.',
    icon: CheckCircle
  }
]

const process = [
  {
    title: 'Requirements Gathering',
    description: 'Understanding the project scope and technical requirements.'
  },
  {
    title: 'Architecture Design',
    description: 'Planning the overall structure of the application.'
  },
  {
    title: 'Frontend Development',
    description: 'Building the user interface and client-side functionality.'
  },
  {
    title: 'Backend Development',
    description: 'Implementing server-side logic and database interactions.'
  },
  {
    title: 'Integration and Testing',
    description: 'Combining frontend and backend, followed by thorough testing.'
  },
  {
    title: 'Deployment and Maintenance',
    description: 'Launching the application and providing ongoing support.'
  }
]

const technologies = [
  { name: 'React', icon: '/tech-icons/react.svg' },
  { name: 'Angular', icon: '/tech-icons/angular.svg' },
  { name: 'Next.js', icon: '/tech-icons/nextjs.svg' },
  { name: 'Node.js', icon: '/tech-icons/nodejs.svg' },
  { name: 'Python', icon: '/tech-icons/python.svg' },


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
  },
  {
    name: 'PostgreSQL',
    icon: '/tech-icons/postgresql.svg',
    description: 'Advanced open-source relational database'
  },
  {
    name: 'MongoDB',
    icon: '/tech-icons/mongodb.svg',
    description: 'Document-oriented NoSQL database'
  },
  {
    name: 'MySQL',
    icon: '/tech-icons/mysql.svg',
    description: 'Open-source relational database management system'
  },
]

