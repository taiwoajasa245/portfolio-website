"use client";

import Grettings from "@/components/Grettings";
import VerticalLine from "@/components/VerticalLIne";
import Image from "next/image";

// Utility to generate an array of numbers [1, 2, 3, ..., 30]
const numbers = Array.from({ length: 30 }, (_, index) => index + 1);

export default function HelloPage() {
  return (
    <>
      <div className="flex items-center w-full h-full">
        {/* Number list with slide-down animation */}
        <div className="flex ml-3 md:ml-16 flex-col items-center justify-center h-full">
          {numbers.map((num, index) => (
            <div
              key={num}
              className={`h-full text-[#343434] text-[10px] md:text-[10px] 
                animate-slide-down`}
              style={{ animationDelay: `${index * 0.05}s` }} // Staggered animation
            >
              <p>{num}</p>
            </div>
          ))}
        </div>

        {/* Line animations */}
        <div className={`flex items-center md:hidden`}>
          <VerticalLine height="500" />
          <div>
            <VerticalLine height="200" />
          </div>
          <VerticalLine height="50" />
        </div>

        <div className={`hidden items-center md:flex `}>
          <div
            className={`h-[440px] w-[1px] ml-5 bg-[#343434] rounded animate-fade-in`}
            style={{ animationDelay: `0s` }}
          />
          <div
            className={`h-[310px] w-[1px] ml-5 bg-[#343434] rounded animate-fade-in`}
            style={{ animationDelay: `0.3s` }}
          />
          <div
            className={`h-[210px] w-[1px] ml-5 bg-[#343434] rounded animate-fade-in`}
            style={{ animationDelay: `0.6s` }}
          />
          <div
            className={`h-[110px] w-[1px] ml-5 bg-[#343434] rounded animate-fade-in`}
            style={{ animationDelay: `0.9s` }}
          />
          <div
            className={`h-[50px] w-[1px] ml-5 bg-[#343434] rounded animate-fade-in`}
            style={{ animationDelay: `1.2s` }}
          />
        </div>

        {/* Greeting animation */}
        <div className={`lg:hidden flex`}>
          <Grettings />
        </div>

        {/* Desktop screen */}
        <div className={`hidden w-full space-x-60 items-center lg:flex`}>
          {/* Wrapper for consistent alignment */}
          <div className="w-[30%] min-w-[200px]">
            <Grettings />
          </div>
          <Image
            src="/home-page-icon.svg"
            alt="homepage Logo"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
}
