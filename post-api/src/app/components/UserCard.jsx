import React from "react";

const UserCard = async ({ promise }) => {
  if (!promise) return;

  const user = await promise;

  return (
    <div className="w-full text-start">
      <p className="uppercase mt-10 mb-2 font-extrabold">Author</p>
      <div className="flex items-center gap-3 bg-gray-200 w-fit px-3 py-2 rounded-md">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img
            src={user.image}
            alt={user.firstName}
            className="w-full h-full object-cover"
          />
        </div>
        <p>
          {user.firstName} {user.lastName}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
