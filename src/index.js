// src/index.js
import "./styles.css";

import { Todo } from "./todo.js";
import { Project } from "./project.js";

let projects = [];

// we'll handle the logic and dom stuff here.


//dom and interactivity for new project button.

const project_form = document.querySelector('.project_form');
const project_name_input = document.querySelector('#project_name');
const sidebar = document.querySelector('.sidebar');
let currentProject;

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
    console.log(projects);

    //creating the project

    const project_name_value = project_name_input.value;
    const project = new Project(project_name_value);
    projects.push(project);

    //displaying the project on the sidebar

    const project_element = document.createElement('div'); 
    project_element.textContent = project_name_input.value;
    project_element.style.border = '2px solid black';
    project_element.style.display = 'flex';

    project_element.addEventListener('click' , () => {
        currentProject = project_element;
        currentProject.style.backgroundColor = 'green';
    })

    project.element = project_element;

    //delete button and its functionality
    const deleteButton = document.createElement('button');
    deleteButton.style.width = '20%';
    deleteButton.style.height = '90%';
    deleteButton.textContent = '🗑️';
    deleteButton.style.marginLeft = 'auto';

    deleteButton.addEventListener('click' , () => {
        if(projects.includes(project)){

            const index = projects.indexOf(project);
            projects.splice(index , 1);

            project.element.remove();
        }
        else{
            console.log("project doesn't exist in this projects.");
        }
    })

    project_element.appendChild(deleteButton);

    sidebar.appendChild(project_element);
   

    project_form.style.display = 'none';
})

//functionality for addTodo button
const add_todo_button = document.querySelector('.new_todo');
    
add_todo_button.addEventListener('click' , () => {
       
        const todo_title = document.querySelector('#todo_name');

        const todo_display = document.querySelector('.todo_display');
        todo_display.style.display = 'none';

        const todo_form = document.querySelector('.todo_form');
        todo_form.style.display = 'block';


        const todo_add_button = document.querySelector('.add_todo');

        const cancel_todo = document.querySelector('.cancel_todo');
        cancel_todo.addEventListener('click' , () => {
            todo_form.style.display = 'none';
            todo_title.value = '';
        })
        

})


//although everything seems easy at this point shit's pretty tough.
//i'll eventually do it though.