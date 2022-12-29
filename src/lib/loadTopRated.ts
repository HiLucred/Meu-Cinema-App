export async function loadTopRated(mediaType: "movie" | "tv") {
  const response = await fetch(
    `https://meucinema.vercel.app/api/topRated/${mediaType}`
  );
  const data = await response.json();

  return data;
}
