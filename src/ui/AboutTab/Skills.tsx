import Image from "next/image";

export default function Skill() {
  type skillsIconeProp = {
    iconSrc: string;
    label: string;
  };

  const renderSkillsIcons = ({ iconSrc, label }: skillsIconeProp) => {
    return (
      <Image
        src={iconSrc}
        alt={`${label} Icon`}
        width={20}
        height={20}
        className="object-contain md:w-[50px] md:h-[50px]"
      />
    );
  };

  return (
    <>
      <div className="w-full mx-5  h-full ">
        <p className="md:text-[25px] text-[15px] text-[#FDFDFD] mt-14">
          Skills
        </p>

        <div className="flex">
          <div className={` h-[300px] w-[1px] bg-[#343434] mr-5 rounded `} />
          <div className="text-[#8E8E8E] text-[14px] mt-8 flex flex-col gap-8">
            {renderSkillsIcons({
              iconSrc: "./javascript-icon.svg",
              label: "JavaScript",
            })}

            {renderSkillsIcons({
              label: "reactJs",
              iconSrc: "./reactJs-icon.svg",
            })}

            {renderSkillsIcons({
              label: "nodeJs",
              iconSrc: "./nodejs-icon.svg",
            })}
          </div>
        </div>
      </div>
    </>
  );
}
