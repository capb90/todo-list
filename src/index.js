import './styles.css';

import { Todo, TodoList } from './classes';
import { createTodoHtml } from './js/componentes';


const todo =  new Todo('Prueba javaScript');
const todoList = new TodoList();

createTodoHtml(todo);

todoList.addTodo(todo);
console.log("🚀 ~ todoList", todoList)

