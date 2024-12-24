import Image from 'next/image'

export default function Technologies() {
  return (
    <div className="bg-zinc-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">OUR TECHNOLOGIES</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          At CodeLab Technologies, we leverage cutting-edge technologies to deliver innovative solutions for our clients. Our expertise spans across various domains, ensuring we can tackle any challenge.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col items-center">
              <Image src={tech.icon} alt={tech.name} width={64} height={64} className="mb-4" />
              <h2 className="text-xl font-semibold text-center">{tech.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const technologies = [
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
];

