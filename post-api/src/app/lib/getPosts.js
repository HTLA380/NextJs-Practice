const POST_URL = "https://dummyjson.com/posts";

export default async function getPosts() {
  try {
    const res = await fetch(POST_URL);
    if (!res.ok) {
      throw new Error("Bad response");
    }
    const data = await res.json();

    return data?.posts;
  } catch (error) {
    throw error;
  }
}
