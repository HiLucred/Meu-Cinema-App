import { styled } from "@stitches/react";

export const DetailsContainer = styled("main", {
  marginTop: "3rem",
  display: "flex",
  gap: "2rem",

  img: {
    borderRadius: 16,
  },
});

export const Text = styled("div", {
  display: "flex",
  flexDirection: "column",

  span: {
    marginBottom: "1.5rem",
  },

  p: {
    marginBottom: "1.5rem",
  },

  li: {
    listStyleType: "none",
  },

  button: {
    marginTop: "1rem",
    padding: "1rem",

    border: "none",
    borderRadius: 8,
    transition: `0.2s`,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",

    cursor: "pointer",
    fontSize: "1rem",
    color: "$white",
    backgroundColor: "$red-100",

    "&:hover": {
      backgroundColor: "$red-200",
    },
  },
});
