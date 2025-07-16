import Container from "@/app/components/common/Container";
import Heading from "@/app/components/common/Heading";
import Image from "next/image";
import React from "react";
import { images_data, list_data, services_one } from "./data";
import { Check } from "lucide-react";
import ImageContainer from "./ImageContainer";
import OurServices from "../home/OurService";
import Download from "../home/Download";

const ServiceMain = () => {
  return (
    <div>
      <div className="bg-[#000000] text-white">
        <Container>
          <div className=" text-white py-10 ">
            <Heading color="text-white">Services </Heading>
            <div className="captalize text-white/70 font-medium  flex gap-2 text-sm">
              <div>Home&nbsp;-</div>
              <div>Services&nbsp;</div>
            </div>
          </div>
        </Container>
       
     
      </div>{" "}
       <div>
            <OurServices />
        </div>
        <div>
            <Download/>
        </div>
 
    </div>
  );
};

export default ServiceMain;



export const TransportPage = ()=> {
   return (
    <div>
      {/* hero section  */}
      <div className="bg-[#000000] text-white">
        <Container>
          <div className=" text-white py-10 ">
            <Heading color="text-white">Services </Heading>
            <div className="captalize text-white/70 font-medium  flex gap-2 text-sm">
              <div>Home&nbsp;-</div>
              <div>Services&nbsp;-</div>
              <div>Airport Transfers</div>
            </div>
          </div>
        </Container>
        <div
          className={`bg-[url('/assets/services/hero.png')] overflow-hidden bg-no-repeat bg-cover max-w-full bg-center min-h-[300px] lg:h-[500px] flex items-center`}
        ></div>
      </div>{" "}
      {/* sub section */}
      <Container>
        <div className="flex items-center justify-between gap-5 py-20 flex-wrap ">
          {services_one.map((item, index) => (
            <div key={index} className="flex flex-col space-y-5  py-8  ">
              <div className="mb-12">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-7 max-w-[270px] ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
      <Container>
        <div className="text-black">
           <Heading bold>
            Airport transfer in the city
            </Heading> 
            <div className="text-sm leading-7">
                We provide reliable and accessible airport transfers to all major UK airports. Safe, comfortable, and always on time. Meet and greet available. Includes one hour of free wait time and real-time flight tracking. Professional drivers. Fixed pricing with no hidden charges. Book your stress-free ride today!
                <br/>
                <br/>
                Whether you're heading out on holiday or catching a business flight, our team ensures a smooth, door-to-door experience. Our drivers monitor your flight to adjust for delays and meet you right on time. With spacious minibuses and wheelchair-accessible vehicles, we make sure every passenger travels in comfort.
            </div>
            <div>
                {list_data.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 my-5">
                  
                   <span className="flex p-2 bg-tertiary/10 rounded-full"><Check size={12} className="text-tertiary"/></span> <span className="text-sm">{item.title}</span>
                   </div>
                ))}


            </div>
        </div>
            <div className="pt-10">
                {images_data.map((image, index) => (
                    <ImageContainer key={index} order={image?.order} src={image.src} title={image.title} description={image.description} />
                ))}

                </div>

          
      </Container>
    </div>
   )
}




