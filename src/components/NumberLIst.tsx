export default function NumbersList() {
  const numbers = Array.from({ length: 30 }, (_, index) => index + 1); // Creates an array [1, 2, ..., 50]

  return (
    <div className="flex ml-3 md:ml-10 flex-col items-center justify-center h-full ">
      {numbers.map((num) => (
        <div
          key={num}
          className=" h-full text-[#343434] text-[10px] md:text-[10px]"
        >
          <p>{num}</p>
        </div>
      ))}
    </div>
  );
}
