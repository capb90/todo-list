
import {Todo} from './index'
export class TodoList {
  
  constructor() {
    this.loadTodoList();
  }

  addTodo(todo) {
    this.todos.push(todo);
    this.saveTodoList();
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((t) => t.id != id);
    this.saveTodoList();
  }

  marckComplete(id) {
    const todoCheck = this.todos.find((t) => t.id == id);
    todoCheck.complete = !todoCheck.complete;
    this.saveTodoList();
  }

  deleteCompleted() {
    this.todos = this.todos.filter((t) => !t.complete);
    this.saveTodoList();
  }

  saveTodoList() {
    localStorage.setItem("Todos", JSON.stringify(this.todos));
  }

  loadTodoList() {
    this.todos = localStorage.getItem("Todos")
      ? JSON.parse(localStorage.getItem("Todos"))
      : [];

    this.todos = this.todos.map(Todo.fromJson);
  }
}
