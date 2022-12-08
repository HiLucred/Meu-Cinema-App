import { styled } from "..";

export const SearchContainer = styled("main", {});

export const SearchInput = styled("div", {
  marginTop: "1.5rem",
  display: "flex",
  alignItems: "center",

  input: {
    height: "3rem",
    flex: 1,
    paddingLeft: "1.125rem",
    outline: "none",

    borderRadius: "16px 0 0 16px",
    border: "2px solid $black-100",
    backgroundColor: "transparent",
  },

  button: {
    flex: 0.2,
    height: "3rem",
    outline: "none",
    border: "none",
    cursor: "pointer",

    fontSize: "$sm",
    fontWeight: 800,
    color: "$white",

    borderRadius: "0 16px 16px 0",
    backgroundColor: "$black-100",

    "&:hover": {
      opacity: 0.9,
    },

    "&:disabled": {
      opacity: 0.8,
      cursor: "not-allowed",
    },
  },
});
