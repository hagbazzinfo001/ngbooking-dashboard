"use client";
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Hotel } from "lucide-react";
import Image from "next/image";

const footer = () => {
  const links = {
    ngbookings: [
      { label: "About", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
    partners: [
      { label: "Partners property login", href: "/partners/login" },
      { label: "List your property", href: "/partners/list" },
      { label: "Partner Support", href: "/partners/support" },
    ],
    topCities: [
      "lekki",
      "lagos mainland",
      "Ikeja",
      "Abuja",
      "Victoria island",
      "Ikoyi",
      "Edo",
      "Rivers",
      "Abeokuta",
      "Ibadan",
    ],
    topHotels: [
      "Ivy Hotel",
      "Aotel Hotel",
      "Msquare Hotel Ikeja",
      "Whitehouse Msquare Hotel",
      "MAXX Msquare Hotel",
      "BSM Msquare",
      "Amazon Msquare Apartment Hotel",
      "Stop Over Motels",
      "Welcome Centre Hotels",
    ],
  };
  return (
    <footer className="bg-white text-black pt-12 pb-6   w-[95%] mx-auto">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Branding & Social */}
        <div className="space-y-4">
          <div className="flex items-start space-x-2 mb-4">
            <div className="p-2 bg-[#a50050] rounded-lg">
              {" "}
              <Hotel className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center">
              <span className="font-bold text-xl text-[#880E4F]">
                NGBOOKINGS
              </span>
              <span className="font-bold text-xl text-yellow-300">.COM</span>
            </div>
          </div>
          <div className="flex space-x-4 text-xl text-black">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
            <SiTiktok />
          </div>

          <div>
            <p className="font-semibold mb-2">Get Mobile App</p>
            <div className="flex flex-col gap-3  ">
              <Image
                src="/GooglePlay.webp" // You must add this asset or replace with CDN
                alt="Google Play"
                width={120}
                height={40}
              />
              <Image
                src="/AppleStore.webp" // Same here
                alt="App Store"
                width={120}
                height={40}
              />
            </div>
          </div>
        </div>

        {/* Ngbookings.com Links */}
        <div>
          <h3 className="font-bold mb-4">Ngbookings.com</h3>
          <ul className="space-y-2 text-sm">
            {links.ngbookings.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="hover:text-[#880E4F] hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Partner Links */}
        <div>
          <h3 className="font-bold mb-4">Partners</h3>
          <ul className="space-y-2 text-sm">
            {links.partners.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="hover:text-[#880E4F] hover:underline"
                >
                  {" "}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Top Cities */}
        <div>
          <h3 className="font-bold mb-4">Top cities</h3>
          <ul className="space-y-2 text-sm capitalize">
            {links.topCities.map((city, i) => (
              <li key={i}>
                <Link
                  href={`/hotels-in-${city.replace(/\s+/g, "-")}`}
                  className="hover:text-[#880E4F] hover:underline"
                >
                  Hotels in {city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Top Hotels */}
        <div>
          <h3 className="font-bold mb-4">Top hotel</h3>
          <ul className="space-y-2 text-sm">
            {links.topHotels.map((hotel, i) => (
              <li key={i}>
                <Link
                  href={`/hotels/${hotel.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-[#880E4F] hover:underline"
                >
                  {hotel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-10">
        Copyrights. All rights reserved &copy; {new Date().getFullYear()}{" "}
        Ngbookings.com Limited
      </div>
    </footer>
  );
};

export default footer;
