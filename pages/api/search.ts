import type { NextApiRequest, NextApiResponse } from "next";
import { tmdbApi } from "../../lib/tmdb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { q } = req.query;

  const response = await fetch(
    `${tmdbApi}/search/multi/?api_key=${process.env.TMDB_KEY}&query=${q}&language=pt-BR&region=BR`
  );

  const data = await response.json();

  res.status(200).json({
    list: data.results,
  });
}
