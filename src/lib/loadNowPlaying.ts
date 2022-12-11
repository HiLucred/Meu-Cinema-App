export async function loadNowPlaying(mediaType: "movie" | "tv") {
  const response = await fetch(
    `http://localhost:3000/api/nowPlaying/${mediaType}`
  );
  const data = await response.json();

  return data;
}
