import Image from 'next/image'

export default function About() {
  return (
    <div className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">EMPOWERING BUSINESSES WITH CUTTING-EDGE IT SOLUTIONS</h1>

        <div className="flex flex-col md:flex-row items-center ">
          <p className="text-gray-600 mb-6"> Welcome to our IT service-based company! We are dedicated to providing cutting-edge IT solutions that empower businesses in today’s digital era. With our team of skilled professionals, we offer a wide range of services tailored to meet your unique needs. From infrastructure management to software development, cloud computing to cybersecurity, our expertise covers a comprehensive suite of IT offerings. We work collaboratively with you throughout the project lifecycle to ensure seamless implementation and measurable outcomes. Customer satisfaction is our priority.
            We value integrity, transparency, and professionalism, and we strive to build long-term partnerships based on trust and delivering tangible value. Thank you for considering our company. We look forward to collaborating with you and driving your business forward with innovative IT solutions.  </p>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-20">

          <Image src="/Subheading.png" alt="About CodeLab Technologies" width={500} height={400} quality={100}
            priority
            unoptimized className="w-full" />
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">OUR CORE VALUES</h2>
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
    title: "INTEGRITY AND TRANSPARENCY",
    description: "Prioritizing honest and open communication, fostering trust with clients, partners, and team members"
  },
  {
    title: "CREATIVITY AND INNOVATION",
    description: "Encouraging out-of-the-box thinking to develop unique, forward-thinking solutions for every client"
  },
  {
    title: "COLLABORATION AND TEAMWORK",
    description: "A focus on teamwork, leveraging diverse expertise within the company to solve client challenges effectively."
  }
];


