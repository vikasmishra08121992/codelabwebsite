import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Services() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col items-center">
              <Image src={service.icon} alt={service.title} width={150} height={150} className="mb-4" />
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="list-disc list-inside text-gray-600 ">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
            
              <Link 
              className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors duration-200"
              href={`/services/${service.serviceName}`} >Learn More <ArrowRight className="ml-2 h-4 w-4" /> </Link>
            
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}



const services = [
  {
    title: "Web Development",
    description: "Create powerful, scalable web applications tailored to your business needs.",
    icon: "/services/webser1.jpeg",
    serviceName : "web-development",
    features: [
      "Custom web application development",
      "Responsive design",
      "E-commerce solutions",
      "Content Management Systems (CMS)"
    ]
  },
  {
    title: "Mobile Development",
    description: "Build engaging mobile apps for iOS and Android platforms.",
    icon: "/services/mobileDev1.jpeg",
    serviceName : "mobile-development",
    features: [
      "Native iOS and Android development",
      "Cross-platform development",
      "Mobile app UI/UX design",
      "App maintenance and support"
    ]
  },
  {
    title: "Fullstack Development",
    description: "Develop robust and scalable web applications using Spring Boot and MERN stack.",
    icon: "/services/fullstack2.jpeg",
    serviceName : "fullstack-development",
    features: [
      "Frontend and backend integration",
      "Database design and optimization",
      "API development and integration",
      "Performance tuning and scalability"
    ]
  },
  {
    title: "Cloud Solutions",
    description: "Harness the power of cloud computing for your business.",
    icon: "/services/cloudser.jpeg",
    serviceName : "cloud-development",
    features: [
      "Cloud migration and deployment",
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Cloud security and compliance"
    ]
  },
  {
    title: "Quality Assurance & Testing",
    description: "Ensure the quality of your applications with our comprehensive testing solutions.",
    icon: "/services/qa2.jpeg",
    serviceName : "qa-testing",
    features: [
      "Manual and automated testing",
      "Performance and load testing",
      "Security testing",
      "Test strategy and planning"
    ]
  },
  {
    title: "DEVOPS & CI/CD Services",
    description: "Streamline your development process with our DevOps and CI/CD expertise.",
    icon: "/services/devops.jpeg",
    serviceName : "devops-development",
    features: [
      "Continuous integration and delivery",
      "Infrastructure automation",
      "Monitoring and logging solutions",
      "Containerization with Docker and Kubernetes"
    ]
  }
];


