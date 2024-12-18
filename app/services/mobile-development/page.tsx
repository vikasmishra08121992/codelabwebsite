import Image from 'next/image'
import { ServiceLayout } from '../../../components/service-layout';
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function MobileDevelopment() {
  return (
    <ServiceLayout
      title="Mobile Development Services"
      subtitle="Build powerful, user-friendly mobile applications for iOS and Android platforms"
    >
      <div className="grid gap-16">
        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Our Mobile Development Expertise</h2>
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
        <section>
          <h2 className="text-2xl font-bold mb-8">Our Mobile Development Process</h2>
          <div className="grid md:grid-cols-2 gap-8">
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
            <div className="relative aspect-square md:aspect-auto">
              <Image
                src="/services/mobile-dev-process.jpg"
                alt="Mobile Development Process"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
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
    </ServiceLayout>
  )
}

const features = [
  {
    title: 'Native iOS Development',
    description: 'High-performance iOS apps using Swift and the latest Apple technologies.',
    icon: CheckCircle
  },
  {
    title: 'Native Android Development',
    description: 'Robust Android apps using Kotlin and Java with Material Design principles.',
    icon: CheckCircle
  },
  {
    title: 'Cross-Platform Development',
    description: 'Efficient multi-platform apps using React Native or Flutter.',
    icon: CheckCircle
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive and engaging user interfaces tailored for mobile experiences.',
    icon: CheckCircle
  },
  {
    title: 'App Store Optimization',
    description: 'Strategies to improve visibility and downloads on app stores.',
    icon: CheckCircle
  },
  {
    title: 'Mobile App Testing',
    description: 'Comprehensive testing across devices and OS versions for quality assurance.',
    icon: CheckCircle
  }
]

const process = [
  {
    title: 'Requirement Analysis',
    description: 'Understanding your business goals and app requirements.'
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and appealing mobile app interfaces.'
  },
  {
    title: 'Development',
    description: 'Building the app using the chosen technology stack.'
  },
  {
    title: 'Testing',
    description: 'Rigorous testing on various devices and scenarios.'
  },
  {
    title: 'Deployment',
    description: 'Launching the app on the App Store and/or Google Play Store.'
  },
  {
    title: 'Maintenance and Updates',
    description: 'Ongoing support, bug fixes, and feature updates.'
  }
]

const technologies = [
  { name: 'Swift', icon: '/tech-icons/swift.svg' },
  { name: 'Kotlin', icon: '/tech-icons/kotlin.svg' },
  { name: 'React Native', icon: '/tech-icons/react-native.svg' },
  { name: 'Flutter', icon: '/tech-icons/flutter.svg' },
  { name: 'Xamarin', icon: '/tech-icons/xamarin.svg' },
  { name: 'Firebase', icon: '/tech-icons/firebase.svg' },
  { name: 'Android Studio', icon: '/tech-icons/android-studio.svg' },
  { name: 'Xcode', icon: '/tech-icons/xcode.svg' },
  { name: 'AppCenter', icon: '/tech-icons/appcenter.svg' },
  { name: 'Fastlane', icon: '/tech-icons/fastlane.svg' },
  { name: 'Unity', icon: '/tech-icons/unity.svg' },
  { name: 'ARKit', icon: '/tech-icons/arkit.svg' }
]
