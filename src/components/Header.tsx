"use client";
import { useState } from "react";
import Image from "next/image";

import { useSession, signIn, signOut } from "next-auth/react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { data: session } = useSession();
  const [canRender, setCanRender] = useState(false);

  setTimeout(() => {
    setCanRender(true);
  }, 1500);

  return (
    <header className="bg-gray-800 text-white flex justify-between items-center px-8">
      <Image
        src="/logo.png"
        alt="logo"
        width={182}
        height={70}
        className="select-none"
      />
      <nav className="flex space-x-4">
        {canRender && !session && (
          <button
            role="button"
            aria-label="Login"
            className="font-bold text-lg cursor-pointer text-white bg-gray-900 hover:bg-gray-950 py-2 px-4 select-none rounded-md motion-reduce:transition-colors motion-reduce:duration-200"
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Login
          </button>
        )}
        {canRender && session && (
          <>
            {session.user?.image && (
              <span
                className="rounded-3xl w-11 h-11"
                style={{
                  backgroundImage: `url('${session.user.image}')`,
                  backgroundSize: "cover",
                }}
              />
            )}
            <span className="hidden sm:block">
              <small>Logado como</small>
              <br />
              {session.user?.name && <strong>{session.user.name}</strong>}
            </span>
            <button
              role="button"
              aria-label="Login"
              className="font-bold text-lg cursor-pointer text-white bg-gray-900 hover:bg-gray-950 py-2 px-4 select-none rounded-md motion-reduce:transition-colors motion-reduce:duration-200"
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sair
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
