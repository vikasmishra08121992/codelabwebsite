import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Developers() {
  return (
    <div className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">HIRE DEVELOPERS</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Access our pool of skilled developers ready to join your team and bring your projects to life
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((developer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
              <Image 
                src={developer.icon} 
                alt={developer.title} 
                width={150} 
                height={150} 
                quality={100}
                priority
                unoptimized 
                className="mb-4" 
              />
              <h2 className="text-2xl font-semibold mb-4">{developer.title}</h2>
              <p className="text-gray-600 mb-4">{developer.description}</p>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                {developer.skills.map((skill, i) => (
                  <li key={i} className="text-sm">{skill}</li>
                ))}
              </ul>
              <Link
                className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors duration-200"
                href={`/developers/${developer.developerName}`}
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const developers = [
  {
    title: "FRONTEND DEVELOPERS",
    description: "Expert frontend developers specializing in creating responsive, interactive user interfaces with modern frameworks and technologies.",
    icon: "/services/webser1.jpeg",
    developerName: "frontend-developers",
    skills: [
      "React, Angular, Vue.js",
      "HTML5, CSS3, JavaScript",
      "Responsive Design",
      "UI/UX Implementation"
    ]
  },
  {
    title: "BACKEND DEVELOPERS",
    description: "Skilled backend developers who build robust server-side applications, APIs, and database solutions for scalable systems.",
    icon: "/services/fullstack2.jpeg",
    developerName: "backend-developers",
    skills: [
      "Node.js, Python, Java",
      "Database Design & Management",
      "API Development",
      "Server Architecture"
    ]
  },
  {
    title: "FULLSTACK DEVELOPERS",
    description: "Versatile fullstack developers capable of handling both frontend and backend development with comprehensive project expertise.",
    icon: "/services/fullstack2.jpeg",
    developerName: "fullstack-developers",
    skills: [
      "MERN Stack Development",
      "Spring Boot Applications",
      "End-to-End Solutions",
      "Database Integration"
    ]
  },
  {
    title: "MOBILE DEVELOPERS",
    description: "Specialized mobile developers creating native and cross-platform applications for iOS and Android platforms.",
    icon: "/services/mobileDev1.jpeg",
    developerName: "mobile-developers",
    skills: [
      "React Native, Flutter",
      "iOS (Swift/Objective-C)",
      "Android (Kotlin/Java)",
      "Mobile UI/UX Design"
    ]
  },
  {
    title: "QUALITY ASSURANCE DEVELOPERS",
    description: "QA developers focused on ensuring software quality through comprehensive testing strategies and automation frameworks.",
    icon: "/services/qa2.jpeg",
    developerName: "qa-developers",
    skills: [
      "Automated Testing",
      "Manual Testing",
      "Performance Testing",
      "Test Strategy Planning"
    ]
  },
  {
    title: "DEVOPS & CI/CD DEVELOPERS",
    description: "DevOps engineers specializing in automation, deployment pipelines, and infrastructure management for seamless development workflows.",
    icon: "/services/devOps_1.png",
    developerName: "devops-developers",
    skills: [
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "Cloud Infrastructure",
      "Monitoring & Logging"
    ]
  }
]; 