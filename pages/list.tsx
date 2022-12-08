import Head from "next/head";
import TitlesFound from "../components/TitlesFound";
import { useContext } from "react";
import { BaseTitle } from "../components/Typography";
import { ListContext } from "../context/ListContext";
import { ListContainer } from "../styles/pages/list";

export default function List() {
  const { titlesList } = useContext(ListContext);

  return (
    <>
      <Head>
        <title>Sua lista de filmes e séries</title>
      </Head>

      <BaseTitle>Sua lista</BaseTitle>
      <ListContainer>
        <TitlesFound titlesFound={titlesList} type={"large"} />
      </ListContainer>
    </>
  );
}
