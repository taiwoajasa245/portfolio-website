export default function NumbersList() {
    const numbers = Array.from({ length: 30 }, (_, index) => index + 1); // Creates an array [1, 2, ..., 50]
  
    return (
      <div className="flex ml-3 flex-col items-center justify-cente ">
        {numbers.map((num) => (
          <div key={num} className=" mt-[3px] text-[#343434] text-[15px]">
            <p>{num}</p>
          </div>
        ))}
      </div>
    );
  }
  