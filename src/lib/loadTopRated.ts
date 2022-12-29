import { vercelUrl } from "./tmdb";

export async function loadTopRated(mediaType: "movie" | "tv") {
  const response = await fetch(`${vercelUrl}/api/topRated/${mediaType}`);
  const data = await response.json();

  return data;
}
