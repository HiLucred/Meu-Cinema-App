export async function loadNowPlaying(mediaType: "movie" | "tv") {
  const response = await fetch(
    `https://meucinema.vercel.app/api/nowPlaying/${mediaType}`
  );
  const data = await response.json();

  return data;
}
