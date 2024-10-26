"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectBtnProps {
  gitHubUrl: string;
  previewProjectUrl: string;
}

export default function ProjectBtn({
  gitHubUrl,
  previewProjectUrl,
}: ProjectBtnProps) {
  const [gitHubIconSrc, setGitHubIconSrc] = useState("/link-icon.svg");
  const [previewIconSrc, setPreviewIconSrc] = useState("/link-icon.svg");

  return (
    <div className="flex space-x-2">
      {/* GitHub Button */}
    
      <a
        href={gitHubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center space-x-1 my-5 border w-[115px] h-[40px] cursor-pointer border-[#F0C969] bg-transparent text-[#F0C969] py-2 text-center rounded-3xl hover:bg-[#F0C969] hover:text-black transition-all duration-75"
        onMouseEnter={() => setGitHubIconSrc("/link2-icon.svg")}
        onMouseLeave={() => setGitHubIconSrc("/link-icon.svg")}
      >
        <span className="text-[10px]">Show Project</span>
        <Image
          src={gitHubIconSrc}
          alt="GitHub icon"
          width={10}
          height={10}
          className="object-contain"
        />
      </a>

      {/* Preview Button */}

      <a
        href={previewProjectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center space-x-1 my-5 border w-[115px] h-[40px] cursor-pointer border-[#F0C969] bg-transparent text-[#F0C969] py-2 text-center rounded-3xl hover:bg-[#F0C969] hover:text-black transition-all duration-300"
        onMouseEnter={() => setPreviewIconSrc("/link2-icon.svg")}
        onMouseLeave={() => setPreviewIconSrc("/link-icon.svg")}
      >
        <span className="text-[10px] text-center">Preview</span>
        <Image
          src={previewIconSrc}
          alt="Link icon"
          width={10}
          height={10}
          className="object-contain"
        />
      </a>
    </div>
  );
}
