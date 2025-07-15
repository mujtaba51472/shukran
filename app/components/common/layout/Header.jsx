"use client";
import React from "react";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerTitles } from "../../config/headerTitles";

// Mock details for demo - replace with your actual import
const details = {
  phone1: "+44 22 715 7000",
};

const Header = () => {
  const pathname = usePathname();
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowMobileMenu(false);
    }
  };

  return (
    <>
      <header className="bg-black text-white relative z-10 ">
        <div className=" container   ">
          <div className="flex items-center justify-between py-5">
            <div className="flex items-center">
              <Image
                src="/assets/logos/logo.png"
                alt="Shukran Logo"
                width={256}
                height={100}
                className=""
              />
            </div>

            <nav className="hidden lg:flex items-center lg:space-x-12">
              {headerTitles.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={` ${
                    pathname == item?.href ? "text-tertiary" : "text-white"
                  }  hover:text-tertiary  transition-colors duration-200 font-medium`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2 text-white">
                <Phone size={16} />
                <a
                  href={`tel:${details.phone1}`}
                  className=" hover:text-blue-200 transition-all"
                >
                  {details.phone1}
                </a>{" "}
              </div>
              <button className=" text-black hidden lg:flex bg-white hover:bg-tertiary hover:text-white transition-all duration-300 ease-in-out cursor-pointer  text-dark px-5 py-3 rounded-3xl ">
                Get a Quote
              </button>
            </div>

            {/* Mobile */}
            <button
              className="lg:hidden flex items-center justify-center w-8 h-8"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <Menu size={24} className="text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer  */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          showMobileMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleOverlayClick}
      >
        <div
          className={`fixed top-0 right-0 h-full w-[250px] md:w-[350px] bg-tertiary text-white transform transition-transform duration-500 ease-in-out z-50 ${
            showMobileMenu ? "translate-x-0" : "translate-x-[100%]"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-end p-3 border-b border-gray-700">
            <button
              onClick={() => setShowMobileMenu(false)}
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
            >
              <X size={30} className="text-white" />
            </button>
          </div>

          <nav className="flex flex-col p-4">
            {headerTitles.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setShowMobileMenu(false)}
                className={`py-3 px-4 rounded-lg mb-2 transition-colors duration-200 ${
                  pathname == item?.href
                    ? "text-tertiary bg-gray-800"
                    : "text-white hover:bg-gray-700 hover:text-tertiary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
            <div className="flex items-center space-x-2 text-white mb-4">
              <Phone size={16} />
              <a
                href={`tel:${details.phone1}`}
                className="hover:text-blue-200 transition-all"
              >
                {details.phone1}
              </a>
            </div>

            <button
              className="w-full bg-white text-dark px-5 py-3 rounded-3xl text-black font-medium hover:bg-gray-100 transition-colors"
              onClick={() => setShowMobileMenu(false)}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
