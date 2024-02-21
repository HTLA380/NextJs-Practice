import UserCard from "@/app/components/UserCard";
import getPost from "@/app/lib/getPost";
import getUser from "@/app/lib/getUser";
import React, { Suspense } from "react";

export default async function PostDetail({ params: { id } }) {
  const postData = getPost(id);
  const userData = getUser(id);

  const post = await postData;

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-screen-lg mx-auto my-10 font-semibold text-center">
      <div className="flex items-center w-full gap-4">
        <p className="my-3">Tags:</p>
        <div className="flex items-center gap-3 px-4 py-1 font-bold text-gray-200 capitalize bg-gray-800 rounded-sm">
          {post.tags?.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
      </div>
      <p className="w-full text-sm font-extrabold uppercase text-end">
        Post Id: {post.id}
      </p>
      <h1 className="text-3xl font-semibold">{post.title}</h1>
      <p className="max-w-screen-sm mt-5 text-xl font-semibold text-gray-600">
        {post.body}
      </p>

      <Suspense fallback={<p className="text-xl">Loading...</p>}>
        <UserCard promise={userData} />
      </Suspense>
    </div>
  );
}

export async function generateStaticParams() {
  const data = await fetch("https://dummyjson.com/posts").then((res) =>
    res.json()
  );

  return data.posts.map((post) => ({
    id: post.id.toString(),
  }));
}
