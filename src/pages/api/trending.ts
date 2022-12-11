import type { NextApiRequest, NextApiResponse } from "next";
import { tmdbApi } from "../../lib/tmdb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { q } = req.query;

  const response = await fetch(
    `${tmdbApi}/trending/${q}/week?api_key=${process.env.TMDB_KEY}&language=pt-BR`
  );

  const data = await response.json();

  res.status(200).json({
    list: data.results,
  });
}
