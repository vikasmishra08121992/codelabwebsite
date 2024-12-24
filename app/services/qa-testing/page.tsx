import Image from 'next/image'
import { ServiceLayout } from '../../../components/service-layout';
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function QualityAssuranceTesting() {
  return (
    <ServiceLayout
      title="Quality Assurance & Testing Services"
      subtitle="Ensure the highest quality and reliability of your software products"
    >
      <div className="grid gap-16">
        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Our Quality Assurance & Testing Expertise</h2>
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
          <h2 className="text-2xl font-bold mb-8">Our Quality Assurance & Testing Process</h2>
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
    title: 'Functional Testing',
    description: 'Ensure all features work as intended across different scenarios.',
    icon: CheckCircle
  },
  {
    title: 'Performance Testing',
    description: 'Evaluate system performance under various load conditions.',
    icon: CheckCircle
  },
  {
    title: 'Security Testing',
    description: 'Identify and address potential security vulnerabilities.',
    icon: CheckCircle
  },
  {
    title: 'Usability Testing',
    description: 'Assess the user-friendliness and intuitiveness of your software.',
    icon: CheckCircle
  },
  {
    title: 'Automated Testing',
    description: 'Implement efficient, repeatable automated test suites.',
    icon: CheckCircle
  },
  {
    title: 'Continuous Integration Testing',
    description: 'Integrate testing into your CI/CD pipeline for faster feedback.',
    icon: CheckCircle
  }
]

const process = [
  {
    title: 'Test Planning',
    description: 'Define testing objectives, scope, and strategies.'
  },
  {
    title: 'Test Case Development',
    description: 'Create comprehensive test cases and scenarios.'
  },
  {
    title: 'Test Environment Setup',
    description: 'Prepare and configure testing environments.'
  },
  {
    title: 'Test Execution',
    description: 'Perform manual and automated testing as planned.'
  },
  {
    title: 'Defect Tracking and Reporting',
    description: 'Document and communicate identified issues.'
  },
  {
    title: 'Regression Testing',
    description: 'Ensure new changes do not affect existing functionality.'
  }
]

const technologies = [
  { name: 'Selenium', icon: '/tech-icons/selenium.svg' },
  { name: 'JUnit', icon: '/tech-icons/junit1.svg' },
  { name: 'JMeter', icon: '/tech-icons/jmeter.svg' },
  { name: 'Postman', icon: '/tech-icons/postman.svg' },
  { name: 'TestRail', icon: '/tech-icons/testrail.svg' },
  { name: 'Jenkins', icon: '/tech-icons/jenkins.svg' },
  { name: 'TestNG', icon: '/tech-icons/testng.png' },
     { name: 'Nunit', icon: '/tech-icons/Nunit.png' },
]

