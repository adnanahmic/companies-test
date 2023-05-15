import { createTheme } from "@mui/material";

const theme = createTheme({
  spacing: (val) => `${val * 8}px`,
});

export default theme;
