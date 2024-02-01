"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  return (
    <div className="w-full h-14 bg-gray-200 flex justify-between items-center px-40">
      <h1 className="font-bold text-xl">Next Auth 2</h1>
      <h3>{session?.user?.email}</h3>
    </div>
  );
};

export default Nav;
