import Heading from '@/app/components/common/Heading'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Download = () => {
  return (
 <div className="bg-tertiary my-24 lg:py-28 lg:relative overflow-hidden ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-28 w-full">
          <div className=" flex flex-col lg:flex-row items-center justify-between  ">
            <div className="z-10 max-w-md text-white flex flex-col gap-1 lg:gap-2 pt-8 lg:pt-0 ">
              <Heading color="text-white">Download the app</Heading>
              <div className="text-sm mb-6">
                Have a bus booking at your fingertips no matter where you are
                with our easy-to-use smartphone app.
              </div>
              <div className="grid lg:grid-cols-2 gap-3">
                <Link href="#" className="group">
                  <div className="bg-black p-3 rounded-lg flex items-center gap-3 hover:bg-opacity-80 transition">
                    <Image
                      src={"/assets/home/appleicon.png"}
                      alt="Apple Store"
                      width={24}
                      height={20}
                      className=""
                    />
                    <div className="h-6 w-[2px] bg-gray-400/50"></div>
                    <div className="text-white text-xs">
                      Download on the <br />
                      <strong className="text-sm font-semibold group-hover:text-white/90">
                        Apple Store
                      </strong>
                    </div>
                  </div>
                </Link>

                <Link href="#" className="group">
                  <div className="bg-black p-3 rounded-lg flex items-center gap-3 group-hover:bg-opacity-80 transition">
                    <Image
                      src={"/assets/home/googleicon.png"}
                      alt="Google Play"
                      width={24}
                      height={20}
                      className=""
                    />
                    <div className="h-6 w-[2px] bg-gray-400/50"></div>
                    <div className="text-white text-xs">
                      Download on the <br />
                      <strong className="text-sm font-semibold group-hover:text-white/90">
                        Play Store
                      </strong>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className=" lg:absolute bottom-0 right-0  z-0 pt-10 lg:pt-0">
              <Image
                src={"/assets/home/downloadmobile.png"}
                alt="App screenshot"
                width={400}
                height={600}
                className="w-full  "
                priority
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Download