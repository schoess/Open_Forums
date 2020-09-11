/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import theme from "./theme";
import Auth0ProviderWithHistory from "./contexts/Auth0ProviderWithHistory";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Auth0ProviderWithHistory>
  </BrowserRouter>,
  document.getElementById("root")
);
