import { styled } from "@stitches/react";

export const PerfilsContainer = styled("div", {
  marginTop: "1.5rem",
  marginBottom: "3rem",
  display: "flex",
  alignItems: "center",
});

export const Perfil = styled("div", {
  borderRadius: 16,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",

  img: {
    objectFit: "cover",
    borderRadius: 100,
    transition: "0.3s",

    "&:hover": {
      filter: "brightness(70%)",
    },
  },
});
