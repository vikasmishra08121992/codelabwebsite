import Image from 'next/image'
import { ServiceLayout } from '../../../components/service-layout';
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function QADevelopers() {
  return (
    <ServiceLayout
      title="QUALITY ASSURANCE DEVELOPERS"
      subtitle="QA developers focused on ensuring software quality through comprehensive testing strategies and automation frameworks"
      headerImage="/services/servicesHeader.png"
    >
      <div className="grid gap-16">
        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-8">OUR QA DEVELOPMENT EXPERTISE</h2>
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
            <h2 className="text-2xl font-bold mb-8">OUR TESTING APPROACH</h2>
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
            <h2 className="text-2xl font-bold mb-8">TESTING TOOLS & FRAMEWORKS</h2>
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
    title: 'Automated Testing',
    description: 'Develop comprehensive automated test suites using Selenium, Cypress, and other testing frameworks.',
    icon: CheckCircle
  },
  {
    title: 'Manual Testing',
    description: 'Perform thorough manual testing including functional, regression, and user acceptance testing.',
    icon: CheckCircle
  },
  {
    title: 'Performance Testing',
    description: 'Conduct load testing, stress testing, and performance optimization using JMeter and other tools.',
    icon: CheckCircle
  },
  {
    title: 'API Testing',
    description: 'Test REST APIs and GraphQL endpoints using Postman, RestAssured, and custom automation scripts.',
    icon: CheckCircle
  },
  {
    title: 'Mobile App Testing',
    description: 'Comprehensive mobile testing across different devices, OS versions, and screen sizes.',
    icon: CheckCircle
  },
  {
    title: 'Test Strategy Planning',
    description: 'Design comprehensive test strategies and create detailed test plans for complex projects.',
    icon: CheckCircle
  }
]

const process = [
  {
    title: 'Test Strategy Development',
    description: 'Creating comprehensive test strategies based on project requirements and risk analysis.'
  },
  {
    title: 'Test Case Design',
    description: 'Designing detailed test cases covering functional, non-functional, and edge case scenarios.'
  },
  {
    title: 'Automation Framework Setup',
    description: 'Setting up robust automation frameworks for efficient and reliable test execution.'
  },
  {
    title: 'Test Execution',
    description: 'Executing manual and automated tests with detailed reporting and defect tracking.'
  },
  {
    title: 'Performance Analysis',
    description: 'Conducting performance testing and analyzing results for optimization recommendations.'
  },
  {
    title: 'Quality Reporting',
    description: 'Providing comprehensive quality reports and recommendations for continuous improvement.'
  }
]

const technologies = [
  { name: 'Selenium', icon: '/tech-icons/selenium.svg' },
  { name: 'Cypress', icon: '/tech-icons/cypress.svg' },
  { name: 'JMeter', icon: '/tech-icons/jmeter.svg' },
  { name: 'Postman', icon: '/tech-icons/postman.svg' },
  { name: 'JUnit', icon: '/tech-icons/junitimage.svg' },
  { name: 'TestNG', icon: '/tech-icons/testng.png' },
  { name: 'NUnit', icon: '/tech-icons/Nunit.png' },
  { name: 'TestRail', icon: '/tech-icons/testrail.svg' },
  { name: 'Appium', icon: '/tech-icons/appium.svg' },
  { name: 'RestAssured', icon: '/tech-icons/restassured.svg' },
  { name: 'Jenkins', icon: '/tech-icons/jenkins.svg' },
  { name: 'GitHub Actions', icon: '/tech-icons/GitHub_Logo.png' }
] 