import Head from "next/head";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { BaseTitle } from "../../../components/Typography";
import { imageUrl } from "../../../lib/tmdb";
import { DetailsContainer, Text } from "../../../styles/pages/details";
import loadDetails from "../../../lib/loadDetails";
import AddToListButton from "../../../components/AddToListButton/movies";

export interface MovieDetailsProps {
  titleDetails: {
    id: number;
    title: string;
    tagline: string;
    overview: string;
    backdrop_path: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    original_title: string;
    media_type: string;

    genres: {
      name: string;
    }[];
  };
}

export default function MovieDetails({ titleDetails }: MovieDetailsProps) {
  const releaseDateFormatted = titleDetails?.release_date
    .split("-")
    .reverse()
    .join("/");

  const voteAverageFormatted = titleDetails?.vote_average.toFixed(1);

  return (
    <>
      <Head>
        <title>Filmes e séries | {titleDetails?.title}</title>
      </Head>

      <BaseTitle>{titleDetails?.title}</BaseTitle>

      <DetailsContainer>
        <Image
          alt=""
          src={`${imageUrl}${titleDetails?.backdrop_path}`}
          width={600}
          height={350}
        />

        <Text>
          <span>{titleDetails?.tagline}</span>
          <p>{titleDetails?.overview}</p>
          <ul>
            <li>Nota: {voteAverageFormatted}</li>
            <li>Lançado em: {releaseDateFormatted}</li>
            <li>Título original: {titleDetails?.original_title}</li>
            <li>
              {titleDetails?.genres.map((item) => {
                return (
                  <span key={item.name}>
                    {item.name} {item.name.length > 1 ? " / " : null}
                  </span>
                );
              })}
            </li>
          </ul>

          <AddToListButton titleDetails={titleDetails} />
        </Text>
      </DetailsContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const titleDetails = await loadDetails("movie", params?.id);

  return {
    props: {
      titleDetails: titleDetails.list,
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
