'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const categories = [
  { id: 'generative-ai', name: 'Generative AI' },
  { id: 'cloud', name: 'Cloud' },
  { id: 'data-engineering', name: 'Data Engineering' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'database', name: 'Database' },
  { id: 'mobile', name: 'Mobile' }
]

const technologies = {
  'generative-ai': [
    {
      name: 'TensorFlow',
      icon: '/tech-icons/tensorflow.svg',
      description: 'Open-source machine learning framework'
    },
    {
      name: 'PyTorch',
      icon: '/tech-icons/pytorch.svg',
      description: 'Deep learning framework for fast, flexible experimentation'
    },
    {
      name: 'OpenAI GPT',
      icon: '/tech-icons/openai.svg',
      description: 'State-of-the-art language model for text generation'
    },
    {
      name: 'DALL-E',
      icon: '/tech-icons/dalle.svg',
      description: 'AI system that creates images from text descriptions'
    },
    {
      name: 'Stable Diffusion',
      icon: '/tech-icons/stable-diffusion.svg',
      description: 'Open-source text-to-image generation model'
    },
    {
      name: 'Hugging Face',
      icon: '/tech-icons/huggingface.svg',
      description: 'Platform for building, training and deploying ML models'
    }
  ],
  cloud: [
    {
      name: 'AWS',
      icon: '/tech-icons/aws.svg',
      description: 'Comprehensive cloud computing platform'
    },
    {
      name: 'Google Cloud',
      icon: '/tech-icons/gcp.svg',
      description: 'Suite of cloud computing services'
    },
    {
      name: 'Microsoft Azure',
      icon: '/tech-icons/azure.svg',
      description: 'Cloud computing service for building, testing, and managing applications'
    },
    {
      name: 'Kubernetes',
      icon: '/tech-icons/kubernetes.svg',
      description: 'Open-source container orchestration platform'
    },
    {
      name: 'Docker',
      icon: '/tech-icons/docker.svg',
      description: 'Platform for developing, shipping, and running applications in containers'
    },
    {
      name: 'Terraform',
      icon: '/tech-icons/terraform.svg',
      description: 'Infrastructure as Code software tool'
    }
  ],
  'data-engineering': [
    {
      name: 'Apache Spark',
      icon: '/tech-icons/apache-spark.svg',
      description: 'Unified analytics engine for large-scale data processing'
    },
    {
      name: 'Apache Kafka',
      icon: '/tech-icons/apache-kafka.svg',
      description: 'Distributed event streaming platform'
    },
    {
      name: 'Apache Airflow',
      icon: '/tech-icons/apache-airflow.svg',
      description: 'Platform to programmatically author, schedule and monitor workflows'
    },
    {
      name: 'Databricks',
      icon: '/tech-icons/databricks.svg',
      description: 'Unified data analytics platform'
    },
    {
      name: 'Snowflake',
      icon: '/tech-icons/snowflake.svg',
      description: 'Cloud-based data warehousing platform'
    },
    {
      name: 'dbt',
      icon: '/tech-icons/dbt.svg',
      description: 'Data transformation tool that enables data analysts to transform data'
    }
  ],
  frontend: [
    {
      name: 'React',
      icon: '/tech-icons/react.svg',
      description: 'JavaScript library for building user interfaces'
    },
    {
      name: 'Vue.js',
      icon: '/tech-icons/vue.svg',
      description: 'Progressive JavaScript framework for UIs'
    },
    {
      name: 'Angular',
      icon: '/tech-icons/angular.svg',
      description: 'Platform for building mobile and desktop web applications'
    },
    {
      name: 'Next.js',
      icon: '/tech-icons/nextjs.svg',
      description: 'React framework for production-grade applications'
    },
    {
      name: 'Svelte',
      icon: '/tech-icons/svelte.svg',
      description: 'Compiler for building fast web applications'
    },
    {
      name: 'Tailwind CSS',
      icon: '/tech-icons/tailwindcss.svg',
      description: 'Utility-first CSS framework'
    }
  ],
  backend: [
    {
      name: 'Node.js',
      icon: '/tech-icons/nodejs.svg',
      description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine'
    },
    {
      name: 'Python',
      icon: '/tech-icons/python.svg',
      description: 'Interpreted, high-level, general-purpose programming language'
    },
    {
      name: 'Java',
      icon: '/tech-icons/java.svg',
      description: 'Object-oriented programming language'
    },
    {
      name: 'Go',
      icon: '/tech-icons/go.svg',
      description: 'Statically typed, compiled programming language'
    },
    {
      name: 'Ruby on Rails',
      icon: '/tech-icons/rails.svg',
      description: 'Server-side web application framework written in Ruby'
    },
    {
      name: 'Django',
      icon: '/tech-icons/django.svg',
      description: 'High-level Python web framework'
    }
  ],
  database: [
    {
      name: 'PostgreSQL',
      icon: '/tech-icons/postgresql.svg',
      description: 'Advanced open-source relational database'
    },
    {
      name: 'MongoDB',
      icon: '/tech-icons/mongodb.svg',
      description: 'Document-oriented NoSQL database'
    },
    {
      name: 'MySQL',
      icon: '/tech-icons/mysql.svg',
      description: 'Open-source relational database management system'
    },
    {
      name: 'Redis',
      icon: '/tech-icons/redis.svg',
      description: 'In-memory data structure store'
    },
    {
      name: 'Elasticsearch',
      icon: '/tech-icons/elasticsearch.svg',
      description: 'Distributed, RESTful search and analytics engine'
    },
    {
      name: 'Cassandra',
      icon: '/tech-icons/cassandra.svg',
      description: 'Highly-scalable NoSQL database'
    }
  ],
  mobile: [
    {
      name: 'Native Android',
      icon: '/tech-icons/android.svg',
      description: 'Build native Android applications'
    },
    {
      name: 'Native iOS',
      icon: '/tech-icons/apple.svg',
      description: 'Develop native iOS applications'
    },
    {
      name: 'Swift',
      icon: '/tech-icons/swift.svg',
      description: 'Modern programming for iOS'
    },
    {
      name: 'Kotlin',
      icon: '/tech-icons/kotlin.svg',
      description: 'Modern Android development'
    },
    {
      name: 'React Native',
      icon: '/tech-icons/react-native.svg',
      description: 'Cross-platform mobile apps'
    },
    {
      name: 'Flutter',
      icon: '/tech-icons/flutter.svg',
      description: 'Beautiful native applications'
    },
    {
      name: 'Firebase',
      icon: '/tech-icons/firebase.svg',
      description: 'Mobile backend and analytics'
    }
  ]
}

export function TechnologyShowcase() {
  const [activeCategory, setActiveCategory] = useState('mobile')

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
          Technologies That Define Our Craft
          </h2>
          <p className="text-gray-600 text-lg">
          We leverage the latest tools and technologies to deliver cutting-edge IT solutions tailored to your needs!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies[activeCategory as keyof typeof technologies]?.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

