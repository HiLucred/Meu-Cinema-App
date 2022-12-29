import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import Titles from "../../components/SliderTitles";
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

export default function TvPage({ topRated, nowPlaying }: MoviesProps) {
  const topRatedFormatted = topRated.map((item) => {
    return {
      ...item,
      media_type: "tv",
    };
  });

  const nowPlayingFormatted = nowPlaying.map((item) => {
    return {
      ...item,
      media_type: "tv",
    };
  });

  return (
    <>
      <Head>
        <title>Séries</title>
      </Head>

      <BaseTitle>Séries mais bem avaliados</BaseTitle>
      <Titles data={topRatedFormatted} />

      <BaseTitle>Séries novas</BaseTitle>
      <Titles data={nowPlayingFormatted} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const topRated = await loadTopRated("tv");
  const nowPlaying = await loadNowPlaying("tv");

  return {
    props: {
      topRated: topRated.list,
      nowPlaying: nowPlaying.list,
    },

    revalidate: 60 * 60 * 1, // 1 hour
  };
};
