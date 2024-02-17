import React from "react";
import getUsers from "../libs/getUsers";
import Link from "next/link";

const UsersPage = async () => {
  const users = await getUsers();

  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold">Users</h1>
      {users.map((user) => {
        return (
          <>
            <Link
              key={user.id}
              className="text-2xl mt-10 block"
              href={`/users/${user.id}`}>
              {user.name}
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default UsersPage;
