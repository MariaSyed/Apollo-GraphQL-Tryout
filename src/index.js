import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./styles.css";
import Main from "./Main";

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjexem1he3let0153tpc5ftu1"
});

const App = () => (
  <ApolloProvider client={client}>
    <Main />
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
