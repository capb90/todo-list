import "./styles.css";

import { TodoList } from "./classes";
import { createTodoHtml } from "./js/componentes"

export const todoList = new TodoList();

todoList.todos.forEach(createTodoHtml);