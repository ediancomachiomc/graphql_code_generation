import { readAll, remove, removeById, save } from "../data";

export class Todo {
  id!: string;
  title!: string;
  description!: string;

  constructor() {}

  async findById(id: string) {
    const all = await readAll();
    const result = all.find((t) => t.id == id);

    if (!result) {
      throw new Error("todo not found");
    }

    return result;
  }

  async find() {
    return await readAll();
  }

  async create(todoInput: any) {
    return await save(todoInput);
  }

  async findOneAndUpdate(id: string, todoInput: any) {
    const todo = save(todoInput, id);

    return todo;
  }
  async findByIdAndDelete(id: string) {
    const todo = await removeById(id);

    if (!todo) {
      throw new Error("todo not found");
    }

    return todo;
  }
  async remove() {
    const removedTodos = await remove();

    if (!removedTodos) {
      throw new Error("todo not found");
    }

    return removedTodos;
  }
}
