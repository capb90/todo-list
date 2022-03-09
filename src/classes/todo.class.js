export class Todo {

    static fromJson({id,task,complete,date}){
        const TodoAux = new Todo(task);
        TodoAux.id=id;
        TodoAux.complete=complete;
        TodoAux.date=date;

        return TodoAux;
    }

    constructor(task){
        this.task = task;

        this.id       = new Date().getTime();
        this.complete = false;
        this.date     = new Date(); 
    }
}