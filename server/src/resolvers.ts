import { Todo } from "./domain/todo";
import { Resolvers } from "./generated/graphql";

export const resolvers: Resolvers = {
  Query: {
    getTodo: async (parent, { TodoId }) => {
      try {
        return await new Todo().findById(TodoId);
      } catch (error) {
        throw new Error(error);
      }
    },
    getTodos: async (_parent: any, _args: any) => {
      try {
        return await new Todo().find();
      } catch (error) {
        throw new Error(error);
      }
    },
  },

  Mutation: {
    createTodo: async (_, { TodoInput }) => {
      try {
        return await new Todo().create(TodoInput);
      } catch (error) {
        throw new Error(error);
      }
    },
    updateTodo: async (_parent, args) => {
      try {
        const { TodoId, TodoInput } = args;
        return await new Todo().findOneAndUpdate(TodoId, TodoInput);
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteTodo: async (_parent, { TodoId }) => {
      try {
        return await new Todo().findByIdAndDelete(TodoId);
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteTodos: async (_parent, _args) => {
      try {
        return await new Todo().remove();
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
