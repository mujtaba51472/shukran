import Image from "next/image";
import { services } from "./pagesComponents/home/data";
import Fleet from "./pagesComponents/home/Fleet";
import Working from "./pagesComponents/home/Working";

export default function Home() {
  return (
    <>
      <div
        className={`bg-[url('/assets/home/1.png')]  overflow-hidden bg-no-repeat bg-cover max-w-full bg-center min-h-[600px] lg:h-[700px] flex items-center`}
      >
        <div className="container ">
          <div className="grid gap-4 text-white">
            <div className="font-medium lg:p-7 lg:place-content-center">
              <div className="text-sm">Serenity at Its Best</div>
              <div className="text-xl lg:text-4xl py-2">Wakefield's</div>
              <div className="text-xl lg:text-4xl">
                Trusted Minibus & Mobility Transport Provider
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="grid grid-cols-1 lg:grid-cols-[15%_1fr] gap-4 lg:gap-6 py-8 md:py-16 items-start">
          <div className="font-bold text-center text-xl lg:text-left mb-4 lg:mb-0">
            Our partners who use our services
          </div>
          <div className="flex justify-center lg:justify-between flex-wrap gap-6 px-4  w-full">
            {services.map((service, index) => (
              <Image
                key={index}
                src={service.image}
                alt={`Service ${index + 1}`}
                width={150}
                height={100}
                className=""
              />
            ))}
          </div>
        </div>
      </div>
      <Fleet />
      <Working />
    </>
  );
}
