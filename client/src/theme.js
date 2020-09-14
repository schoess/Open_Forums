import { createMuiTheme } from "@material-ui/core/styles";
import { useDarkModeContext } from "./contexts/DarkModeContext";
import "./theme.css";

console.log("WHAT IS useDarkModeContext.darkState? = " + useDarkModeContext.darkState);
// BV: Answer--"undefined"

// BV: How do I get the value of "darkState" in this? Below doesn't work since not in function.
const { darkState } = useDarkModeContext();

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
