import { Metadata } from "next";
import Grettings from "@/components/Grettings";
import VerticalLine from "@/components/VerticalLIne";
import NumbersList from "@/components/NumberLIst";

export const metadata: Metadata = {
  title: "Ajasa Taiwo Portfolio",
  description: "Portfolio of a backend developer",
};

export default function HelloPage() {
  return (
    <>
      <div className="flex items-center ">
        {/*  number-list */}
        <NumbersList />

        {/*  line 1-5  */}
        <VerticalLine height="500" />
        <div>
          <VerticalLine height="200" />
        </div>
        <VerticalLine height="50" />

        {/* Grettings */}
        <Grettings />
      </div>
    </>
  );
}
