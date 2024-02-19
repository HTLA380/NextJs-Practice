import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto my-10">
      <h1 className="text-3xl font-extrabold text-center">POST API</h1>
      <Link href={"/posts"}>Posts</Link>
    </div>
  );
};

export default Home;
