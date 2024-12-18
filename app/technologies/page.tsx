import Image from 'next/image'

export default function Technologies() {
  return (
    <div className="bg-zinc-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Technologies</h1>
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
  { name: "React", icon: "/tech-icons/react.svg" },
  { name: "Node.js", icon: "/tech-icons/nodejs.svg" },
  { name: "Java", icon: "/tech-icons/java.svg" },
  { name: "Angular", icon: "/tech-icons/angular.svg" },
 // { name: "Vue.js", icon: "/tech-icons/vuejs.svg" },
 // { name: "Django", icon: "/tech-icons/django.svg" },
  { name: "Flutter", icon: "/tech-icons/flutter.svg" },
  { name: "AWS", icon: "/tech-icons/aws.svg" },
  { name: "Google Cloud", icon: "/tech-icons/gcp.svg" },
  { name: "Microsoft Azure", icon: "/tech-icons/azure.svg" },
  { name: "Docker", icon: "/tech-icons/docker.svg" },
  { name: "Kubernetes", icon: "/tech-icons/kubernetes.svg" },
 // { name: "TensorFlow", icon: "/tech-icons/tensorflow.svg" },
 // { name: "PyTorch", icon: "/tech-icons/pytorch.svg" }
]

