import { styled } from "../../styles";

export const ActionBoxContainer = styled("footer", {
  width: "40%",
  height: "3rem",

  color: "$red-200",
  transform: "translateY(100%)",
  opacity: 0,
  transition: "all 0.2s ease-in-out",

  position: "absolute",
  borderRadius: 12,
  bottom: "1rem",
  left: "30%",
  overflow: "hidden",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "5%",
  backgroundColor: "$red-100",

  svg: {
    cursor: "pointer",
    "&:hover": {
      opacity: 0.8,
    },
  },

  a: {
    display: "flex",
  },
});
