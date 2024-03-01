"use client"
import { League_Spartan } from "next/font/google";
const leagueSpartan = League_Spartan({ subsets: ["latin"] });

import { useDayStore } from "@/store/zustand";

import DayEditBlock from "@/src/components/DayEditBlock";
import Link from "next/link";

const DietsEditPage: React.FC = () => {
  const { days } = useDayStore();

  return (
    <>
      <main
        className="w-full 2xl:h-full"
        style={{
          backgroundImage: "url(/underground.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex flex-row gap-8 items-center">
            <h1
              className={`${leagueSpartan.className} text-white text-4xl text-left font-bold mt-10 uppercase`}
            >
              Edite sua dieta
            </h1>
            <Link
              href={"/"}
              className={`${leagueSpartan.className} text-gray-300 text-lg text-left font-bold mt-10 uppercase underline cursor-pointer hover:text-gray-100`}
            >
              voltar
            </Link>
          </div>
          <div className="w-full flex justify-center flex-wrap gap-4 mt-8 pb-20">
            {days.map((day) => (
              <DayEditBlock key={day} day={day} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default DietsEditPage;
