import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Titles from "../../components/SliderTitles";
import { BaseTitle } from "../../components/Typography";

interface Trending {
  id: number;
  title: string;
  poster_path: string;
  media_type: string;
}

interface MoviesProps {
  topRated: Trending[];
  nowPlaying: Trending[];
}

export default function BrowseContent({ topRated, nowPlaying }: MoviesProps) {
  return (
    <>
      <Head>
        <title>Filmes</title>
      </Head>

      <BaseTitle>Filmes mais bem avaliados</BaseTitle>
      <Titles data={topRated} />

      <BaseTitle>Em cartaz</BaseTitle>
      <Titles data={nowPlaying} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { mediaType: "movie" } },
      { params: { mediaType: "tv" } },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<
  any,
  { mediaType: string }
> = async ({ params }) => {
  const topRatedMovies = await fetch(
    `http://localhost:3000/api/topRated/${params?.mediaType}`
  ).then((res) => res.json());

  const nowPlayingMovies = await fetch(
    `http://localhost:3000/api/nowPlaying/${params?.mediaType}`
  ).then((res) => res.json());

  return {
    props: {
      topRated: topRatedMovies.list,
      nowPlaying: nowPlayingMovies.list,
    },

    revalidate: 60 * 60 * 1, // 1 hour
  };
};
