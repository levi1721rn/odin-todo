export {Todo};

class Todo{
    constructor(title,description,dueDate,priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checkList = false;
    }

    createTodo(title , description , dueDate , priority){
        const todo = new Todo(title , description , dueDate , priority);
    }

    markComplete(todo){
        todo.checkList = true;
    }
    
    changePriority(todo){
        todo.priority = "";
    }

}

