import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
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
