import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-[55px] bg-[#252525] flex items-center justify-start shadow-inner">
      <div className="flex  items-center w-full ">
        <p className="pl-5 text-[15px]">
            Connect With me: 
        </p>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"

        >
          <Image
            src="/twitter-icon.svg"
            alt="Twitter Logo"
            width={15}
            height={15}
            className="object-contain cursor-pointer ml-1"
          />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Image
            src="/linkden-icon.svg"
            alt="Twitter Logo"
            width={18}
            height={18}
            className="object-contain cursor-pointer ml-2"
          />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Image
            src="/mail-icon.svg"
            alt="Twitter Logo"
            width={18}
            height={18}
            className="object-contain cursor-pointer  ml-2"
          />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          
        >
          <Image
            src="/github-icon.svg"
            alt="Twitter Logo"
            width={18}
            height={18}
            className="object-contain cursor-pointer  ml-2"
          />
        </a>
      </div>
    </footer>
  );
}
