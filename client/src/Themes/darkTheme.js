import { createMuiTheme } from "@material-ui/core/styles";
import "./theme.css";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#011A27",
    },
    secondary: {
      main: "#4D648D",
    },
    // below lets us use a third color easily; not actually for errors.
    error: {
      main: "#BDC8DB",
    },
  },
});

export default darkTheme;
