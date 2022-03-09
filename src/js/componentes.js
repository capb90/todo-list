import "../css/componentes.css";
import { Todo } from "../classes";
import { todoList } from "../index";
import {
  modifyHtml,
  validateInputType,
  validetaButtonType,
} from "../helpers/helpers";

const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");
const todoListHtml = document.querySelector(".todo-list");
const btnDeleteCompletes = document.querySelector(".clear-completed");
const liFilters = document.querySelectorAll(".filtro");
const ulFilters = document.querySelector(".filters");

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

ulFilters.addEventListener("click", ({ target }) => {
  const typeFilter = target.text;
  liFilters.forEach((l) => l.classList.remove("selected"));
  target.classList.add("selected");

  for (const item of todoListHtml.children) {
    
    item.classList.remove("hidden");
    const hasClassComplete = item.classList.contains("completed");

    switch (typeFilter) {
      case "Pendientes":
        if (hasClassComplete) {
          item.classList.add("hidden");
        }
        break;

      case "Completados":
        if (!hasClassComplete) {
          item.classList.add("hidden");
        }
        break;
    }
  }
});

txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    const todo = new Todo(txtInput.value);
    todoList.addTodo(todo);
    createTodoHtml(todo);
    txtInput.value = "";
  }
});

todoListHtml.addEventListener("click", ({ target }) => {
  const liElement = target.parentElement.parentElement;
  const elementId = liElement.getAttribute("data-id");
  if (validateInputType(target)) {
    todoList.marckComplete(elementId);
    liElement.classList.toggle("completed");
  } else if (validetaButtonType(target)) {
    todoList.deleteTodo(elementId);
    todoListHtml.removeChild(liElement);
  }
});

btnDeleteCompletes.addEventListener("click", () => {
  todoList.deleteCompleted();

  for (let i = todoListHtml.children.length - 1; i >= 0; i--) {
    const elementHtml = todoListHtml.children[i];
    if (elementHtml.classList.contains("completed")) {
      todoListHtml.removeChild(elementHtml);
    }
  }
});
