import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Title, TitlesContainer } from "./styles";
import { imageUrl } from "../../lib/tmdb";
import ActionBox from "../ActionBox";
import { breakPointsValues } from "../breakPointsSliderValues";

export interface TitlesProps {
  data: {
    id: number;
    title?: string;
    poster_path: string;
    media_type?: string;
  }[];
}

export default function Titles({ data }: TitlesProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4.6,
      spacing: 1,
    },

    breakpoints: breakPointsValues,
  });

  return (
    <TitlesContainer ref={sliderRef} className="keen-slider">
      {data.map((item) => {
        return (
          <Title key={item.id} className="keen-slider__slide">
            <Image
              src={`${imageUrl}${item.poster_path}`}
              alt={""}
              title={item.title}
              width={280}
              height={420}
            />

            <ActionBox data={item} size={"large"} />
          </Title>
        );
      })}
    </TitlesContainer>
  );
}
