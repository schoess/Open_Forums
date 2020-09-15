/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Auth0ProviderWithHistory from "./contexts/Auth0ProviderWithHistory";
import { DarkModeContextProvider } from "./contexts/DarkModeContext";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory domain={domain} clientId={clientId} redirectUri={window.location.origin}>
      <BrowserRouter>
        <DarkModeContextProvider>
          <App />
        </DarkModeContextProvider>
      </BrowserRouter>
    </Auth0ProviderWithHistory>
  </BrowserRouter>,
  document.getElementById("root")
);
