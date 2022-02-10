//import closeCheckList from "./closeCheckList"; //ads functionality to X button of checklist
import project from "./addProject"; 
import toDo from "./addToDo"; 
import removeElement from "./remove";
import addATask from "./addATask";
import openSettings from "./openSettings";
import { confirmSettings, cancelSettings } from "./closeSettings";


//array which stores created projects 
const projectStorage = [];

//adding functionality addproject button
const buttonAddProject = document.getElementById('addProject');
buttonAddProject.addEventListener('click', () => { 
    const newProject = new project();
    newProject.addProject(); 
    projectStorage.push(newProject);
})

buttonAddProject.addEventListener('mouseover', () => {
    buttonAddProject.style.border = 'white 3px solid';
    buttonAddProject.style.color = 'white';
})

buttonAddProject.addEventListener('mouseleave', () => {
    buttonAddProject.style.border = 'black 3px solid';
    buttonAddProject.style.color = 'black';
})


//adds new toDo
const projects = document.getElementById('projects')

projects.addEventListener('click', (e) => { 
    if (e.target.id == 'addToDo'){
    const addedToDo = new toDo();
    addedToDo.showToDo(e);
}
});

projects.addEventListener('mouseover', (e) => { 
    if (e.target.id == 'addToDo'){
    e.target.style.color = 'chartreuse';
}
});

projects.addEventListener('mouseout', (e) => { 
    if (e.target.id == 'addToDo'){
    e.target.style.color = 'white';
}
});

//deleting projects and toDos 
projects.addEventListener('click', (e)=> {
    if(e.target.parentElement.id == 'priorityBox' || e.target.id == 'tickBox' || e.target.parentElement.id == 'tickBox'){//cheks either you hitting the right button
     removeElement(e);
    }
});

projects.addEventListener('mouseover', (e)=> {
    if(e.target.id == 'tickBox'){
        e.target.firstChild.style.backgroundColor = 'red';
      } else if (e.target.parentElement.id == 'tickBox'){ 
          e.target.style.backgroundColor = 'red';
      }

      if(e.target.parentElement.id == 'priorityBox'){
        e.target.style.backgroundColor = 'red';
      } 
});


projects.addEventListener('mouseout', (e)=> {
    if(e.target.id == 'tickBox'){
      e.target.firstChild.style.backgroundColor = 'white';
    } else if (e.target.parentElement.id == 'tickBox'){ 
        e.target.style.backgroundColor = 'white';
    }

    if(e.target.parentElement.id == 'priorityBox'){
        e.target.style.backgroundColor = 'rgb(21, 255, 0)';
      } 
});


//adding subtasks 
projects.addEventListener('click', (e) => {
    if(e.target.id == 'addTask'){
        addATask(e)
        e.target.previousSibling.style.display = 'flex';
    }
});

projects.addEventListener('mouseover', (e) => { 
    if(e.target.id == 'addTask'){
        e.target.style.color = 'pink';
    }
});

projects.addEventListener('mouseout', (e) => { 
    if(e.target.id == 'addTask'){
        e.target.style.color = 'black';
    }
});


//opens and closes subtasks 
projects.addEventListener('click', (e) => { 
    if(e.target.className == "arrow down"){
        e.target.parentElement.parentElement.nextSibling.style.display == 'none' ? e.target.parentElement.parentElement.nextSibling.style.display = 'flex' : e.target.parentElement.parentElement.nextSibling.style.display = 'none';
    }
});

projects.addEventListener('mouseover', (e) => { 
    if(e.target.className == "arrow down"){
       e.target.style.border = 'solid pink';
       e.target.style.borderWidth = '0 3px 3px 0';
    }
});

projects.addEventListener('mouseout', (e) => { 
    if(e.target.className == "arrow down"){
       e.target.style.border = 'solid black';
       e.target.style.borderWidth = '0 3px 3px 0';
    }
});


//opens settings button functionality
projects.addEventListener('click', (e) => { 
    if(e.target.className == "settings"){
     openSettings(e);
    }
});

//closes settings button functionality
projects.addEventListener('click', (e) => { 
    if(e.target.className == "confirm"){
       confirmSettings(e, projectStorage);
       console.log(projectStorage)
    }
    if(e.target.className == "cancel"){
        cancelSettings(e, projectStorage);
    }
})