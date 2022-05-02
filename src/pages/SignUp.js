import React, { useEffect } from "react";
import { useMutation, useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { IS_LOGGED_IN } from "../gql/query";
import { SIGNUP_USER } from "../gql/mutation";

function SignUp() {
  useEffect(() => {
    document.title = "Sign Up - Notedly";
  }, []);
  const navigate = useNavigate();

  // Apollo Client
  const client = useApolloClient();

  const [signUp] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      // console.log the JSON Web Token when the mutation is complete
      localStorage.setItem("token", data.signUp.token);
      // update the local cache
      client.writeQuery({ query: IS_LOGGED_IN, data: { isLoggedIn: true } });
      // redirect the user to the homepage
      navigate("/");
    },
    onError: (error) => console.log(error.graphQLErrors),
  });

  return <UserForm submitAction={signUp} formType="signUp" />;
}

export default SignUp;
