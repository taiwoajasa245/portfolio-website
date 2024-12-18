export default function Biography() {
  return (
    <>
      <div className="w-full mx-5  h-full ">
        <p className="md:text-[25px] text-[15px] text-[#FDFDFD] mt-14">
          About me
        </p>

        <div className="flex">
          <div className={` h-[300px] w-[1px] bg-[#343434] mr-5 rounded `} />
          {/* Text beside the vertical line */}
          <div className="text-[#8E8E8E] text-[14px] mt-8">
            <p className="">
              I&apos;m a dedicated and passionate Backend Developer and App
              Developer with more than 2 years of experience in building robust,
              scalable, <br />
              and efficient software solutions. My journey in the world of
              programming began with a fascination for how things work behind
              the scenes, <br /> and it has evolved into a fulfilling career
              where I get to create and innovate every day.
            </p>

            <p className="mt-10">
              As I progressed in my career, I expanded my expertise to include
              app development. I found immense satisfaction in building
              applications <br /> that people use daily, solving real-world
              problems, and enhancing productivity and enjoyment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
