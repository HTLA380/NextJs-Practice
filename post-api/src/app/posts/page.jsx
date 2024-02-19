import React from "react";
import Post from "../components/Post";
import fetchData from "../lib/fetchData";

const POST_URL = "https://dummyjson.com/posts";

export default async function Posts() {
  const data = await fetchData(POST_URL);

  if (!data.posts) return;

  return (
    <div className="w-full max-w-screen-lg mx-auto my-10">
      {data.posts.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </div>
  );
}
