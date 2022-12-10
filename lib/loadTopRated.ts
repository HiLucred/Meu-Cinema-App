export async function loadTopRated(mediaType: "movie" | "tv") {
  const response = await fetch(
    `http://localhost:3000/api/topRated/${mediaType}`
  );
  const data = await response.json();

  return data;
}
