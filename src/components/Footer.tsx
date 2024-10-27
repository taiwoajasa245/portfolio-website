import Image from "next/image";

export default function Footer() {
  return (
    <footer className="shadow-inner">
      <div className="w-full h-[30px] bg-[#252525] flex items-center justify-center ">
        <a
          href="http://x.com/Tech_With_Taiwo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Image
            src="/twitter-icon.svg"
            alt="Twitter Logo"
            width={18}
            height={18}
            className="object-contain cursor-pointer"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/ajasa-taiwo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkden"
          className=" cursor-pointer ml-1"
        >
          <Image
            src="/linkden-icon.svg"
            alt="linkden Logo"
            width={18}
            height={18}
            className="object-contain cursor-pointer ml-4"
          />
        </a>

        <a
          href="mailto:ajasataiwo45@gmail.com?subject=Let's%20Connect&body=Hi%2C%20I'd%20like%20to%20talk%20to%20you."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gmail"
          className=" cursor-pointer ml-1"
        >
          <Image
            src="/mail-icon.svg"
            alt="Gmail Logo"
            width={18}
            height={18}
            className="object-contain cursor-pointer ml-4"
          />
        </a>

        <a
          href="http://github.com/taiwoajasa245"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className=" cursor-pointer ml-1"
        >
          <Image
            src="/github-icon.svg"
            alt="Github Logo"
            width={18}
            height={18}
            className="object-contain cursor-pointer ml-4"
          />
        </a>
      </div>
    </footer>
  );
}
