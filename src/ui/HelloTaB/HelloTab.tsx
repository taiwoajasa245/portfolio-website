import { Metadata } from "next";
import Grettings from "@/components/Grettings";
import VerticalLine from "@/components/VerticalLIne";
import NumbersList from "@/components/NumberLIst";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ajasa Taiwo Portfolio",
  description: "Portfolio of a backend developer",
};

export default function HelloPage() {
  return (
    <>
      {/* clean code  */}
      <div className="flex items-center w-full ">
        {/*  number-list */}
        <NumbersList />

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

        <div className="md:hidden">
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
