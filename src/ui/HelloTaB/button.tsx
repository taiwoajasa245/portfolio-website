"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DownloadResume() {
  const [iconSrc, setIconSrc] = useState("/link-icon.svg");

  // const handleDownload = () => {
  //   // Logic to trigger the download

  //   console.log("Downloading resume...");
  // };

  return (
    <Link href={"/Ajasa Taiwo Portfolio.pdf"} download={true} target="_blank">
      <div
        onMouseEnter={() => setIconSrc("./link2-icon.svg")}
        onMouseLeave={() => setIconSrc("./link-icon.svg")}
        className="flex justify-center items-center space-x-1 my-5 border w-[185px] h-[50px] cursor-pointer border-[#F0C969] bg-transparent text-[#F0C969] py-2 text-center rounded-3xl hover:bg-[#F0C969] hover:text-black transition-all duration-300"
      >
        <span className=" text-[14px]">Download Resume </span>

        <Image
          src={iconSrc}
          alt="Company Logo"
          width={15}
          height={15}
          className="object-contain"
        />
      </div>
    </Link>
  );
}
