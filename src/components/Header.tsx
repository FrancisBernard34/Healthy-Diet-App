"use client"
import Image from "next/image";

import { useSession, signIn, signOut } from "next-auth/react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-gray-800 text-white flex justify-between items-center px-8">
      <Image src="/logo.png" alt="logo" width={182} height={70} className="select-none" />
      <nav className="flex space-x-4">
      {!session && (
            <>
              <span className="">
                You are not signed in
              </span>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign in
              </a>
            </>
          )}
          {session && (
            <>
              {session.user?.image && (
                <span
                  className="rounded-3xl w-11 h-11"
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                />
              )}
              <span>
                <small>Signed in as</small>
                <br />
                {session.user?.name && <strong>{session.user.name}</strong>}
              </span>
              <a
                className="cursor-pointer hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out
              </a>
            </>
          )}
      </nav>
    </header>
  );
};

export default Header;