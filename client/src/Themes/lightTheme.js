import { createMuiTheme } from "@material-ui/core/styles";
import "./theme.css";

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      // light: "#bc477b",
      main: "#E86F4A",
      // dark: "#560027",
      contrastText: "#ffffff",
    },
    secondary: {
      // light: "#4fb3bf",
      main: "#17BEBB",
      // dark: "#005662",
      contrastText: "#ffffff",
    },
    // below lets us use a third color easily; not actually for errors.
    error: {
      main: "#2B7CDE",
    },
  },
});

export default lightTheme;
