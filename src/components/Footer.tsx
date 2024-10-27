import Image from "next/image";

export default function Footer() {
  return (
    <footer className="shadow-inner">
      <div className="w-full h-[30px] bg-[#252525] flex items-center justify-center ">
        <a
          href="https://twitter.com"
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
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className=" cursor-pointer ml-1"
        >
          <Image
            src="/linkden-icon.svg"
            alt="Twitter Logo"
            width={18}
            height={18}
            className="object-contain cursor-pointer ml-4"
          />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className=" cursor-pointer ml-1"
        >
          <Image
            src="/mail-icon.svg"
            alt="Twitter Logo"
            width={18}
            height={18}
            className="object-contain cursor-pointer ml-4"
          />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className=" cursor-pointer ml-1"
        >
          <Image
            src="/github-icon.svg"
            alt="Twitter Logo"
            width={18}
            height={18}
            className="object-contain cursor-pointer ml-4"
          />
        </a>
      </div>
    </footer>
  );
}
