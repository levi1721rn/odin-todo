// src/index.js
import "./styles.css";

import { Todo } from "./todo.js";
import { Project } from "./project.js";
import { projects , addProject , deleteProject} from "./manageProjects.js";

// we'll handle the logic and dom stuff here.

const project_form = document.querySelector('.project_form');
const project_name_input = document.querySelector('#project_name');
const sidebar = document.querySelector('.sidebar');
const project_list = document.querySelector('.project.list');

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


