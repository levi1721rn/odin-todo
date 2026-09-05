// src/index.js
import "./styles.css";

import { Todo } from "./todo.js";
import { Project} from "./project.js";

let projects = [];
function saveProjects(projects){
     localStorage.setItem('projects', JSON.stringify(projects));
}

const renderProject = function(project){
    // displaying the project on the sidebar
     
    const sidebar = document.querySelector('.sidebar');

    const project_element = document.createElement('div');
    project_element.textContent = project.name;
    project_element.style.border = '2px solid black';
    project_element.style.display = 'flex';

    project.element = project_element;

    project_element.addEventListener('click', () => {
        currentProject = project;

        for (let i = 0; i < projects.length; i++) {
            if (projects[i].element === project.element) {
                projects[i].element.style.backgroundColor = 'green';

                projects[i].todos.forEach((todo) => {
                    todo.element.style.display = 'block';
                })
            }
            else {
                projects[i].element.style.backgroundColor = 'white';
                projects[i].todos.forEach((todo) => {
                    todo.element.style.display = 'none';
                })
            }
        }
    });


    // delete button and its functionality

    const deleteButton = document.createElement('button');

    deleteButton.style.width = '20%';
    deleteButton.style.height = '90%';
    deleteButton.textContent = '🗑️';
    deleteButton.style.marginLeft = 'auto';

    deleteButton.addEventListener('click', () => {
        if (projects.includes(project)) {

            const index = projects.indexOf(project);
            projects.splice(index, 1);

            project.element.remove();
        }
        else {
            console.log("project doesn't exist in this projects.");
        }
    });

    project_element.appendChild(deleteButton);

    sidebar.appendChild(project_element);
}

const renderTodo = function(todo_display , project , todo ){
// CREATE TODO ELEMENTS

        const todo_element = document.createElement('div');

        todo.element = todo_element;

        const title_element = document.createElement('div');
        const description_element = document.createElement('div');
        const details_element = document.createElement('div');
        const priority_element = document.createElement('div');
        const dueDate_element = document.createElement('div');
        const checklist_element = document.createElement('input');

        // TODO CARD CSS

        todo_element.style.display = 'flex';
        todo_element.style.flexDirection = 'column';
        todo_element.style.gap = '10px';

        todo_element.style.padding = '16px';
        todo_element.style.marginBottom = '10px';

        todo_element.style.width = '250px';
        todo_element.style.maxWidth = '100%';

        todo_element.style.boxSizing = 'border-box';
        todo_element.style.flexShrink = '1';

        todo_element.style.border = '1px solid #ccc';
        todo_element.style.borderRadius = '8px';

        todo_element.style.backgroundColor = 'white';

        todo_element.style.overflow = 'hidden';

        // VALUES

        title_element.textContent = todo.title;
        description_element.textContent = todo.description;
        priority_element.textContent = todo.priority;
        dueDate_element.textContent = todo.dueDate;


        // TITLE CSS

        title_element.style.fontSize = '1.2rem';
        title_element.style.fontWeight = 'bold';

        title_element.style.overflowWrap = 'break-word';
        title_element.style.wordBreak = 'break-word';

        // DESCRIPTION CSS

        description_element.style.color = '#555';

        description_element.style.overflowWrap = 'break-word';
        description_element.style.wordBreak = 'break-word';

        // PRIORITY + DUE DATE

        details_element.style.display = 'flex';
        details_element.style.justifyContent = 'space-between';
        details_element.style.alignItems = 'center';

        details_element.style.gap = '10px';
        details_element.style.minWidth = '0';

        priority_element.style.fontWeight = 'bold';

        priority_element.style.overflowWrap = 'break-word';
        dueDate_element.style.overflowWrap = 'break-word';

        // CHECKBOX

        checklist_element.type = 'checkbox';
        checklist_element.checked = todo.checked;

        checklist_element.style.width = '18px';
        checklist_element.style.height = '18px';

        checklist_element.style.cursor = 'pointer';

        // BUILD TODO    

        details_element.appendChild(priority_element);
        details_element.appendChild(dueDate_element);

        todo_element.appendChild(title_element);
        todo_element.appendChild(description_element);
        todo_element.appendChild(details_element);
        todo_element.appendChild(checklist_element);

        //delete todo button
        const deleteButton = document.createElement('button');

        deleteButton.style.width = '20%';
        deleteButton.style.height = '90%';
        deleteButton.textContent = '🗑️';
        deleteButton.style.marginLeft = 'auto';

        deleteButton.addEventListener('click', () => {
            project.deleteTodo(todo);

            todo.element.remove();

            saveProjects(projects);
            JSON.parse(localStorage.getItem('projects'));
        });

        todo_element.appendChild(deleteButton);

        todo_display.appendChild(todo_element);

};


