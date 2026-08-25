export {Project};

class Project {
    constructor(){
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    deleteTodo(todo){
        if(this.todos.includes(todo)){
            const index = this.todos.indexOf(todo);
            this.todos.splice(index , 1);
        }
        else{
            console.log("todo doesn't exist in this project.");
        }
    }
}




