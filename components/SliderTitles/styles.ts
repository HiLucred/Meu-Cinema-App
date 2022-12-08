import { styled } from "../../styles";

export const TitlesContainer = styled("section", {
  marginTop: "1.5rem",
  marginBottom: "3rem",
  display: "flex",
  alignItems: "center",
});

export const Title = styled("div", {
  position: "relative",

  img: {
    borderRadius: 12,
    cursor: "pointer",

    "&:hover": {
      opacity: "0.9",
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});
