import Link from "next/link";
import React from "react";

const Post = ({ post }) => {
  if (!post) return;

  const { title, body, id } = post;

  return (
    <div className="p-5 m-5 text-gray-200 bg-gray-800 rounded-md">
      <Link href={`/posts/${id}`} className="text-2xl font-bold">
        {title}
      </Link>
      <p className="mt-3 text-gray-300">{body}</p>
    </div>
  );
};

export default Post;
