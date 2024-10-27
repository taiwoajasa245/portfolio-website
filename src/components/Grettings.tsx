
import DownloadResume from "@/ui/HelloTaB/button";

export default function Grettings() {

  return (
    <>
      <div className="ml-5 mt-16 overflow-auto h-full ">
        <h1 className="text-[#FDFDFD] ">Hello! I am <span className="md:text-[25px]">👋🏽</span> </h1>
        <h1 className="text-[27px] md:text-[40px] text-[#FDFDFD] md:tracking-[13px] tracking-widest">Ajasa Taiwo</h1>
        <p className="text-[#79A0BC]">I am a backend developer</p>

        <DownloadResume />
      </div>
    </>
  );
}
