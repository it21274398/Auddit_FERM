import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CD964", // light green
    },
    secondary: {
      main: "#4A90E2", // light blue
    },
    background: {
      default: "#dce0e3ff", // light gray
      paper: "#FFFFFF",
    },
    text: {
      primary: "#263238",
      secondary: "#3a4a51ff",
    },
  },
  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    h4: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
});

export default theme;