(function getProjects(){

    const todo_display = document.querySelector('.todo_display');

    const projects_data = JSON.parse(localStorage.getItem('projects'));
    if(projects_data === null){
          
    }
    else{
    projects_data.forEach((plainProject) => {
       const project = new Project(plainProject.name);
       projects.push(project);
       renderProject(project);

        plainProject.todos.forEach((plainTodo) => {
        const todo = new Todo(plainTodo.title , plainTodo.description , plainTodo.dueDate , plainTodo.priority , plainTodo.checked);
        project.addTodo(todo);

        renderTodo(todo_display , project , todo);

       })
    })
    }
})();

// we'll handle the logic and dom stuff here.

// dom and interactivity for new project button.

const project_form = document.querySelector('.project_form');
const project_name_input = document.querySelector('#project_name');
const sidebar = document.querySelector('.sidebar');
let currentProject;

const new_project = document.querySelector('.new_project');

new_project.addEventListener('click', () => {
    project_form.style.display = 'block';
});

const project_cancel_button = document.querySelector('.cancel_project');

project_cancel_button.addEventListener('click', () => {
    project_name_input.value = '';
    project_form.style.display = 'none';
});

const form = document.querySelector('.project_form');

form.addEventListener("submit", (event) => {

    event.preventDefault();

    // creating the project

    const project_name_value = project_name_input.value;
    const project = new Project(project_name_value);
    projects.push(project);

    //calling render project
    renderProject(project);

    project_form.style.display = 'none';
});


// functionality for addTodo button

const add_todo_button = document.querySelector('.new_todo');

add_todo_button.addEventListener('click', () => {

    const todo_display = document.querySelector('.todo_display');

    todo_display.style.display = 'none';

    const todo_form = document.querySelector('.todo_form');

    todo_form.style.display = 'block';
});


// functionality to add todos to projects

const todo_form = document.querySelector('.todo_form');

todo_form.addEventListener('submit', (event) => {
    event.preventDefault();

    const todo_display = document.querySelector('.todo_display');

    const todo_title = document.querySelector('#todo_name');
    const todo_description = document.querySelector('#todo_description');
    const todo_dueDate = document.querySelector('#todo_dueDate');
    const todo_priority = document.querySelector('#todo_priority');
    const todo_check = document.querySelector('#todo_checkList');

    if (currentProject !== undefined) {

        const todo = new Todo(
            todo_title.value,
            todo_description.value,
            todo_dueDate.value,
            todo_priority.value,
            todo_check.checked
        );
    
        currentProject.addTodo(todo);
          
        console.log(todo);
        renderTodo(todo_display, currentProject, todo);
        // title_element.textContent = todo_title.value;
        // description_element.textContent = todo_description.value;
        // priority_element.textContent = todo_priority.value;
        // dueDate_element.textContent = todo_dueDate.value;

        
        // checklist_element.checked = todo_check.checked;
        

        saveProjects(projects);
        JSON.parse(localStorage.getItem('projects'));

    }
    else {
        alert('project is not initialized.');
    }

    todo_form.style.display = 'none';
    todo_display.style.display = 'flex';


    // functionality to cancel todo

   const cancel_todo = document.querySelector('.cancel_todo');

    cancel_todo.addEventListener('click', () => {
        todo_form.style.display = 'none';
        todo_title.value = '';
    });
});
    

