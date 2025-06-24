import Image from 'next/image'
import { ServiceLayout } from '../../../components/service-layout';
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function MobileDevelopers() {
  return (
    <ServiceLayout
      title="MOBILE DEVELOPERS"
      subtitle="Specialized mobile developers creating native and cross-platform applications for iOS and Android platforms"
      headerImage="/services/servicesHeader.png"
    >
      <div className="grid gap-16">
        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-8">OUR MOBILE DEVELOPMENT EXPERTISE</h2>
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
            <h2 className="text-2xl font-bold mb-8">OUR DEVELOPMENT APPROACH</h2>
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
            <h2 className="text-2xl font-bold mb-8">TECHNOLOGIES & PLATFORMS</h2>
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
    title: 'Native iOS Development',
    description: 'Build high-performance iOS applications using Swift and Objective-C with native features.',
    icon: CheckCircle
  },
  {
    title: 'Native Android Development',
    description: 'Create robust Android applications using Kotlin and Java with Material Design principles.',
    icon: CheckCircle
  },
  {
    title: 'Cross-Platform Development',
    description: 'Develop apps for both iOS and Android using React Native and Flutter frameworks.',
    icon: CheckCircle
  },
  {
    title: 'Mobile UI/UX Design',
    description: 'Design intuitive and engaging mobile interfaces following platform-specific guidelines.',
    icon: CheckCircle
  },
  {
    title: 'App Store Optimization',
    description: 'Optimize apps for better visibility and downloads on App Store and Google Play.',
    icon: CheckCircle
  },
  {
    title: 'Mobile App Testing',
    description: 'Comprehensive testing across different devices, screen sizes, and OS versions.',
    icon: CheckCircle
  }
]

const process = [
  {
    title: 'Platform Analysis',
    description: 'Analyzing requirements and choosing the best platform approach (native vs cross-platform).'
  },
  {
    title: 'UI/UX Design',
    description: 'Creating mobile-specific designs following iOS and Android design guidelines.'
  },
  {
    title: 'Core Development',
    description: 'Building the mobile application with platform-specific features and optimizations.'
  },
  {
    title: 'API Integration',
    description: 'Integrating with backend services and third-party APIs for full functionality.'
  },
  {
    title: 'Testing & Optimization',
    description: 'Comprehensive testing across devices and performance optimization for smooth operation.'
  },
  {
    title: 'Deployment & Maintenance',
    description: 'App store deployment, updates, and ongoing maintenance and support.'
  }
]

const technologies = [
  { name: 'React Native', icon: '/tech-icons/react-native.svg' },
  { name: 'Flutter', icon: '/tech-icons/flutter.svg' },
  { name: 'iOS', icon: '/tech-icons/ios.svg' },
  { name: 'Android', icon: '/tech-icons/android.svg' },
  { name: 'Swift', icon: '/tech-icons/swift.svg' },
  { name: 'Kotlin', icon: '/tech-icons/kotlin.svg' },
  { name: 'Java', icon: '/tech-icons/java.svg' },
  { name: 'Firebase', icon: '/tech-icons/firebase.svg' },
  { name: 'Xcode', icon: '/tech-icons/xcode.svg' },
  { name: 'Android Studio', icon: '/tech-icons/android-studio.svg' },
  { name: 'Redux', icon: '/tech-icons/redux.svg' },
  { name: 'MobX', icon: '/tech-icons/mobx.svg' }
] 