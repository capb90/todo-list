import './styles.css';

import { Todo, TodoList } from './classes';
import { createTodoHtml } from './js/componentes';


const todo =  new Todo('Prueba javaScript');
export const todoList = new TodoList();
todoList.addTodo(todo);

createTodoHtml(todo);


