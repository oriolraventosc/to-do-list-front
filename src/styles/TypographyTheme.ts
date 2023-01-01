import { createTheme, responsiveFontSizes } from "@mui/material";

const typographyTheme = responsiveFontSizes(createTheme({}), {
  breakpoints: ["sm", "md", "xl"],
  factor: 5,
});

export default typographyTheme;
