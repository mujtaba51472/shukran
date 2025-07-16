"use client";
import Heading from "@/app/components/common/Heading";
import {
  MoveUpRight,
  Users,
  Briefcase,
  Lock,
  Badge,
  BaggageClaim,
  ChevronLeft,
  ChevronRight,
  MoveRight,
  MoveLeft,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const fleetData = [
  {
    title: "Business Van/SUV",
    description: "Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac",
    passengers: 2,
    image: "/assets/home/car.png",
    chair: "/assets/home/chair.svg",
    user: "/assets/home/user.svg",
    luggage: "/assets/home/luggage.svg",
  },
  {
    title: "Business Van/SUV",
    description: "Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac",
    passengers: 2,
    image: "/assets/home/car.png",
    chair: "/assets/home/chair.svg",
    user: "/assets/home/user.svg",
    luggage: "/assets/home/luggage.svg",
  },
  {
    title: "Business Van/SUV",
    description: "Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac",
    passengers: 2,
    image: "/assets/home/car.png",
    chair: "/assets/home/chair.svg",
    user: "/assets/home/user.svg",
    luggage: "/assets/home/luggage.svg",
  },
  {
    title: "Business Van/SUV",
    description: "Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac",
    passengers: 2,
    image: "/assets/home/car.png",
    chair: "/assets/home/chair.svg",
    user: "/assets/home/user.svg",
    luggage: "/assets/home/luggage.svg",
  },
  {
    title: "Luxury Sedan",
    description: "BMW 7 Series, Mercedes S-Class, Audi A8",
    passengers: 4,
    image: "/assets/home/car.png",
    chair: "/assets/home/chair.svg",
    user: "/assets/home/user.svg",
    luggage: "/assets/home/luggage.svg",
  },
  {
    title: "Executive SUV",
    description: "Range Rover, Escalade, GLS-Class",
    passengers: 6,
    image: "/assets/home/car.png",
    chair: "/assets/home/chair.svg",
    user: "/assets/home/user.svg",
    luggage: "/assets/home/luggage.svg",
  },
];

const Fleet = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const [showArrows, setShowArrows] = useState(false);
  const containerRef = useRef(null);

  // Calculate visible cards based on screen size
  useEffect(() => {
    const calculateVisibleCards = () => {
      if (typeof window !== "undefined") {
        const width = window.innerWidth;
        if (width < 640) {
          setVisibleCards(1);
        } else if (width < 1024) {
          setVisibleCards(2);
        } else if (width < 1280) {
          setVisibleCards(3);
        } else {
          setVisibleCards(4);
        }
      }
    };

    calculateVisibleCards();
    window.addEventListener("resize", calculateVisibleCards);
    return () => window.removeEventListener("resize", calculateVisibleCards);
  }, []);

  // Check if arrows should be shown
  useEffect(() => {
    setShowArrows(fleetData.length > visibleCards);
  }, [visibleCards]);

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < fleetData.length - visibleCards;

  const scrollLeft = () => {
    if (canScrollLeft) {
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      setCurrentIndex((prev) =>
        Math.min(fleetData.length - visibleCards, prev + 1)
      );
    }
  };

  return (
    <div className=" py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-28 w-full pt-10">
        <div className="flex items-center justify-between">
          <Heading>Our Fleet</Heading>
          <div className="flex items-center gap-2 text-primary cursor-pointer hover:underline">
            <span>More Fleet</span>
            <MoveUpRight size={18} />
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="max-w-[1600px] ml-auto px-4  lg:pl-28 w-full py-10  ">
          <div className=" overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out "
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCards)
                }%)`,
              }}
            >
              {fleetData.map((vehicle, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 rounded-xl p-4  border border-gray-200 hover:bg-gray-100 cursor-pointer transition-all duration-300"
                  style={{
                    width: `calc(${100 / visibleCards}% - ${
                      ((visibleCards - 1) * 24) / visibleCards
                    }px)`,
                    maxWidth: "375px",
                  }}
                >
                  <h3 className="text-lg font-semibold mb-1">
                    {vehicle.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {vehicle.description}
                  </p>

                  <div className="w-full h-[140px] relative mb-4">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex justify-around pt-3 text-gray-800 text-sm">
                    <div className="flex items-center gap-1">
                      <div className="flex items-center gap-1 bg-gray-200 rounded-full p-4">
                        <Image
                          src={vehicle.user}
                          alt="icon"
                          width={20}
                          height={16}
                          className="w-5 h-5"
                        />
                      </div>
                      <span>passengers {vehicle.passengers}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-gray-200 rounded-full p-4">
                      <Image
                        src={vehicle.chair}
                        alt="icon"
                        width={20}
                        height={16}
                        className="w-5 h-5"
                      />
                    </div>
                    <div className="flex items-center gap-1 bg-gray-200 rounded-full p-4">
                      <Image
                        src={vehicle.luggage}
                        alt="icon"
                        width={20}
                        height={16}
                        className="w-5 h-5"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {showArrows && (
              <div className="flex items-center gap-5 pt-10 ">
                <button
                  onClick={scrollLeft}
                  disabled={!canScrollLeft}
                  className={`z-10 w-14 h-14 bg-white shadow-2xl border border-gray-300   rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-50 ${
                    !canScrollLeft
                      ? "opacity-50 cursor-not-allowed"
                      : "opacity-90 hover:opacity-100 cursor-pointer"
                  }`}
                >
                  <ArrowLeft size={23} className="text-gray-600" />
                </button>

                <button
                  onClick={scrollRight}
                  disabled={!canScrollRight}
                  className={` z-10 w-14 h-14 bg-white border border-gray-300 shadow-2xl rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-50 ${
                    !canScrollRight
                      ? "opacity-50 cursor-not-allowed"
                      : "opacity-90 hover:opacity-100 cursor-pointer"
                  }`}
                >
                  <ArrowRight size={23} className="text-gray-600" />
                </button>
              </div>
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
