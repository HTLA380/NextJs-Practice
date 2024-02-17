import React from "react";

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("failed to fetch users");
  }
  return await response.json();
};

export default getUsers;
