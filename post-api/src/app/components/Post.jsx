import Link from "next/link";
import React from "react";

const Post = ({ data }) => {
  const { title, body, id } = data;

  if (!data) return;

  return (
    <div className="p-5 m-5 bg-gray-800 rounded-md text-gray-200">
      <Link href={`/posts/${id}`} className="text-2xl font-bold">
        {title}
      </Link>
      <p className="mt-3 text-gray-300">{body}</p>
    </div>
  );
};

export default Post;
