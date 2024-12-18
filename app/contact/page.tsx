'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  code: z.string(),
  contact: z.string(),
  skypeId: z.string(),
  budget: z.string(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: '+91',
      contact: '',
      skypeId: '',
      budget: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Handle form submission
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="bg-gray-100 p-8 lg:p-12 rounded-2xl">
            <h1 className="text-4xl font-bold mb-6">
              Let's Start With A Conversation
            </h1>
            <p className="text-gray-600 mb-12">
              We at CodeLab Technologies appreciate your questions, comments, and
              teamwork. Whether you have enquiries about our projects or would like
              to discuss our services.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium">Email US</div>
                  <a href="mailto:info@codelabtechnologies.com" className="text-gray-600">
                  info@codelabtechnologies.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium">Call US</div>
                  <a href="tel:+916351576580" className="text-gray-600">
                    +91 97227 80697
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium">Our Address</div>
                  <address className="text-gray-600 not-italic">
                    45 Shivanand Jashodanagar Ahmedabad-382445
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="code"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Code</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  { <FormField
                    control={form.control}
                    name="skypeId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website Link</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Website Link" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> }
                </div>
                Website Link

                {/* <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Budget</FormLabel>
                      <FormControl>
                        <Input placeholder="Your budget" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full md:w-auto px-8 bg-orange-500 hover:bg-orange-600"
                >
                  Send Your Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

