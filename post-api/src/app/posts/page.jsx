import React from "react";
import Post from "../components/Post";
import getPosts from "../lib/getPosts";

export default async function Posts() {
  const posts = await getPosts();

  if (!posts) return;

  return (
    <div className="w-full max-w-screen-lg mx-auto my-10">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
