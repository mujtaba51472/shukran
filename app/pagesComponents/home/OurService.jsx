import Heading from '@/app/components/common/Heading'
import { MoveUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { ourServices } from './data'
import Image from 'next/image'

const OurServices = () => {
  return (
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-28 w-full pt-10 pb-20">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ourServices.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-gray-200">
                <Image
                  width={400}
                  height={300}
                  src={service.image}
                  alt={`${service.title} image`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:opacity-70"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-lg font-medium group-hover:text-tertiary transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>  )
}

export default OurServices