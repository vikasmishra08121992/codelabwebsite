import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '../components/slider'
import { TechnologyShowcase } from '../components/technology-showcase'

export default function Home() {
  return (
    <div>
      <Slider />
      
      <section className="py-4 bg-zinc-50">
        <div className="container mx-auto px-4 mt-12 mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Our Offshore Development Expertise</h2>
          <p className="text-xl text-gray-600 mb-8 text-center">
          Empowering your business with innovative offshore development services and tailored technology solutions. From skilled developers to end-to-end project execution, we ensure scalability, efficiency, and excellence in every delivery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
                <Image src={service.icon} alt={service.title} width={150} height={150} className="mb-4  object-cover" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechnologyShowcase />

      <section className="py-4  bg-zinc-50">
        <div className="container mx-auto px-4 mt-12 mb-12">
          <h2 className="text-3xl font-bold text-center  mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
                <Image src={service.icon} alt={service.title} width={150} height={150} className="mb-4 object-cover" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    

    

      <section className="bg-white py-10">
        <div className="container mx-auto px-4 text-center mb-4">
          <h2 className="text-3xl font-bold mb-8">Empowering Businesses with Cutting-Edge IT Solutions</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We are dedicated to providing innovative IT solutions that drive growth and efficiency for businesses in the digital age.
          </p>
          <Link href="/about" className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300">
          LET'S CONNECT
          </Link>
        </div>
      </section>
    </div>
  )
}



const whyChooseUs = [
  {
    title: "Expertise & Experience",
    description: "Over a decade of expertise in delivering innovative solutions tailored to meet your needs.",
    icon: "/services/exp1.jpeg"
  },
  {
    title: "Innovation & Creativity",
    description: "Cutting-edge technologies and creative approaches to solve complex problems.",
    icon: "/services/innovation.jpeg"
  },
  {
    title: "Client-Centric Approach",
    description: "We prioritize your business goals, ensuring solutions are aligned with your vision.",
    icon: "/services/client1.jpeg"
  },
  {
    title: "Agile Methodologies",
    description: "Rapid development cycles and flexible adjustments to meet changing needs.",
    icon: "/services/agile.jpeg"
  },
  {
    title: "Transparency & Integrity",
    description: "Clear communication and ethical practices at every stage of the project.",
    icon: "/services/transparency.jpeg"
  },
  {
    title: "Scalable & Reliable Solutions",
    description: "Robust architectures designed to grow and adapt alongside your business.",
    icon: "/services/scalable.jpeg"
  }
];

const services = [
  {
    title: "Web Development",
    description: "Custom web applications tailored to your business needs.",
    icon: "/services/webser1.jpeg",
  },
  {
    title: "Fullstack Development",
    description: "Turn your data into actionable insights for better decision-making.",
    icon: "/services/fullstack2.jpeg",
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    icon: "/mobileDev1.jpeg"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure and services.",
    icon: "/services/cloudser.jpeg",
  },
  {
    title: "Quality Assurance & Testing",
    description: "Intelligent solutions to automate and optimize processes.",
    icon: "/services/qa2.jpeg",
  },

  {
    title: "DEVOPS & CI/CD Services",
    description: "Protect your digital assets with our robust security solutions.",
    icon: "/services/devops.jpeg",
  },
  {
    title: "Dedicated Development Team",
    description: "Hire skilled experts for portal development with latest tech expertise.",
    icon: "/services/dedicated.jpeg",
  },
  
  {
    title: "SaaS Development",
    description: "We create distinct software services within one unified platform.",
    icon: "/services/saas.jpeg",
  },

  
  

]

