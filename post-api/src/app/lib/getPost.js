const POST_URL = "https://dummyjson.com/posts";

export default async function getPost(id) {
  if (!id) return;

  try {
    const res = await fetch(`${POST_URL}/${id}`);

    if (!res.ok) {
      throw new Error("Bad Request");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
