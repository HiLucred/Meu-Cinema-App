import { styled } from "@stitches/react";

export const TitlesFoundContainer = styled("section", {
  width: "100%",
  marginTop: "1rem",

  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",

  img: {
    borderRadius: 12,
    cursor: "pointer",

    "&:hover": {
      opacity: 0.9,
    },
  },
});

export const Title = styled("div", {
  position: "relative",

  svg: {
    cursor: "pointer",

    "&:hover": {
      opacity: 0.8,
    },
  },

  a: {
    display: "flex",
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});
