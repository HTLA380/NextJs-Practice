"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import React from "react";

const Home = () => {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`);
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-96 bg-slate-300 rounded-lg p-4 flex flex-col justify-center items-center">
        <h1 className="mb-2">Enter your Name</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder="Type your name..."
            value={inputVal}
            className="py-1 px-3 w-80 border border-gray-800"
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button
            type="submit"
            className=" bg-gray-800 text-white mt-5 rounded-full py-2 w-52">
            Predict Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
