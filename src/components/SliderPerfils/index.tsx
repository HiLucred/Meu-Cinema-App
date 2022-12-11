import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { Perfil, PerfilsContainer } from "./styles";
import { imageUrl } from "../../lib/tmdb";
import { breakPointsValues } from "../breakPointsSliderValues";

interface PerfilsProps {
  data: {
    id: number;
    name: string;
    profile_path: string;
  }[];
}

export default function Perfils({ data }: PerfilsProps) {
  const [perfilsSliderRef] = useKeenSlider({
    slides: {
      perView: 6,
      spacing: 1,
    },
    breakpoints: breakPointsValues,
  });

  return (
    <PerfilsContainer ref={perfilsSliderRef} className="keen-slider">
      {data.map((item) => {
        return (
          <Perfil className="keen-slider__slide" key={item.id}>
            <Image
              src={`${imageUrl}${item.profile_path}`}
              alt={""}
              title={item.name}
              width={200}
              height={200}
            />

            <span>{item.name}</span>
          </Perfil>
        );
      })}
    </PerfilsContainer>
  );
}
