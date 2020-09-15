import { createMuiTheme } from "@material-ui/core/styles";
import "./theme.css";
import { green } from "@material-ui/core/colors";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: green,
  },
});

export default darkTheme;
