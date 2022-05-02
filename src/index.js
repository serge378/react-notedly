import React from "react";
import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "./index.css";
import App from "./App";

// configure our API URI & cache
const uri = process.env.REACT_APP_API_URI;
const cache = new InMemoryCache({
  typePolicies: {
    // Type policy map
    Authentication: {
      queryType: true,
      // keyFields: ["isLoggedIn"],
      fields: {
        // Field policy map for the User type
        isLoggedIn: {
          // Field policy for the isLoggedIn field
          read(_) {
            // The read function for the isLoggedIn field
            return !!localStorage.getItem("token");
          },
        },
      },
    },
  },
});

const httpLink = createHttpLink({
  uri,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token") || "";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token,
    },
  };
});
// configure Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  connectToDevTools: process.env.NODE_ENV === "development",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
