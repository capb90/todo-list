import "../css/componentes.css";

const divTodoList = document.querySelector(".todo-list");

export const createTodoHtml = (todo) => {
  const liHtml = `
                <li class=${(todo.complete)? 'completed':''} data-id="abc">
                    <div class="view">
                        <input class="toggle" type="checkbox" ${todo.complete ?'checked':''}>
                        <label>Probar JavaScript</label>
                        <button class="destroy"></button>
                    </div>
                    <input class="edit" value="Create a TodoMVC template">
                </li> 
                `;
    const divHtml = document.createElement('span');
    divHtml.innerHTML=liHtml;

    divTodoList.append(divHtml.firstElementChild);
    
    return divHtml.firstElementChild;

};
