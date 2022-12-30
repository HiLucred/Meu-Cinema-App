import Head from "next/head";
import TitlesFound from "../components/TitlesFound";
import { useState } from "react";
import { BaseTitle } from "../components/Typography";
import { SearchContainer, SearchInput } from "../styles/pages/search";
import { vercelUrl } from "../lib/tmdb";

interface DataTitles {
  id: number;
  title: string;
  poster_path: string;
  media_type: string;
}

export default function Search() {
  const [searchResult, setSearchResult] = useState("");
  const [titles, setTitles] = useState<DataTitles[]>([]);

  const isDisabled = !!!searchResult;

  async function handleSearchTitles() {
    const response = await fetch(`${vercelUrl}/api/search?q=${searchResult}`);

    const data = await response.json();

    const titlesAvailable = data.list.filter(
      (item: { poster_path: string }) => {
        return item.poster_path != undefined;
      }
    );

    setTitles(titlesAvailable);
  }

  return (
    <>
      <Head>
        <title>Filmes e Séries | Pesquisar</title>
      </Head>

      <SearchContainer>
        <BaseTitle size={"medium"}>Pesquise por algum título</BaseTitle>

        <SearchInput>
          <input
            type="text"
            placeholder="Digite aqui por algum filme, série etc..."
            title={searchResult}
            onChange={(event) => {
              setSearchResult(event.target.value);
            }}
          />

          <button onClick={handleSearchTitles} disabled={isDisabled}>
            Buscar
          </button>
        </SearchInput>

        <TitlesFound titlesFound={titles} type={"medium"} />
      </SearchContainer>
    </>
  );
}
