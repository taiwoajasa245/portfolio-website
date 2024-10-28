import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-[30px] bg-[#252525] flex items-center justify-start shadow-inner " >
      <div className="flex  items-center w-full animate-slide-down">
        <p className="pl-5 text-[10px] md:text-[13px]">Connect With me:</p>
        <a
          href="http://x.com/Tech_With_Taiwo"

          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Image
            src="/twitter-icon.svg"
            alt="Twitter Logo"
            width={15}
            height={15}
            className="object-contain cursor-pointer ml-3"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/ajasa-taiwo"

          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkden"
        >
          <Image
            src="/linkden-icon.svg"
            alt="linkden Logo"
            width={18}
            height={18}
            className="object-contain cursor-pointer ml-3"
          />
        </a>

        <a
          href="mailto:ajasataiwo45@gmail.com?subject=Let's%20Connect&body=Hi%2C%20I'd%20like%20to%20talk%20to%20you."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gmail"
        >
          <Image
            src="/mail-icon.svg"
            alt="Gmail Logo"
            width={18}
            height={18}
            className="object-contain cursor-pointer  ml-3"
          />
        </a>

        <a
          href="http://github.com/taiwoajasa245"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <Image
            src="/github-icon.svg"
            alt="Github Logo"
            width={18}
            height={18}
            className="object-contain cursor-pointer  ml-3"
          />
        </a>
      </div>
    </footer>
  );
}
