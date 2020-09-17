import { createMuiTheme } from "@material-ui/core/styles";
import "./theme.css";

const fontPrimary = "'Inconsolata', monospace";

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#B9136C",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#17BEBB",
      contrastText: "#ffffff",
    },
    // below lets us use a third color easily; not actually for errors.
    error: {
      main: "#2B7CDE",
    },
  },
  typography: {
    fontFamily: fontPrimary,
  }
});

export default lightTheme;
