import Image from "next/image";
import { imageUrl } from "../../lib/tmdb";
import ActionBox from "../ActionBox";
import { Title, TitlesFoundContainer } from "./styles";

interface TitlesFoundProps {
  type: "medium" | "large";
  titlesFound: {
    id: number;
    title?: string;
    poster_path: string;
    media_type?: string;
  }[];
}

export default function TitlesFound({ type, titlesFound }: TitlesFoundProps) {
  const width = type === "large" ? 280 : 180;
  const heigth = type === "large" ? 420 : 280;

  return (
    <>
      <TitlesFoundContainer>
        {titlesFound.map((item) => {
          return (
            <Title key={item.id}>
              <Image
                src={`${imageUrl}${item.poster_path}`}
                alt={""}
                width={width}
                height={heigth}
              />

              <ActionBox size={type} data={item} />
            </Title>
          );
        })}
      </TitlesFoundContainer>
    </>
  );
}
