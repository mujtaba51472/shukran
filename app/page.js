import Image from "next/image";
import { num_data, services, trip_data } from "./pagesComponents/home/data";
import Fleet from "./pagesComponents/home/Fleet";
import Working from "./pagesComponents/home/Working";
import Link from "next/link";
import { ArrowUp, MoveUpRight } from "lucide-react";
import { ourServices } from "./pagesComponents/home/data";
import HomeAccordion from "./pagesComponents/home/HomeAccordian";

export default function Home() {
  return (
    <>
      <div
        className={`bg-[url('/assets/home/1.png')] overflow-hidden bg-no-repeat bg-cover max-w-full bg-center min-h-[600px] lg:h-[700px] flex items-center`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {" "}
          {/* Custom container */}
          <div className=" text-white  ">
            <div className="font-medium">
              <div className="text-xl">Serenity at Its Best</div>
              <div className="text-2xl lg:text-5xl py-2 leading-normal tracking-wider">
                Wakefield's
                <br />
                Trusted Minibus & Mobility Transport Provider
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          <div className="lg:w-1/4  ">
            <h2 className="text-xl lg:text-2xl font-bold">
              Our partners who use <br className="hidden lg:block" />
              our services
            </h2>
          </div>

          <div className="lg:w-3/4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center p-2"
                >
                  <Image
                    src={service.image}
                    alt="Partner logo"
                    width={150}
                    height={40}
                    className=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Fleet />
      <Working />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10">
        <div className="text-3xl sm:text-3xl font-medium text-center mb-10">
          Make Your Trip Your Way With Us
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {trip_data.map((trip, index) => (
            <div
              key={index}
              className="flex flex-col text-center items-start gap-4 p-4 space-8 "
            >
              <div className="flex justify-center items-center  w-full  ">
                <div
                  className="relative 
              "
                >
                  <div className="bg-tertiary/15 absolute p-7 rounded-full -top-5 left-[0%]"></div>

                  <Image
                    src={trip.image}
                    alt={trip.title}
                    width={55}
                    height={50}
                    className=""
                  />
                </div>
              </div>
              <div className="text-lg font-medium text-center w-full">
                {trip.title}
              </div>
              <div className="text-sm text-grey mt-1 max-w-[320px]">
                {trip.description}
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-tertiary py-20 rounded-md text-white">
        <div className="container   max-w-7xl ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center h-full">
            <div className="text-2xl lg:text-4xl font-medium text-center lg:text-left ">
              Showcase some <br /> impressive numbers.
            </div>

            <div className="flex   w-full  flex-wrap justify-center items-center gap-8 lg:gap-2">
              {num_data.map((num, index) => (
                <div key={index} className="text-center px-10">
                  <div className="text-2xl lg:text-4xl font-medium ">
                    {num.value}
                  </div>
                  <div className="text-sm  mt-1">{num.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24">
        <div className="flex flex-wrap justify-between items-center mb-5">
          <div className="text-3xl sm:text-3xl font-medium mb-2">
            Our Services
          </div>
          <div className="">
            <Link href="#" className="flex items-center gap-1">
              More Services
              <span>
                <MoveUpRight size={14} />
              </span>
            </Link>
          </div>
        </div>

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
      </div>
      <div className="bg-black my-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="bg-black text-white rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="row-span-2 h-full rounded-lg overflow-hidden">
                  <Image
                    src="/assets/home/city1.png"
                    alt="Wakefield city skyline view"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/assets/home/city2.png"
                    alt="Accessible transport vehicle"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/assets/home/city3.png"
                    alt="Autumn trees in Wakefield"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold">
                    From Wakefield,
                    <br />
                    for Wakefield
                  </h2>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    We are a local business serving Wakefield and nearby areas.
                    Remote transport across towns and surrounding communities.
                  </p>
                </div>

                <button className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2">
                  View All Cities
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeAccordion />
      <div className="bg-tertiary my-24 lg:py-28 lg:relative overflow-hidden min-h-[580px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className=" flex flex-col lg:flex-row items-center justify-between  ">
            {/* Text content */}
            <div className="z-10 max-w-md text-white">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                Download the app
              </h2>
              <p className="text-sm mb-6">
                Have a bus booking at your fingertips no matter where you are
                with our easy-to-use smartphone app.
              </p>
              <div className="grid lg:grid-cols-2 gap-4">
                {/* Apple Store Button */}
                <Link href="#" className="group">
                  <div className="bg-black px-4 py-3 rounded-lg flex items-center gap-3 hover:bg-opacity-80 transition">
                    <Image
                      src={"/assets/home/appleicon.png"}
                      alt="Apple Store"
                      width={20}
                      height={20}
                      className="w-5 h-5"
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

                {/* Google Play Button */}
                <Link href="#" className="group">
                  <div className="bg-black px-4 py-3 rounded-lg flex items-center gap-3 hover:bg-opacity-80 transition">
                    <Image
                      src={"/assets/home/googleicon.png"}
                      alt="Google Play"
                      width={20}
                      height={20}
                      className="w-5 h-5"
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

            {/* App screenshot */}
            <div className=" lg:absolute bottom-0 right-0 lg:top-1/2 lg:right-10 transform lg:-translate-y-1/2 pt-14 z-0 ">
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
    </>
  );
}
