import { Phone } from "lucide-react";
import React from "react";
import { details } from "../../config/details";
import Link from "next/link";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Image from "next/image";
import { footerTitles, social_data } from "../../config/footerTitles";

const Footer = () => {
  return (
    <div className="py-20 bg-[url('/assets/home/workbg.png')] bg-black/100 overflow-hidden bg-no-repeat bg-cover max-w-full bg-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
        {/* Header Section */}
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

          <div className="flex items-center justify-end gap-4">
            <div className="text-lg font-medium">Follow Us</div>
            <div className="flex items-center  flex-wrap text-sm text-white/80">
              {social_data.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-1 hover:text-white transition rounded-full p-2 bg-red-100">
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

        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Footer Links */}
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

          {/* Download App Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Download The App</h3>
            <div className="space-y-3">
              <Link href="#" className="block">
                <div className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-3 border border-white/20">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-white/80">Download on the</div>
                    <div className="text-sm font-medium">Apple Store</div>
                  </div>
                </div>
              </Link>

              <Link href="#" className="block">
                <div className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-3 border border-white/20">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-white/80">Download on the</div>
                    <div className="text-sm font-medium">Google Play</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-white/80">
              <span>© 2025 Ride Mobility</span>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy policy
              </Link>
              <Link
                href="/legal"
                className="hover:text-white transition-colors"
              >
                Legal notice
              </Link>
              <Link
                href="/accessibility"
                className="hover:text-white transition-colors"
              >
                Accessibility
              </Link>
            </div>

            <div className="flex items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12,2C8.13,2 5,5.13 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9C19,5.13 15.87,2 12,2M12,11.5C10.62,11.5 9.5,10.38 9.5,9C9.5,7.62 10.62,6.5 12,6.5C13.38,6.5 14.5,7.62 14.5,9C14.5,10.38 13.38,11.5 12,11.5Z" />
                </svg>
                <span>London</span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07Z" />
                </svg>
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
