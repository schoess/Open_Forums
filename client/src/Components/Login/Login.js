import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <Button color="inherit" onClick={() => loginWithRedirect()}>
        Log In
      </Button>
    )
  );
};

export default Login;
