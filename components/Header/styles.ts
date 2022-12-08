import { styled } from "../../styles";

export const HeaderContainer = styled("header", {
  width: "100%",
  height: "5rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  background: "$black-100",
  boxShadow: "0 3px 5px 0.5px rgba(0, 0, 0, 0.1)",

  ul: {
    listStyleType: "none",

    display: "flex",
    gap: "1.125rem",
  },

  a: {
    textDecoration: "none",
    color: "$white",
    position: "relative",

    "&:hover": {
      color: "$red-100",
    },

    "&::after": {
      content: "",
      position: "absolute",
      bottom: "-0.5rem",
      left: 0,
      width: 0,
      height: 3,
      borderRadius: 8,
      backgroundColor: "transparent",
      transition: "0.4s",
    },

    "&:hover::after": {
      width: "100%",
      backgroundColor: "$red-100",
    },
  },

  svg: {
    opacity: 0,
    visibility: "hidden",
    cursor: "pointer",
  },
});
