import React from "react";
import { withState } from "recompose";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { GET_NAMES, ADD_NAME } from "./queries.js";

const updateCache = (cache, { data: { createNames } }) => {
  const { allNameses } = cache.readQuery({ query: GET_NAMES });

  cache.writeQuery({
    query: GET_NAMES,
    data: {
      allNameses: allNameses.concat(createNames)
    }
  });
};

const enhance = withState("todo", "setTodo", "");
export default enhance(({ todo, setTodo }) => (
  <Mutation mutation={ADD_NAME} update={updateCache}>
    {(createNames, attrs = {}) => (
      <form
        onSubmit={e => {
          e.preventDefault();
          createNames({ variables: { name: todo } });
          setTodo("");
        }}
      >
        <label htmlFor="todo"> Todo:</label>
        <input
          id="todo"
          type="text"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />

        {attrs.loading && "loading"}
      </form>
    )}
  </Mutation>
));
