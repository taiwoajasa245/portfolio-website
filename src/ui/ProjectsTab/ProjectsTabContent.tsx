import ProjectsCard from "@/components/ProjectsCard";

export default function ProjectsTabContent() {
  return (
    <>
      <div className="w-full  mt-5 ">
        <p className="text-[25px] text-[#FDFDFD]">Projects</p>

        <div>
          {/* line  */}
          {/* <div className={`h-[480px] w-[1px] bg-[#343434] mr-5 rounded `} /> */}

          {/* Cards beside the vertical line */}
          <div className="">
            <ProjectsCard
              title="Restaurant Management System"
              technologies="AngularJS.  NodeJS.  NextJS. Mongodb."
              details="A Restaurant Management System is an essential tool for modern restaurants looking to improve operational efficiency, enhance customer satisfaction, and stay competitive in the industry."
            />

            <ProjectsCard
              title="Restaurant Management System"
              technologies="AngularJS.  NodeJS.  NextJS. Mongodb."
              details="A Restaurant Management System is an essential tool for modern restaurants looking to improve operational efficiency, enhance customer satisfaction, and stay competitive in the industry."
            />
          </div>
        </div>
      </div>
    </>
  );
}
