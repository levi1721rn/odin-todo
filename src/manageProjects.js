export {projects , addProject , deleteProject};
 
    let projects = [];   

    function addProject(project){
       this.projects.push(project);
    }

    function deleteProject(project){
        if(this.projects.includes(project)){
            const index = this.todos.indexOf(project);
            this.projects.splice(index , 1);
        }
        else{
            console.log("project doesn't exist in this projects.");
        }
    }

