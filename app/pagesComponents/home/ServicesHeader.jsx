import Heading from '@/app/components/common/Heading'
import { MoveUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ServicesHeader = () => {
  return (
  <div className="flex flex-wrap justify-between items-center mb-5">
          <Heading>Our Services</Heading>
          <div className="">
            <Link href="#" className="flex items-center gap-1">
              More Services
              <span>
                <MoveUpRight size={14} />
              </span>
            </Link>
          </div>
        </div>  )
}

export default ServicesHeader