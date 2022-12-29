import { vercelUrl } from "./tmdb";

export default async function loadDetails(
  mediaType: "movie" | "tv",
  id: string | undefined
) {
  const response = await fetch(`${vercelUrl}/api/details/${mediaType}/${id}`);

  const data = await response.json();

  return data;
}
