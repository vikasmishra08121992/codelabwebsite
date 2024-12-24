import Image from 'next/image'
import { ServiceLayout } from '../../../components/service-layout';
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function DedicatedDevelopmentTeam() {
  return (
    <ServiceLayout
      title="DEDICATED DEVELOPMENT TEAM"
      subtitle="Access skilled development experts ready to bring your vision to life"
    >
      <div className="grid gap-16">
        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-8">OUR DEDICATED TEAM ADVANTAGES</h2>
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
          <h2 className="text-2xl font-bold mb-8">OUR TEAM INTEGRATION PROCESS</h2>
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

        {/* Expertise */}
        <section>
          <h2 className="text-2xl font-bold mb-8">OUR TECHNICAL EXPERTISE</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {expertise.map((tech, index) => (
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
    title: 'Skilled Professionals',
    description: 'Access to pre-vetted developers with proven expertise in various technologies.',
    icon: CheckCircle
  },
  {
    title: 'Flexible Scaling',
    description: 'Easily scale your team up or down based on project requirements.',
    icon: CheckCircle
  },
  {
    title: 'Cost-Effective',
    description: 'Reduce operational costs while maintaining high-quality development.',
    icon: CheckCircle
  },
  {
    title: 'Seamless Integration',
    description: 'Teams that adapt to your workflow and communication practices.',
    icon: CheckCircle
  },
  {
    title: 'Dedicated Support',
    description: 'Full-time developers focused solely on your project.',
    icon: CheckCircle
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous quality control and regular progress reporting.',
    icon: CheckCircle
  }
]

const process = [
  {
    title: 'Requirements Analysis',
    description: 'Understanding your technical needs and team requirements.'
  },
  {
    title: 'Team Selection',
    description: 'Choosing the right developers with matching skill sets.'
  },
  {
    title: 'Integration Planning',
    description: 'Setting up communication channels and workflow processes.'
  },
  {
    title: 'Onboarding',
    description: 'Smooth integration of developers into your existing team.'
  },
  {
    title: 'Regular Monitoring',
    description: 'Continuous oversight of team performance and progress.'
  },
  {
    title: 'Optimization',
    description: 'Regular feedback and process improvement.'
  }
]

const expertise = [
  { name: "AWS", icon: "/tech-icons/aws.svg" },
  { name: "Google Cloud", icon: "/tech-icons/gcp.svg" },
  { name: "Microsoft Azure", icon: "/tech-icons/azure.svg" },
  { name: "Kubernetes", icon: "/tech-icons/kubernetes.svg" },
  { name: "Docker", icon: "/tech-icons/docker.svg" },
  { name: "Terraform", icon: "/tech-icons/terraform.svg" },
  { name: "React", icon: "/tech-icons/react.svg" },
  { name: "Vue.js", icon: "/tech-icons/vue.svg" },
  { name: "Angular", icon: "/tech-icons/angular.svg" },
  { name: "Next.js", icon: "/tech-icons/nextjs.svg" },
  { name: "Tailwind CSS", icon: "/tech-icons/tailwind.svg" },
  { name: "Liferay", icon: "/tech-icons/liferay.svg" },
  { name: "Node.js", icon: "/tech-icons/nodejs.svg" },
  { name: "Python", icon: "/tech-icons/python.svg" },
  { name: "ExpressJS", icon: "/tech-icons/expressjs.svg" },
  { name: "Spring Boot", icon: "/tech-icons/springboot.svg" },
  { name: "NextJS", icon: "/tech-icons/java.svg" },
  { name: "NestJS", icon: "/tech-icons/nestjs.svg" },
  { name: "PostgreSQL", icon: "/tech-icons/postgresql.svg" },
  { name: "MongoDB", icon: "/tech-icons/mongodb.svg" },
  { name: "MySQL", icon: "/tech-icons/mysql.svg" },
  { name: "Redis", icon: "/tech-icons/redis.svg" },
  { name: "Elasticsearch", icon: "/tech-icons/elasticsearch.svg" },
  { name: "Native Android", icon: "/tech-icons/android.svg" },
  { name: "Native iOS", icon: "/tech-icons/ios.svg" },
  { name: "Swift", icon: "/tech-icons/swift.svg" },
  { name: "Kotlin", icon: "/tech-icons/kotlin.svg" },
  { name: "React Native", icon: "/tech-icons/react-native.svg" },
  { name: "Flutter", icon: "/tech-icons/flutter.svg" }
]

