import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { BaseTitle } from "../../../components/Typography";
import { imageUrl } from "../../../lib/tmdb";
import { DetailsContainer, Text } from "../../../styles/pages/details";
import { FaPlusCircle, FaCheckCircle } from "react-icons/fa";
import { useContext } from "react";
import { ListContext } from "../../../context/ListContext";

interface DetailsProps {
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

export default function Details({ titleDetails }: DetailsProps) {
  const { addTitleToList, titlesList } = useContext(ListContext);

  // const releaseDate = titleDetails.release_date.split("-").reverse().join("/");
  // const voteAverage = titleDetails.vote_average.toFixed(1);

  const titleAlreadyExistInList = titlesList.findIndex(
    (item) => item.id === titleDetails.id
  );

  function handleAddTitleInList() {
    console.log("deu?");

    const newTitle = {
      id: titleDetails.id,
      title: titleDetails.title,
      poster_path: titleDetails.poster_path,
      media_type: "movie",
    };

    addTitleToList(newTitle);
  }

  return (
    <>
      <Head>
        <title>Filmes e séries | {titleDetails.title}</title>
      </Head>

      <BaseTitle>{titleDetails.title}</BaseTitle>

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
            <li>Nota: {titleDetails.vote_average}</li>
            <li>Lançado em: {titleDetails.release_date}</li>
            <li>Título original: {titleDetails.original_title}</li>
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

          {titleAlreadyExistInList >= 0 ? (
            <button disabled={true}>
              <FaCheckCircle size={22} />
              Na sua lista
            </button>
          ) : (
            <button onClick={handleAddTitleInList}>
              <FaPlusCircle size={22} />
              Adicionar na sua lista
            </button>
          )}
        </Text>
      </DetailsContainer>
    </>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: true,
//   };
// };

// export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
//   params,
// }) => {
//   const response = await fetch(
//     `http://localhost:3000/api/details/movie/${params?.id}`
//   );

//   const data = await response.json();

//   return {
//     props: {
//       titleDetails: data.list,
//     },
//   };
// };

export const getServerSideProps: GetServerSideProps<any, { id: string }> = async ({
  params,
}) => {
  const response = await fetch(
    `http://localhost:3000/api/details/movie/${params?.id}`
  );

  const data = await response.json();

  return {
    props: {
      titleDetails: data.list,
    },
  };
};
