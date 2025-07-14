"use client";
import React, { useState } from "react";
import Image from "next/image";

const steps = [
  {
    heading: "Create Your Route",
    description:
      "Enter your pickup & dropoff locations or the number of hours you wish to book a car for",
  },
  {
    heading: "Choose Vehicle For You",
    description:
      "On the day of your trip, you will receive booking and SMS updates - one informing you that",
  },
  {
    heading: "Enjoy The Journey",
    description:
      "After your ride has taken place, we would appreciate it if you could rate your car an",
  },
];

const Working = () => {
  const [selectedStep, setSelectedStep] = useState(0);
  return (
    <div
      className={`py-20 bg-[url('/assets/home/workbg.png')] bg-black/100 overflow-hidden bg-no-repeat bg-cover max-w-full bg-center min-h-[600px] lg:h-[700px] flex items-center`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10">
        <h1 className="text-4xl md:text-5xl text-white ">How It Works</h1>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-5   ">
          <div className="relative space-y-18 pt-10 ">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex items-start cursor-pointer "
                onClick={() => setSelectedStep(index)}
              >
                <div className="relative   mr-6">
                  {index !== steps.length - 1 && (
                    <div
                      className={`${
                        selectedStep === index ? "bg-white" : "bg-white/20 "
                      }  absolute left-1/2 top-4 bottom-0 w-0.5 my-2 transform -translate-x-1/2 h-full`}
                      style={{ height: 100 }}
                    ></div>
                  )}

                  <div
                    className={`relative w-4 h-4 border-2 
${selectedStep === index ? "text-white" : "text-white/50"} 

                     rounded-full bg-black  z-10`}
                  ></div>
                </div>

                <div className="flex-1 pt-1">
                  <h2
                    className={`font-medium mb-3
                       ${
                         selectedStep === index ? "text-white" : "text-white/50"
                       } 
                    `}
                  >
                    {step.heading}
                  </h2>

                  <p
                    className={`text-sm   max-w-sm ${
                      selectedStep === index ? "text-white" : "text-white/50"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className=" lg:relative ">
            <Image
              src={"/assets/home/laptop.png"}
              alt={"Working Image"}
              width={650}
              height={400}
              className="lg:absolute top-0 -left-28 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
