import { createMuiTheme } from "@material-ui/core/styles";
import "./theme.css";

const font = "'Roboto', sans-serif";
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#581845",
    },
    secondary: {
      main: "#900C3F",
    },
  },
  typography: {
    fontFamily: font,
  },
});

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: "#bc477b",
//       main: "#880e4f",
//       dark: "#560027",
//       contrastText: "#ffffff",
//     },
//     secondary: {
//       light: "#4fb3bf",
//       main: "#00838f",
//       dark: "#005662",
//       contrastText: "#ffffff",
//     },
//   },
//   typography: {
//     fontFamily: font,
//   },
// });

export default theme;
