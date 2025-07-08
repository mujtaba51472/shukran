import React from "react";
import Image from "next/image";

const steps = [
  {
    heading: "Create your Route",
    description:
      "Enter your pickup & dropoff locations or the number of hours you wish to book a car",
  },
  {
    heading: "Choose Your Vehicle",
    description:
      "Browse through our available vehicles and select your preferred ride.",
  },
  {
    heading: "Sit Back and Relax",
    description:
      "Our professional drivers ensure a smooth and comfortable ride to your destination.",
  },
];

const Working = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Steps */}
          <div className="space-y-10 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-12">
                {/* Circle */}
                <div className="absolute left-[-1.8rem] top-2 w-4 h-4 border-2 border-white rounded-full bg-black z-10"></div>

                {/* Vertical Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-[-1.4rem] top-6 h-[calc(100%-1.5rem)] w-px bg-white/30"></div>
                )}

                {/* Heading */}
                <h2 className="text-xl font-bold mb-2">{step.heading}</h2>

                {/* Description */}
                <p className="text-gray-300 max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-start pt-6">
            <Image
              src={"/assets/home/laptop.png"}
              alt={"Working Image"}
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
