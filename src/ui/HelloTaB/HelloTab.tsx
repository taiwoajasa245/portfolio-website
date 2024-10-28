import { Metadata } from "next";
import Grettings from "@/components/Grettings";
import VerticalLine from "@/components/VerticalLIne";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ajasa Taiwo Portfolio",
  description: "Portfolio of a backend developer",
};

export default function HelloPage() {
  const numbers = Array.from({ length: 30 }, (_, index) => index + 1); // Creates an array [1, 2, ..., 50]

  return (
    <>
      {/* clean code  */}
      <div className="flex items-center w-full h-full">
        {/*  number-list */}
        <div className="flex ml-3 md:ml-16 flex-col items-center justify-center h-full ">
          {numbers.map((num) => (
            <div
              key={num}
              className=" h-full text-[#343434] text-[10px] md:text-[10px]"
            >
              <p>{num}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center md:hidden">
          <VerticalLine height="500" />
          <div>
            <VerticalLine height="200" />
          </div>
          <VerticalLine height="50" />
        </div>

        <div className=" hidden items-center  md:flex ">
          <div className={`h-[440px] w-[1px] ml-5 bg-[#343434] rounded `} />
          <div className={`h-[310px] w-[1px] ml-5 bg-[#343434] rounded `} />
          <div className={`h-[210px] w-[1px] ml-5 bg-[#343434] rounded `} />
          <div className={`h-[110px] w-[1px] ml-5 bg-[#343434] rounded `} />
          <div className={`h-[50px] w-[1px] ml-5 bg-[#343434] rounded `} />
        </div>

        <div className="lg:hidden ">
          <Grettings />
        </div>

        {/* desktop screen */}
        <div className="hidden w-full space-x-60 items-center lg:flex">
          {/* Grettings */}
          <Grettings />

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
