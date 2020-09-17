import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <p color="inherit" onClick={() => loginWithRedirect()}>
        Log In
      </p>
    )
  );
};

export default Login;
