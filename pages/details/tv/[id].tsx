import Head from "next/head";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { BaseTitle } from "../../../components/Typography";
import { imageUrl } from "../../../lib/tmdb";
import { DetailsContainer, Text } from "../../../styles/pages/details";
import { FaPlusCircle } from "react-icons/fa";

interface DetailsProps {
  titleDetails: {
    name: string;
    tagline: string;
    overview: string;
    backdrop_path: string;
    vote_average: number;
    original_name: string;

    genres: {
      name: string;
    }[];
  };
}

export default function Details({ titleDetails }: DetailsProps) {
  const voteAverage = titleDetails.vote_average.toFixed(1);

  return (
    <>
      <Head>
        <title>Filmes e séries | {titleDetails.name}</title>
      </Head>

      <BaseTitle>{titleDetails.name}</BaseTitle>
      <DetailsContainer>
        <Image
          alt=""
          src={`${imageUrl}${titleDetails.backdrop_path}`}
          width={600}
          height={350}
        />

        <Text>
          <span>{titleDetails.tagline}</span>
          <p>{titleDetails.overview}</p>
          <ul>
            <li>Nota: {voteAverage}</li>
            <li>Título original: {titleDetails.original_name}</li>
            <li>
              {titleDetails.genres.map((item) => {
                return (
                  <span key={item.name}>
                    {item.name} {item.name.length > 1 ? " / " : null}
                  </span>
                );
              })}
            </li>
          </ul>
        </Text>
      </DetailsContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const response = await fetch(
    `http://localhost:3000/api/details/tv/${params?.id}`
  );

  const data = await response.json();

  return {
    props: {
      titleDetails: data.list,
    },
  };
};
