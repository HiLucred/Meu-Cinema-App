import type { NextApiRequest, NextApiResponse } from "next";
import { tmdbApi } from "../../lib/tmdb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(
    `${tmdbApi}/person/popular?api_key=${process.env.TMDB_KEY}&language=pt-BR&page=1`
  );

  const data = await response.json();

  res.status(200).json({
    list: data.results,
  });
}
