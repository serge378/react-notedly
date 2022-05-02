import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { IS_LOGGED_IN } from "../gql/query";

function PrivateRoute({ children }) {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  const navigate = useNavigate();

  useEffect(() => {
    !data.isLoggedIn && navigate("/");
  }, []);

  // if the data is loading, display a loading message
  if (loading) return <p>Loading...</p>;
  // if there is an error fetching the data, display an error message
  if (error) return <p>Error!</p>;
  // if the user is logged in, route them to the requested component
  // else redirect them to the sign-in page
  return children;
}

export default PrivateRoute;
