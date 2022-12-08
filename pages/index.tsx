import Head from "next/head";
import Titles from "../components/SliderTitles";
import Perfils from "../components/SliderPerfils";
import { GetServerSideProps } from "next";
import { HomeContainer } from "../styles/pages";
import { BaseTitle } from "../components/Typography";

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
  const trendingTitles = await fetch(
    `http://localhost:3000/api/trending?q=all`
  ).then((res) => res.json());

  const personPopular = await fetch(
    "http://localhost:3000/api/personPopular"
  ).then((res) => res.json());

  const trendingTv = await fetch(
    `http://localhost:3000/api/trending?q=tv`
  ).then((res) => res.json());

  const trendingMovies = await fetch(
    `http://localhost:3000/api/trending?q=movie`
  ).then((res) => res.json());

  return {
    props: {
      trendingTitles: trendingTitles.list,
      personPopular: personPopular.list,
      trendingTv: trendingTv.list,
      trendingMovies: trendingMovies.list,
    },
  };
};
