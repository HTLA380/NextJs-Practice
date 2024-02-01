import React from "react";
import LoginForm from "../(components)/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/options";

const LoginPage = async () => {
  const session = await getServerSession(options);

  if (session) redirect("/member");

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
