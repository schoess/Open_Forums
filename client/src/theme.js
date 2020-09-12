import { createMuiTheme } from "@material-ui/core/styles";
import "./theme.css";

const mainFont = "'Roboto', sans-serif";
const palletType = darkState ? "dark" : "light";
const mainPrimaryColor = darkState ? "#000000" : "#ffffff";
const mainSecondaryColor = darkState ? "#581845" : "#FF5733";
const theme = createMuiTheme({
  palette: {
    type: palletType,
    primary: {
      main: mainPrimaryColor,
    },
    secondary: {
      main: mainSecondaryColor,
    },
  },
  typography: {
    fontFamily: mainFont,
  },
});

export default theme;
