import { createMuiTheme } from "@material-ui/core/styles";
import "./theme.css";

const fontPrimary = "'Inconsolata', monospace";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#011A27",
    },
    secondary: {
      main: "#8CCCE3",
    },
    // below lets us use a third color easily; not actually for errors.
    error: {
      main: "#BDC8DB",
    },
  },
  typography: {
    fontFamily: fontPrimary,
  }
});

export default darkTheme;
