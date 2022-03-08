export class TodoList{

    constructor(){
        this.todos = [];
    }

    addTodo(todo){
        this.todos.push(todo)
    }

    deleteTodo(id){

    }

    marckComplete(id){
        const todoCheck = this.todos.find(t => t.id == id);
        todoCheck.complete = !todoCheck.complete;
    }

    deleteCompleted(){
        
    }
}