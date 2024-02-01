import Link from "next/link";
import React from "react";

const Home = async () => {
  return (
    <div className="text-center">
      <h1 className="my-10 text-xl font-bold">
        This is a home page that every can access
      </h1>
      <Link
        href={"./Login"}
        className="bg-transparent border border-gray-800 px-4 py-2 mx-3 rounded-md text-sm hover:bg-gray-800 hover:text-white transition duration-300">
        Login
      </Link>
      <Link
        href={"./Register"}
        className="bg-transparent border border-gray-800 px-4 py-2 mx-3 rounded-md text-sm hover:bg-gray-800 hover:text-white transition duration-300">
        Register
      </Link>

      <div className="flex justify-center items-center gap-2 text-gray-600 max-w-[30rem] mx-auto mt-10">
        <div className="h-px w-full bg-gray-400" />
        <p className="whitespace-nowrap"> Already Sign In?</p>
        <div className="h-px w-full bg-gray-400" />
      </div>

      <Link
        href={"./member"}
        className="bg-transparent border border-gray-800 px-4 py-2 mt-5 rounded-md text-sm hover:bg-gray-800 hover:text-white transition duration-300 block w-fit mx-auto">
        Go To Member Page
      </Link>
    </div>
  );
};

export default Home;
