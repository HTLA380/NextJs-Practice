"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [inputVal, setInputVal] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputVal) return;

    router.push(`/${inputVal}`);
    setInputVal("");
  };

  return (
    <header className="flex items-center justify-center w-full h-20 bg-gray-500">
      <nav className="flex items-center justify-between w-full max-w-screen-lg">
        <h3 className="text-3xl font-bold text-white">WikiRocket!</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="px-2 py-2 mr-3 text-red-200 bg-transparent border-2 border-red-200 rounded-md placeholder:text-red-200/50"
            placeholder="search..."
          />
          <button
            className={`py-2 px-4 bg-gray-200 rounded-md hover:bg-gray-300 cursor-pointer`}>
            &#128640;
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Navbar;
