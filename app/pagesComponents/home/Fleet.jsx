import {
  MoveUpRight,
  Users,
  Briefcase,
  Lock,
  Badge,
  BaggageClaim,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const fleetData = [
  {
    title: "Business Van/SUV",
    description: "Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac",
    passengers: 2,
    image: "/assets/home/car.png",
  },

  {
    title: "Business Van/SUV",
    description: "Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac",
    passengers: 2,
    image: "/assets/home/car.png",
  },
  {
    title: "Business Van/SUV",
    description: "Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac",
    passengers: 2,
    image: "/assets/home/car.png",
  },
  {
    title: "Business Van/SUV",
    description: "Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac",
    passengers: 2,
    image: "/assets/home/car.png",
  },
];

const Fleet = () => {
  return (
    <>
      <div className="container">
        <div className="flex items-center justify-between py-6">
          <h2 className="text-2xl font-semibold">Our Fleet</h2>
          <div className="flex items-center gap-2 text-primary cursor-pointer hover:underline">
            <span>More Fleet</span>
            <MoveUpRight size={18} />
          </div>
        </div>
      </div>

      <div className="w-full    flex justify-center lg:justify-end flex-wrap px-4 gap-6 py-10">
        {fleetData.map((vehicle, index) => (
          <div
            key={index}
            className="place-content-end rounded-xl max-w-[375px] p-4 shadow-lg hover:bg-gray-100 cursor-pointer transition-all duration-300"
          >
            <h3 className="text-lg font-semibold mb-1">{vehicle.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{vehicle.description}</p>

            <div className="w-full h-[140px] relative mb-4">
              <Image
                src={vehicle.image}
                alt={vehicle.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="flex justify-around  pt-3 text-gray-800  text-sm">
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1 bg-gray-200 rounded-full p-4">
                  <Users size={16} />
                </div>
                <span> passengers&nbsp;{vehicle.passengers}</span>
              </div>
              <div className="flex items-center gap-1 bg-gray-200 rounded-full p-4">
                <BaggageClaim size={16} />
              </div>
              <div className="flex items-center gap-1 bg-gray-200 rounded-full p-4">
                <Lock size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Fleet;
