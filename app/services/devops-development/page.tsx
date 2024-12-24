import Image from 'next/image'
import { ServiceLayout } from '../../../components/service-layout';
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function DevOpsCICD() {
  return (
    <ServiceLayout
      title="DEVOPS & CI/CD SERVICES"
      subtitle="Streamline your development and deployment processes for faster, more reliable software delivery"
    >
      <div className="grid gap-16">
        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-8">OUR DEVOPS & CI/CD EXPERTISE</h2>
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
          <h2 className="text-2xl font-bold mb-8">OUR DEVOPS & CI/CD IMPLEMENTATION PROCESS</h2>
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
    title: 'Continuous Integration',
    description: 'Automate code integration and testing for faster development cycles.',
    icon: CheckCircle
  },
  {
    title: 'Continuous Delivery',
    description: 'Streamline the process of deploying code to production environments.',
    icon: CheckCircle
  },
  {
    title: 'Infrastructure as Code',
    description: 'Manage and provision infrastructure using code and automation.',
    icon: CheckCircle
  },
  {
    title: 'Containerization',
    description: 'Implement container technologies for consistent and portable deployments.',
    icon: CheckCircle
  },
  {
    title: 'Monitoring and Logging',
    description: 'Set up comprehensive monitoring and logging solutions for better insights.',
    icon: CheckCircle
  },
  {
    title: 'DevSecOps',
    description: 'Integrate security practices throughout the development and deployment process.',
    icon: CheckCircle
  }
]

const process = [
  {
    title: 'Assessment',
    description: 'Evaluate current processes and identify areas for improvement.'
  },
  {
    title: 'Strategy Development',
    description: 'Create a tailored DevOps and CI/CD strategy for your organization.'
  },
  {
    title: 'Tool Selection',
    description: 'Choose the right set of tools and technologies for your needs.'
  },
  {
    title: 'Implementation',
    description: 'Set up and configure DevOps tools and CI/CD pipelines.'
  },
  {
    title: 'Training and Adoption',
    description: 'Train your team and facilitate the adoption of new practices.'
  },
  {
    title: 'Continuous Improvement',
    description: 'Regularly review and optimize your DevOps and CI/CD processes.'
  }
]

const technologies = [
  { name: 'Jenkins', icon: '/tech-icons/jenkins.svg' },
  { name: 'GitHub', icon: '/tech-icons/GitHub_Logo.png' },
  { name: 'Docker', icon: '/tech-icons/docker.svg' },
  { name: 'Kubernetes', icon: '/tech-icons/kubernetes.svg' },
  { name: 'Terraform', icon: '/tech-icons/terraform.svg' },
  { name: 'Prometheus', icon: '/tech-icons/prometheus.svg' },
  { name: 'Grafana', icon: '/tech-icons/grafana.svg' },
  {
    name: 'AWS',
    icon: '/tech-icons/aws.svg',
    description: 'Comprehensive cloud computing platform'
  },
  
]

