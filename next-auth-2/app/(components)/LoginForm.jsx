"use client";
import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }
      router.replace("member");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = async () => {
    const result = await signIn("google");

    if (result?.error) {
      console.error("Error signing in:", result.error);
    } else {
      router.push("/member");
    }
  };

  return (
    <div className="grid place-items-center h-[70vh]">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Enter the details</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Login
          </button>

          <div className="flex justify-center items-center gap-4 text-gray-600">
            <div className="h-px w-full bg-gray-300" />
            OR
            <div className="h-px w-full bg-gray-300" />
          </div>

          <button
            className="bg-transparent text-gray-800 border border-gray-800 cursor-pointer px-6 py-2 rounded-md "
            onClick={handleSignIn}
            type="button">
            Login In With Google
          </button>

          {error && (
            <div className="bg-red-500 text-white text-sm py-1 px-3 w-fit rounded-md">
              {error}
            </div>
          )}

          <Link href={"/Register"} className="text-sm mt-3 text-right">
            Don't have an account? <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
