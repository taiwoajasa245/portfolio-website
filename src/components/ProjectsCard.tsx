import ProjectBtn from "@/ui/ProjectsTab/button";
import Image from "next/image";

export default function ProjectsCard({
  title,
  technologies,
  details,
}: {
  title: string;
  technologies: string;
  details: string;
}) {
  return (
    <>
      <div className="mt-5">
        <div className="flex items-center gap-3">
          <Image
            src="/github-icon.svg"
            alt="Twitter Logo"
            width={25}
            height={25}
            className="object-contain"
          />
          <p className=" text-[#E2E2E2]">{title}</p>
        </div>

        <div className="flex">
          {/* line  */}
          <div
            className={`h-[178px] w-[1px] bg-[#343434] mr-4 mt-1 rounded `}
          />
          <div className=" mt-5">
            <p className="text-[15px] text-[#8E8E8E]">{technologies}</p>

            <div className="flex">
              {/* line  */}
              <div
                className={`h-[125px] w-[1px] bg-[#343434] mr-4 mt-1 rounded `}
              />

              <div className="flex flex-col mt-5  text-[#8E8E8E]  text-[12px]">
                <p> {details}</p>
                <ProjectBtn
                  gitHubUrl="https://github.com/taiwoajasa245"
                  previewProjectUrl="https://github.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}