import Head from "next/head";
import Titles from "../components/SliderTitles";
import Perfils from "../components/SliderPerfils";
import { GetServerSideProps } from "next";
import { HomeContainer } from "../styles/pages";
import { BaseTitle } from "../components/Typography";
import loadTrending from "../lib/loadTrending";
import loadPersonPopular from "../lib/loadPersonPopular";

interface Trending {
  id: number;
  title: string;
  poster_path: string;
  media_type: string;
}

interface HomeProps {
  trendingTitles: Trending[];
  trendingTv: Trending[];
  trendingMovies: Trending[];

  personPopular: {
    id: number;
    name: string;
    profile_path: string;
  }[];
}

export default function Home({
  trendingTitles,
  trendingTv,
  personPopular,
  trendingMovies,
}: HomeProps) {
  const perfilsAvailables = personPopular.filter((item) => {
    return item.profile_path != undefined;
  });

  return (
    <>
      <Head>
        <title>Filmes e Séries | Home</title>
      </Head>

      <HomeContainer>
        <BaseTitle size={"medium"}>Títulos em destaque</BaseTitle>
        <Titles data={trendingTitles} />

        <BaseTitle size={"medium"}>Pessoas em alta</BaseTitle>
        <Perfils data={perfilsAvailables} />

        <BaseTitle size={"medium"}>Séries bombando na semana</BaseTitle>
        <Titles data={trendingTv} />

        <BaseTitle size={"medium"}>Filmes bombando na semana</BaseTitle>
        <Titles data={trendingMovies} />
      </HomeContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const trendingTitles = await loadTrending("all");

  const personPopular = await loadPersonPopular();

  const trendingTv = await loadTrending("tv");

  const trendingMovies = await loadTrending("movie");

  return {
    props: {
      trendingTitles: trendingTitles.list,
      personPopular: personPopular.list,
      trendingTv: trendingTv.list,
      trendingMovies: trendingMovies.list,
    },
  };
};
