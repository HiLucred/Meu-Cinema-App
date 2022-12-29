export default async function loadDetails(
  mediaType: "movie" | "tv",
  id: string | undefined
) {
  const response = await fetch(
    `https://meucinema.vercel.app/api/details/${mediaType}/${id}`
  );

  const data = await response.json();

  return data;
}
