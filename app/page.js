import Image from "next/image";
import { services } from "./pagesComponents/home/data";
import Fleet from "./pagesComponents/home/Fleet";
import Working from "./pagesComponents/home/Working";

export default function Home() {
  return (
    <>
      <div
        className={`bg-[url('/assets/home/1.png')] overflow-hidden bg-no-repeat bg-cover max-w-full bg-center min-h-[600px] lg:h-[700px] flex items-center`}
      >
        <div className="container lg:flex items-center justify-center h-full">
          <div className=" text-white lg:px-20 ">
            <div className="font-medium">
              <div className="text-xl">Serenity at Its Best</div>
              <div className="text-2xl lg:text-5xl py-2">Wakefield's</div>
              <div className="text-2xl lg:text-5xl">
                Trusted Minibus & Mobility Transport Provider
              </div>
            </div>
          </div>
        </div>
      </div>

 
    </>
  );
}