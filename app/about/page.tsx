import Image from 'next/image'

export default function About() {
  return (
    <div className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Empowering Businesses with Cutting-Edge IT Solutions.</h1>

        <div className="flex flex-col md:flex-row items-center mb-20">
        <p className="text-gray-600 mb-6"> Welcome to our IT service-based company! We are dedicated to providing cutting-edge IT solutions that empower businesses in today’s digital era. With our team of skilled professionals, we offer a wide range of services tailored to meet your unique needs. From infrastructure management to software development, cloud computing to cybersecurity, our expertise covers a comprehensive suite of IT offerings. We work collaboratively with you throughout the project lifecycle to ensure seamless implementation and measurable outcomes. Customer satisfaction is our priority.
                We value integrity, transparency, and professionalism, and we strive to build long-term partnerships based on trust and delivering tangible value. Thank you for considering our company. We look forward to collaborating with you and driving your business forward with innovative IT solutions.  </p>  
        </div>
        <div className="flex flex-col md:flex-row items-center mb-20">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <Image src="/aboutus.png" alt="About CodeLab Technologies" width={500} height={400} />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h2 className="text-2xl font-semibold mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 mb-6">
            <p className="text-gray-600 mb-6">  <b>Driving Innovation Across Industries:</b> We are committed to expanding our presence across diverse industries by offering innovative, client-specific solutions that address key business challenges such as operational efficiency, scalability, and compliance.  </p> 
            <p className="text-gray-600 mb-6">   <b>Investing in AI and Cloud Services:</b> We will continue to develop AI-driven and cloud-based solutions that help clients automate workflows and improve decision-making.   </p>
            <p className="text-gray-600 mb-6"></p>  <b>Client-Centric Growth:</b> By prioritizing long-term partnerships, we aim to increase client retention and foster collaborative relationships that drive mutual success.   </p>

            {/* <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              We envision a world where businesses of all sizes can harness the power of technology to achieve their full potential. Our goal is to be the trusted partner that guides organizations through their digital journey, helping them stay competitive in an ever-evolving landscape.
            </p> */}
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const coreValues = [
  {
    title: "Innovation",
    description: "We constantly push the boundaries of technology to deliver innovative solutions."
  },
  {
    title: "Excellence",
    description: "We strive for excellence in every project, ensuring the highest quality standards."
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and fostering strong partnerships with our clients."
  }
]

