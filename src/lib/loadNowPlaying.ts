import { vercelUrl } from "./tmdb";

export async function loadNowPlaying(mediaType: "movie" | "tv") {
  const response = await fetch(`${vercelUrl}api/nowPlaying/${mediaType}`);
  const data = await response.json();

  return data;
}
