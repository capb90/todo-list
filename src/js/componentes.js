import "../css/componentes.css";
import { Todo } from "../classes";
import { todoList } from "../index";
import { modifyHtml, validateInputType } from "../helpers/helpers";

const divTodoList   = document.querySelector(".todo-list");
const txtInput      = document.querySelector(".new-todo");
const todoListHtml  = document.querySelector(".todo-list");

export const createTodoHtml = (todo) => {
  const liHtml = modifyHtml(todo);
  const divHtml = document.createElement("span");
  divHtml.innerHTML = liHtml;
  divTodoList.append(divHtml.firstElementChild);

  return divHtml.firstElementChild;
};

/**
 *
 * Eventos
 *
 */

txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    const todo = new Todo(txtInput.value);
    todoList.addTodo(todo);
    createTodoHtml(todo);
    txtInput.value = "";
  }
});

todoListHtml.addEventListener("click", ({target}) => {
  if (validateInputType(target)) {
    const liElement = target.parentElement.parentElement;
    const elementId = liElement.getAttribute('data-id');
    todoList.marckComplete(elementId);
    liElement.classList.toggle('completed');
  }
});
