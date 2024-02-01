import Link from "next/link";
import React from "react";
import UserInfo from "../(components)/UserInfo";

const Member = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mt-10">
        Only Authenticated Member can visit this page
      </h1>
      <Link href={"/"} className="underline text-blue-500 font-semibold">
        Home
      </Link>
      <UserInfo />
    </div>
  );
};

export default Member;
