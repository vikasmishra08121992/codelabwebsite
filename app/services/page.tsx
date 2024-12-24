import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Services() {
  return (
    <div className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
              <Image src={service.icon} alt={service.title} width={150} height={150} className="mb-4" />
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="list-disc list-inside text-gray-600 ">
                {/* {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))} */}

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
    shortDesc: "Create powerful, scalable web applications tailored to your business needs.",
    description: "Our expert web development team specializes in building modern, responsive, and scalable web applications. We utilize cutting-edge technologies and frameworks like React, Next.js, and Vue.js to create exceptional user experiences. From e-commerce platforms to enterprise-level applications, we deliver custom solutions that drive business growth and user engagement.",
    icon: "/services/webser1.jpeg",
    serviceName: "web-development",
    features: [
      "Custom web application development",
      "Responsive design",
      "E-commerce solutions",
      "Content Management Systems (CMS)"
    ]
  },
  {
    title: "Mobile Development",
    shortDesc: "Build engaging mobile apps for iOS and Android platforms.",
    description: "Transform your mobile presence with our comprehensive mobile development services. We excel in creating native iOS and Android applications, as well as cross-platform solutions using React Native and Flutter. Our mobile apps combine stunning design with powerful functionality to deliver seamless user experiences that keep your customers engaged.",
    icon: "/services/mobileDev1.jpeg",
    serviceName: "mobile-development",
    features: [
      "Native iOS and Android development",
      "Cross-platform development",
      "Mobile app UI/UX design",
      "App maintenance and support"
    ]
  },
  {
    title: "Fullstack Development",
    shortDesc: "Develop robust and scalable web applications using Spring Boot and MERN stack.",
    description: "Our fullstack development services provide end-to-end solutions that seamlessly integrate frontend and backend technologies. We specialize in MERN (MongoDB, Express.js, React, Node.js) stack and Spring Boot development, ensuring robust, scalable, and maintainable applications that meet your business requirements while following best practices in software development.",

    icon: "/services/fullstack2.jpeg",
    serviceName: "fullstack-development",
    features: [
      "Frontend and backend integration",
      "Database design and optimization",
      "API development and integration",
      "Performance tuning and scalability"
    ]
  },
  {
    title: "SaaS Development",
    shortDesc: "We create distinct software services within one unified platform.",
    description: "Transform your business idea into a scalable SaaS solution. Our SaaS development services focus on creating flexible, multi-tenant applications that can serve diverse client needs through a single, unified platform. We implement robust architecture, secure user management, subscription billing, and analytics to help you deliver value to your customers while maintaining operational efficiency.",
    icon: "/services/saas.jpeg",
    serviceName: "saas-development",
    link: "/services/saas-development"
  },
  {
    title: "Dedicated Development Team",
    shortDesc: "Hire skilled experts for portal development with latest tech expertise.",
    description: "Access a pool of talented developers ready to join your team. Our dedicated development team service provides you with carefully selected professionals who bring extensive experience in portal development and the latest technologies. We ensure seamless integration with your existing workflow, maintaining clear communication and delivering consistent results while adapting to your specific requirements and methodologies.",
    icon: "/services/dedicated.jpeg",
    serviceName: "dedicated-development-team",
    link: "/services/dedicated-development-team"
  },
  {
    title: "Cloud Solutions",
    shortDesc: "Harness the power of cloud computing for your business.",
    description: "Leverage the full potential of cloud computing with our comprehensive cloud solutions. We offer expertise in AWS, Azure, and Google Cloud platforms, providing services from cloud migration and infrastructure setup to optimization and maintenance. Our cloud solutions ensure scalability, security, and cost-effectiveness for your business operations.",

    icon: "/services/cloudser.jpeg",
    serviceName: "cloud-development",
    features: [
      "Cloud migration and deployment",
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Cloud security and compliance"
    ]
  },
  {
    title: "Quality Assurance & Testing",
    shortDesc: "Ensure the quality of your applications with our comprehensive testing solutions.",
    description: "Deliver flawless software with our comprehensive quality assurance and testing services. We implement robust testing strategies including automated testing, performance testing, security testing, and user acceptance testing. Our QA team ensures your applications meet the highest quality standards while maintaining optimal performance and reliability.",

    icon: "/services/qa2.jpeg",
    serviceName: "qa-testing",
    features: [
      "Manual and automated testing",
      "Performance and load testing",
      "Security testing",
      "Test strategy and planning"
    ]
  },
  {
    title: "DEVOPS & CI/CD Services",
    shortDesc: "Streamline your development process with our DevOps and CI/CD expertise.",
    description: "Optimize your development lifecycle with our DevOps and CI/CD services. We implement automated deployment pipelines, container orchestration, and infrastructure as code solutions. Our expertise in tools like Jenkins, Docker, and Kubernetes helps streamline your development process, improve collaboration, and ensure faster, more reliable software delivery.",

    icon: "/services/devops.jpeg",
    serviceName: "devops-development",
    features: [
      "Continuous integration and delivery",
      "Infrastructure automation",
      "Monitoring and logging solutions",
      "Containerization with Docker and Kubernetes"
    ]
  }
];


