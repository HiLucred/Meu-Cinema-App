import { vercelUrl } from "./tmdb";

export default async function loadPersonPopular() {
  const response = await fetch(`${vercelUrl}/api/personPopular`);

  const data = await response.json();

  return data;
}
