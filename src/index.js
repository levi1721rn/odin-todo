// src/index.js
import "./styles.css";

import { Todo } from "./todo.js";
import { Project } from "./project.js";
import { manageProjects } from "./manageProjects.js";

// we'll handle the logic and dom stuff here.

const project_form = document.querySelector('.project_form');

const new_project = document.querySelector('.new_project');
new_project.addEventListener('click',() => {
      
   project_form.style.display = 'block';

})

const project_cancel_button = document.querySelector('.cancel_project');
project_cancel_button.addEventListener('click',() => {

    const project_name_input = document.querySelector('#project_name');
    project_name_input.textContent = '';

    project_form.style.display = 'none';
})

const form =  document.querySelector('.project_form');
form.addEventListener("submit", (event) => {

    event.preventDefault();

    project_form.style.display = 'none';
})

