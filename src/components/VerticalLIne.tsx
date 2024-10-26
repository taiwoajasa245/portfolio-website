type LineType = "50" | "100" | "200" | "300" | "500";

interface Line {
  height: LineType;
}

export default function VerticalLine({ height }: Line) {
  const heightClass = {
    "50": "h-[80px]",   // Tailwind doesn't use 'h-50', so we map it to 'h-12' (or appropriate size)
    "100": "h-24",
    "200": "h-[265px]",
    "300": "h-80",
    "500": "h-[525px]",
  }[height];

  return <div className={`${heightClass} w-[1px] ml-5 bg-[#343434] rounded `} />;
}
