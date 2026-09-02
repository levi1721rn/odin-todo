export {Todo};

class Todo{
    constructor(title,description,dueDate,priority ,checked){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = checked;
    }

    createTodo(title , description , dueDate , priority , checked){
        const todo = new Todo(title , description , dueDate , priority ,checked);
    }

    markComplete(todo){
        todo.checked = true;
    }
    
    changePriority(todo){
        todo.priority = "";
    }

}

