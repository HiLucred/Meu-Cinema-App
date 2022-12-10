import { GetStaticProps } from "next";
import Head from "next/head";
import Titles from "../../components/SliderTitles";
import { BaseTitle } from "../../components/Typography";
import { loadNowPlaying } from "../../lib/loadNowPlaying";
import { loadTopRated } from "../../lib/loadTopRated";

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

export default function Tv({ topRated, nowPlaying }: MoviesProps) {
  return (
    <>
      <Head>
        <title>Séries</title>
      </Head>

      <BaseTitle>Séries mais bem avaliados</BaseTitle>
      <Titles data={topRated} />

      <BaseTitle>Em cartaz</BaseTitle>
      <Titles data={nowPlaying} />
    </>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [
//       { params: { mediaType: "movie" } },
//       { params: { mediaType: "tv" } },
//     ],
//     fallback: "blocking",
//   };
// };

export const getStaticProps: GetStaticProps = async () => {
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
