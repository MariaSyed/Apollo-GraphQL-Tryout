import React from "react";
import { withState } from "recompose";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Form from "./Form";
import { GET_NAMES } from "./queries";

export default () => (
  <Query query={GET_NAMES}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `${error}`;

      return (
        <div>
          <h2>Cats</h2>
          <ul>
            {data.allNameses.map(name => <li key={name.id}>{name.name}</li>)}
          </ul>

          <Form />
        </div>
      );
    }}
  </Query>
);
