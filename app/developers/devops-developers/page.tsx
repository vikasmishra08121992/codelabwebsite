import Image from 'next/image'
import { ServiceLayout } from '../../../components/service-layout';
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function DevOpsDevelopers() {
  return (
    <ServiceLayout
      title="DEVOPS & CI/CD DEVELOPERS"
      subtitle="DevOps engineers specializing in automation, deployment pipelines, and infrastructure management for seamless development workflows"
      headerImage="/services/servicesHeader.png"
    >
      <div className="grid gap-16">
        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-8">OUR DEVOPS DEVELOPMENT EXPERTISE</h2>
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
            <h2 className="text-2xl font-bold mb-8">OUR DEVOPS APPROACH</h2>
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
            <h2 className="text-2xl font-bold mb-8">DEVOPS TOOLS & TECHNOLOGIES</h2>
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
    title: 'CI/CD Pipeline Development',
    description: 'Build automated deployment pipelines using Jenkins, GitHub Actions, and other CI/CD tools.',
    icon: CheckCircle
  },
  {
    title: 'Container Orchestration',
    description: 'Manage containerized applications using Docker and Kubernetes for scalable deployments.',
    icon: CheckCircle
  },
  {
    title: 'Infrastructure as Code',
    description: 'Automate infrastructure provisioning using Terraform, CloudFormation, and Ansible.',
    icon: CheckCircle
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Design and manage cloud infrastructure on AWS, Azure, and Google Cloud Platform.',
    icon: CheckCircle
  },
  {
    title: 'Monitoring & Logging',
    description: 'Implement comprehensive monitoring and logging solutions using Prometheus, Grafana, and ELK stack.',
    icon: CheckCircle
  },
  {
    title: 'Security & Compliance',
    description: 'Ensure security best practices and compliance requirements in DevOps processes.',
    icon: CheckCircle
  }
]

const process = [
  {
    title: 'Infrastructure Assessment',
    description: 'Analyzing current infrastructure and identifying automation opportunities and improvements.'
  },
  {
    title: 'CI/CD Pipeline Design',
    description: 'Designing automated build, test, and deployment pipelines for efficient software delivery.'
  },
  {
    title: 'Infrastructure Automation',
    description: 'Implementing Infrastructure as Code and automated provisioning using modern tools.'
  },
  {
    title: 'Container Implementation',
    description: 'Containerizing applications and setting up orchestration for scalable deployments.'
  },
  {
    title: 'Monitoring Setup',
    description: 'Implementing comprehensive monitoring, logging, and alerting systems.'
  },
  {
    title: 'Security & Optimization',
    description: 'Ensuring security compliance and optimizing performance for production environments.'
  }
]

const technologies = [
  { name: 'Docker', icon: '/tech-icons/docker.svg' },
  { name: 'Kubernetes', icon: '/tech-icons/kubernetes.svg' },
  { name: 'Jenkins', icon: '/tech-icons/jenkins.svg' },
  { name: 'Terraform', icon: '/tech-icons/terraform.svg' },
  { name: 'AWS', icon: '/tech-icons/aws.svg' },
  { name: 'Azure', icon: '/tech-icons/azure.svg' },
  { name: 'Google Cloud', icon: '/tech-icons/gcp.svg' },
  { name: 'Prometheus', icon: '/tech-icons/prometheus.svg' },
  { name: 'Grafana', icon: '/tech-icons/grafana.svg' },
  { name: 'Elasticsearch', icon: '/tech-icons/elasticsearch.svg' },
  { name: 'Ansible', icon: '/tech-icons/ansible.svg' },
  { name: 'GitHub Actions', icon: '/tech-icons/GitHub_Logo.png' }
] 