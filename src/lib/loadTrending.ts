import { vercelUrl } from "./tmdb";

export default async function loadTrending(query: "movie" | "tv" | "all") {
  const response = await fetch(`${vercelUrl}/api/trending?q=${query}`);
  const data = await response.json();

  return data;
}
