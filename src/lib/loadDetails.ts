export default async function loadDetails(
  mediaType: "movie" | "tv",
  id: string | undefined
) {
  const response = await fetch(
    `http://localhost:3000/api/details/${mediaType}/${id}`
  );

  const data = await response.json();

  return data;
}
