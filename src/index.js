// src/index.js
import "./styles.css";

import { Todo } from "./todo.js";
import { Project } from "./project.js";
import { projects , addProject , deleteProject} from "./manageProjects.js";


// we'll handle the logic and dom stuff here.


//dom and interactivity for new project button.

const project_form = document.querySelector('.project_form');
const project_name_input = document.querySelector('#project_name');
const sidebar = document.querySelector('.sidebar');

const new_project = document.querySelector('.new_project');
new_project.addEventListener('click',() => {
      
   project_form.style.display = 'block';

})

const project_cancel_button = document.querySelector('.cancel_project');
project_cancel_button.addEventListener('click',() => {

    project_name_input.value = '';

    project_form.style.display = 'none';
})

const form =  document.querySelector('.project_form');
form.addEventListener("submit", (event) => {

    event.preventDefault();

    //creating the project

    const project_name_value = project_name_input.value;
    const project = new Project(project_name_value);
    projects.push(project);

    //displaying the project on the sidebar

    const project_element = document.createElement('div'); 
    project_element.textContent = project_name_input.value;
    project_element.style.border = '2px solid black';
    sidebar.appendChild(project_element);
   

    project_form.style.display = 'none';
})


//accessing projects


projects.forEach((project) => {
    let currentProject;

    project.addEventListener('click' , () =>{
        currentProject = project;
    })

    const todos = document.querySelector('.todos');

    //functionality for addTodo button
    const add_todo_button = document.querySelector('.add_todo');
    
    add_todo_button.addEventListener('click' , () => {
        const todo = document.createElement('div');
        todo.style.border = '2px solid black';
        todos.appendChild(todo);
    })

})


//gotta add a form for the addTodo button and use to complete the rest of the things.
//although everything seems easy at this point shit's pretty tough.
//i'll eventually do it though.