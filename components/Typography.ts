import { styled } from "@stitches/react";

export const BaseTitle = styled("h2", {
  position: "relative",

  "&::after": {
    content: "",
    marginButton: "5rem",
    width: "100%",
    height: "0.2rem",
    borderRadius: 16,

    position: "absolute",
    bottom: "-0.5rem",
    left: 0,
    backgroundColor: "$red-100",
  },

  variants: {
    size: {
      medium: {
        fontSize: "1.8rem",
      },
    },
    color: {
      black: {
        color: "black",
      },
    },
  },
});
