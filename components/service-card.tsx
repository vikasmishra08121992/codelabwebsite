import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="w-12 h-12 mb-4">
          <Image
            src={icon}
            alt={title}
            width={48}
            height={48}
          />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

