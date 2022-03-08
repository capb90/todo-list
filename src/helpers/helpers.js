export const modifyHtml = (todoData) => {
    return `
      <li class="${todoData.complete ? "completed" : ""}" data-id=${todoData.id}>
          <div class="view">
              <input class="toggle" type="checkbox" ${
                todoData.complete ? "checked" : ""
              }>
              <label>${todoData.task}</label>
              <button class="destroy" ></button>
          </div>
          <input class="edit" value="Create a TodoMVC template">
      </li> 
      `;
};

export const validateInputType = (target)=>{
    return target['localName'] === 'input';
}