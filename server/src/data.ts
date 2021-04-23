import fs from "fs";
import { Todo } from "./domain/todo";

export async function readAll(): Promise<Todo[]> {
  const rawData = await fs.promises.readFile("data.json", "utf-8");
  const todos = JSON.parse(rawData);
  return todos;
}

export async function save(data: any, id?: string): Promise<Todo> {
  const all = await readAll();
  if (id) {
    const idx = all.findIndex((t) => t.id == id);
    all[idx] = { id, ...data };
  } else {
    data.id = all[all.length - 1].id + 1;
    all.push(data);
  }

  try {
    fs.promises.writeFile("data.json", JSON.stringify(all));
  } catch (error) {
    console.error(error);
  }

  return data;
}

export async function removeById(id?: string) {
  const all = await readAll();
  let res = all.filter((t) => t.id != id);
  let todo = all.find((t) => t.id == id);

  try {
    fs.promises.writeFile("data.json", JSON.stringify(res));
  } catch (error) {
    console.error(error);
  }

  return todo;
}

export async function remove() {
  const all = await readAll();

  try {
    fs.promises.writeFile("data.json", JSON.stringify([]));
  } catch (error) {
    console.error(error);
  }

  return all;
}
