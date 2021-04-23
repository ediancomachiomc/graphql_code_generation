import { gql } from "apollo-server";

export default gql`
  type Todo {
    id: ID!
    title: String!
    description: String!
  }
  input TodoInput {
    title: String!
    description: String!
  }
  type Query {
    getTodo(TodoId: ID!): Todo!
    getTodos: [Todo!]!
  }
  type Mutation {
    createTodo(TodoInput: TodoInput): Todo
    updateTodo(TodoId: ID!, TodoInput: TodoInput): Todo
    deleteTodo(TodoId: ID!): Todo
    deleteTodos: [Todo!]!
  }
`;
