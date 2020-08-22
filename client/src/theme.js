import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#bc477b',
      main: '#880e4f',
      dark: '#560027',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#4fb3bf',
      main: '#00838f',
      dark: '#005662',
      contrastText: '#ffffff',
    },
  },
});

export default theme;