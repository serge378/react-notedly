import React, { useEffect } from "react";
import { useMutation, useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { IS_LOGGED_IN } from "../gql/query";
import { SIGNIN_USER } from "../gql/mutation";

function SignIn() {
  useEffect(() => {
    document.title = "Sign In - Notedly";
  }, []);
  const navigate = useNavigate();

  // Apollo Client
  const client = useApolloClient();

  const [signIn] = useMutation(SIGNIN_USER, {
    onCompleted: (data) => {
      // console.log the JSON Web Token when the mutation is complete
      localStorage.setItem("token", data.signIn.token);
      // update the local cache
      client.writeQuery({ query: IS_LOGGED_IN, data: { isLoggedIn: true } });
      // redirect the user to the homepage
      navigate("/");
    },
    onError: (error) => console.log(error.graphQLErrors),
  });

  return <UserForm submitAction={signIn} formType="signIn" />;
}

export default SignIn;
