import type { NextApiRequest, NextApiResponse } from "next";
import { tmdbApi } from "../../../lib/tmdb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { mediaType } = req.query;
  let section = "";

  if (mediaType === "tv") {
    section = "on_the_air";
  } else {
    section = "now_playing";
  }

  const response = await fetch(
    `${tmdbApi}/${mediaType}/${section}?api_key=${process.env.TMDB_KEY}&language=pt-BR`
  );

  const data = await response.json();

  res.status(200).json({
    list: data.results,
  });
}
