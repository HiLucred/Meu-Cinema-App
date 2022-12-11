import Head from "next/head";
import Titles from "../../components/SliderTitles";
import { GetStaticProps } from "next";
import { BaseTitle } from "../../components/Typography";
import { loadNowPlaying } from "../../lib/loadNowPlaying";
import { loadTopRated } from "../../lib/loadTopRated";

interface Trending {
  id: number;
  poster_path: string;
  media_type: string;
}

interface MoviesProps {
  topRated: Trending[];
  nowPlaying: Trending[];
}

export default function BrowseContent({ topRated, nowPlaying }: MoviesProps) {
  const topRatedFormatted = topRated.map((item) => {
    return {
      ...item,
      media_type: "movie",
    };
  });

  const nowPlayingFormatted = nowPlaying.map((item) => {
    return {
      ...item,
      media_type: "movie",
    };
  });

  return (
    <>
      <Head>
        <title>Filmes</title>
      </Head>

      <BaseTitle>Filmes mais bem avaliados</BaseTitle>
      <Titles data={topRatedFormatted} />

      <BaseTitle>Em cartaz</BaseTitle>
      <Titles data={nowPlayingFormatted} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const topRated = await loadTopRated("movie");
  const nowPlaying = await loadNowPlaying("movie");

  return {
    props: {
      topRated: topRated.list,
      nowPlaying: nowPlaying.list,
    },

    revalidate: 60 * 60 * 1, // 1 hour
  };
};
