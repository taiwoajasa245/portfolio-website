export default function NumbersList() {
  const numbers = Array.from({ length: 30 }, (_, index) => index + 1); // Creates an array [1, 2, ..., 50]

  return (
    <div className="flex ml-3 md:ml-16 flex-col items-center justify-center ">
      {numbers.map((num) => (
        <div
          key={num}
          className=" mt-[3px] text-[#343434] text-[16px] md:text-[10px]"
        >
          <p>{num}</p>
        </div>
      ))}
    </div>
  );
}
