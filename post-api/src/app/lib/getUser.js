import React from "react";

const User_URL = "https://dummyjson.com/users";

export default async function getUser(id) {
  if (!id) return;

  try {
    const res = await fetch(`${User_URL}/${id}`);

    if (!res.ok) {
      throw new Error("Bad Request");
    }

    const data = res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
