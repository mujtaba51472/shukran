import { Earth, MapIcon, MapPin, Phone } from "lucide-react";
import React from "react";
import { details } from "../../config/details";
import Link from "next/link";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Image from "next/image";
import { footerTitles, social_data } from "../../config/footerTitles";

const Footer = () => {
  return (
    <div className="py-20 bg-[url('/assets/home/workbg.png')] bg-black/100 overflow-hidden bg-no-repeat bg-cover max-w-full bg-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-28 w-full text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex items-center flex-wrap gap-8">
            <Image
              src="/assets/logos/logo.png"
              alt="Ride Mobility Logo"
              width={256}
              height={100}
              className=""
            />
            <div className="flex gap-2 text-sm items-center">
              <Phone size="16" />
              <span>{details.phone1}</span>
            </div>
          </div>

          <div className="flex items-center lg:justify-end gap-2">
            <div className="text-md font-medium">Follow Us</div>
            <div className="flex items-center  flex-wrap text-sm text-white/80">
              {social_data.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center  hover:text-white transition ">
                      <Image
                        src={item.icon}
                        width={50}
                        height={30}
                        alt={index}
                        className=""
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {footerTitles.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-medium text-white">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href ? (
                      <Link
                        href={link.href}
                        className="text-white/80 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <span className="text-white/80 text-sm">{link.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Download The App</h3>
            <div className="space-y-3">
              <Link href="#" className="block">
                <div className="flex items-center gap-3 bg-black/20 hover:bg-black transition-colors rounded-lg px-4 py-3 border border-white/60">
                  <div className=" ">
                    <Image
                      src={"/assets/home/appleicon.png"}
                      alt="Apple Store"
                      width={20}
                      height={24}
                      className=""
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-white/80">Download on the</div>
                    <div className="text-sm font-medium">Apple Store</div>
                  </div>
                </div>
              </Link>

              <Link href="#" className="block">
                <div className="flex items-center gap-3 bg-black/20 hover:bg-black transition-colors rounded-lg px-4 py-3 border border-white/60">
                  <div className="">
                    <Image
                      src={"/assets/home/googleicon.png"}
                      alt="Google Play"
                      width={20}
                      height={24}
                      className=""
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-white/80">Download on the</div>
                    <div className="text-sm font-medium">Google Play</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex  flex-col md:flex-row justify-between items-center gap-4 px-4 py-6 sm:px-6 lg:px-8">
            {/* Left Links - Stack on mobile, row on larger screens */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm text-white/80">
              <span className="text-center sm:text-left">
                © 2025 Ride Mobility
              </span>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors whitespace-nowrap"
                >
                  Terms
                </Link>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors whitespace-nowrap"
                >
                  Privacy policy
                </Link>
                <Link
                  href="/legal"
                  className="hover:text-white transition-colors whitespace-nowrap"
                >
                  Legal notice
                </Link>
                <Link
                  href="/accessibility"
                  className="hover:text-white transition-colors whitespace-nowrap"
                >
                  Accessibility
                </Link>
              </div>
            </div>

            {/* Right Info - Stack on small mobile, row on larger screens */}
            <div className="flex  items-center gap-3 sm:gap-6 text-sm text-white/80 ">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <MapPin size={16} />
                <span>London</span>
              </div>

              <div className="flex items-center gap-2 whitespace-nowrap">
                <Earth size={16} />
                <span>English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
