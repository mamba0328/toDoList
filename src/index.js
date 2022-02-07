import closeCheckList from "./closeCheckList"; //ads functionality to X button of checklist
import {addProject, projectHead} from "./addProject"; 
import addToDo from "./addToDo";

addProject();
//adding functionality to huge + button
const buttonAddProject = document.getElementById('addProject');
buttonAddProject.addEventListener('click', () => { 
    addProject();
})

buttonAddProject.addEventListener('mouseover', () => {
    buttonAddProject.style.border = 'white 3px solid';
    buttonAddProject.style.color = 'white';
})

buttonAddProject.addEventListener('mouseleave', () => {
    buttonAddProject.style.border = 'black 3px solid';
    buttonAddProject.style.color = 'black';
})

const projects = document.getElementById('projects')



projects.addEventListener('click', () => { 
    if (projects.childNodes.contains('Your project')){
    addToDo();
}
})
