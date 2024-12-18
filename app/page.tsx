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

      {/* <section className="bg-gradient-to-r from-secondary to-orange-400 py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Top Talent For Your Development Needs
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We offer expert developers who bring innovation and efficiency to your projects. Whether you need temporary support or a long-term partnership, we have the right talent to drive your success.
          </p>
          <div className="mb-8 text-gray-600">
            <p>Liferay | AEM | Spring Boot | ReactJS | React Native | NodeJS | AngularJS | DevOps | Quality Analyst</p>
          </div>
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
            <Link href="/contact">
              Hire Expert Developers Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section> */}
      {/* 
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Your Offshore Development Partner for Success.
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Scalable Solutions, Skilled Developers, Seamless Delivery.
              </p>
              <Link href="/contact" className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300">
                Get Started
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image src="/codelab-hero.png" alt="CodeLab Technologies Hero" width={600} height={400} />
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-4 bg-zinc-100">
        <div className="container mx-auto px-4 mt-12">
          <h2 className="text-3xl font-bold text-center mb-6">Our Service Offerings</h2>
          <p className="text-xl text-gray-600 mb-8 text-center">
            Our services empower your business with innovative, scalable, and tailored technology solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col items-center">
                <Image src={service.icon} alt={service.title} width={150} height={150} className="mb-4  object-cover" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4  bg-zinc-800">
        <div className="container mx-auto px-4 mt-12">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Why Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col items-center">
                <Image src={service.icon} alt={service.title} width={150} height={150} className="mb-4 object-cover" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    

      <TechnologyShowcase />

      <section className="bg-zinc-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Empowering Businesses with Cutting-Edge IT Solutions</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We are dedicated to providing innovative IT solutions that drive growth and efficiency for businesses in the digital age.
          </p>
          <Link href="/about" className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300">
            Learn More About Us
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
  }
]

