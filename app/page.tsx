"use client";
import { useEffect, useState } from "react";
import { Diet } from "../models/diet";

import diet_example from "../public/diet_example.json";

import { League_Spartan } from "next/font/google";
const leagueSpartan = League_Spartan({ subsets: ["latin"] });

import { signIn, useSession } from "next-auth/react";

import DayBlock from "../src/components/DayBlock";

import Loading from "react-loading";
import Link from "next/link";
import { set } from "mongoose";

const Home: React.FC = () => {
  const [diets, setDiets] = useState<Diet[]>(diet_example.diets);
  const [isLoading, setIsLoading] = useState(false);
  const [canRender, setCanRender] = useState(false);
  const { data: session, status } = useSession();

  setTimeout(() => {
    setCanRender(true);
  }, 1000);

  useEffect(() => {
    async function getDiets() {
      const data = await fetch(`/diets-api?userEmail=${session?.user?.email}`)
        .then((res) => res.json())
        .then((data) => data);
      setDiets(data.diets);
      setIsLoading(false);
    }

    if (status === "loading") {
      setIsLoading(true);
    }
    if (status === "authenticated") {
      getDiets();
    }
    if (status === "unauthenticated") {
      setIsLoading(false);
      setDiets(diet_example.diets);
    }
  }, [canRender, status, session]);

  return (
    <>
      <main
        className="w-full 2xl:h-full"
        style={{
          backgroundImage: "url(/surface.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex flex-row gap-8 items-center bg-black bg-opacity-35 p-2 rounded-b-xl">
            <h1
              className={`${leagueSpartan.className} text-white text-4xl text-left font-bold mt-10 uppercase`}
            >
              Dieta
            </h1>
            {canRender &&
              (session ? (
                <Link
                  href={"/diets/edit"}
                  onClick={() => setIsLoading(true)}
                  className={`${leagueSpartan.className} text-gray-100 text-lg text-left font-bold mt-10 uppercase cursor-pointer hover:underline select-none`}
                >
                  editar
                </Link>
              ) : (
                <a
                  onClick={() => signIn()}
                  className={`${leagueSpartan.className} text-gray-100 text-lg text-left font-bold mt-10 uppercase cursor-pointer hover:underline select-none`}
                >
                  crie sua dieta
                </a>
              ))}
          </div>

          {isLoading ? (
            <div className="w-full flex justify-center flex-wrap gap-4 mt-8 pb-20">
              <div className="min-w-[340px] h-[224px] rounded-lg shadow-md p-8 flex flex-col items-center justify-center">
                <Loading type="spin" color="#f9f5f5" height={50} width={50} />
              </div>
              <div className="min-w-[340px] h-[224px] rounded-lg shadow-md p-8 flex flex-col items-center justify-center">
                <Loading type="spin" color="#f9f5f5" height={50} width={50} />
              </div>
              <div className="min-w-[340px] h-[224px] rounded-lg shadow-md p-8 flex flex-col items-center justify-center">
                <Loading type="spin" color="#f9f5f5" height={50} width={50} />
              </div>
              <div className="min-w-[340px] h-[224px] rounded-lg shadow-md p-8 flex flex-col items-center justify-center">
                <Loading type="spin" color="#f9f5f5" height={50} width={50} />
              </div>
              <div className="min-w-[340px] h-[224px] rounded-lg shadow-md p-8 flex flex-col items-center justify-center">
                <Loading type="spin" color="#f9f5f5" height={50} width={50} />
              </div>
              <div className="min-w-[340px] h-[224px] rounded-lg shadow-md p-8 flex flex-col items-center justify-center">
                <Loading type="spin" color="#f9f5f5" height={50} width={50} />
              </div>
              <div className="min-w-[340px] h-[224px] rounded-lg shadow-md p-8 flex flex-col items-center justify-center">
                <Loading type="spin" color="#f9f5f5" height={50} width={50} />
              </div>
            </div>
          ) : (
            <div className="w-full flex justify-center flex-wrap gap-4 mt-8 pb-20">
              {diets.map((diet) => (
                <DayBlock key={diet.day + "_key"} day={diet.day} diet={diet} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
