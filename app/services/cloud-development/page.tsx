import Image from 'next/image'
import { ServiceLayout } from '../../../components/service-layout';
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function CloudSolutions() {
  return (
    <ServiceLayout
      title="Cloud Solutions"
      subtitle="Scalable and secure cloud infrastructure and services for modern businesses"
    >
      <div className="grid gap-16">
        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Our Cloud Solutions Expertise</h2>
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
          <h2 className="text-2xl font-bold mb-8">Our Cloud Solutions Process</h2>
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
          <h2 className="text-2xl font-bold mb-8">Technologies We Use</h2>
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
    title: 'Cloud Migration',
    description: 'Seamlessly move your existing infrastructure and applications to the cloud.',
    icon: CheckCircle
  },
  {
    title: 'Cloud-Native Development',
    description: 'Build scalable applications designed specifically for cloud environments.',
    icon: CheckCircle
  },
  {
    title: 'Serverless Architecture',
    description: 'Implement serverless solutions for improved scalability and reduced costs.',
    icon: CheckCircle
  },
  {
    title: 'Multi-Cloud Strategy',
    description: 'Leverage multiple cloud providers for optimal performance and redundancy.',
    icon: CheckCircle
  },
  {
    title: 'Cloud Security',
    description: 'Implement robust security measures to protect your cloud infrastructure.',
    icon: CheckCircle
  },
  {
    title: 'Cloud Optimization',
    description: 'Optimize cloud resources for cost-efficiency and performance.',
    icon: CheckCircle
  }
]

const process = [
  {
    title: 'Assessment',
    description: 'Evaluate current infrastructure and define cloud migration goals.'
  },
  {
    title: 'Strategy Development',
    description: 'Create a comprehensive cloud adoption or optimization strategy.'
  },
  {
    title: 'Architecture Design',
    description: 'Design scalable and secure cloud architecture.'
  },
  {
    title: 'Migration/Implementation',
    description: 'Execute the migration or implement new cloud solutions.'
  },
  {
    title: 'Testing and Optimization',
    description: 'Ensure everything works as expected and optimize for performance.'
  },
  {
    title: 'Ongoing Management',
    description: 'Provide continuous support, monitoring, and optimization.'
  }
]

// const technologies = [
//   { name: 'AWS', icon: '/tech-icons/aws.svg' },
//   { name: 'Azure', icon: '/tech-icons/azure.svg' },
//   { name: 'Google Cloud', icon: '/tech-icons/gcp.svg' },
//   { name: 'Kubernetes', icon: '/tech-icons/kubernetes.svg' },
//   { name: 'Docker', icon: '/tech-icons/docker.svg' },
//   { name: 'Terraform', icon: '/tech-icons/terraform.svg' },
//   { name: 'Ansible', icon: '/tech-icons/ansible.svg' },
//   { name: 'CloudFormation', icon: '/tech-icons/cloudformation.svg' },
//   { name: 'Lambda', icon: '/tech-icons/lambda.svg' },
//   { name: 'Azure Functions', icon: '/tech-icons/azure-functions.svg' },
//   { name: 'Cloud Run', icon: '/tech-icons/cloud-run.svg' },
//   { name: 'Istio', icon: '/tech-icons/istio.svg' }
// ]
const technologies = [
{
  name: 'AWS',
  icon: '/tech-icons/aws.svg',
  description: 'Comprehensive cloud computing platform'
},
{
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
  name: 'Terraform',
  icon: '/tech-icons/terraform.svg',
  description: 'Infrastructure as Code software tool'
}]