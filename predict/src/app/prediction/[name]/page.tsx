import Link from "next/link";
import React from "react";

const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
};

const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  return res.json();
};

const getPredictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
};

interface Params {
  params: { name: string };
}

const Page = async ({ params }: Params) => {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-96 p-5 bg-gray-800 text-white rounded-lg">
        <h1 className="capitalize text-center text-xl text-red-300">
          {params.name}
        </h1>
        <p>Age: {age?.age || "name doesn't exists"}</p>
        <div className="my-2 w-full h-px bg-white " />
        <p>Gender: {gender?.gender}</p>
        <div className="my-2 w-full h-px bg-white " />
        <p>Country: {country?.country[0]?.country_id}</p>
        <div className="my-2 w-full h-px bg-white " />

        <Link
          className="mt-3 bg-red-300 text-black py-1 px-2 rounded-full block mx-auto w-fit"
          href={"/"}>
          Go Back
        </Link>
      </div>
    </main>
  );
};

export default Page;
