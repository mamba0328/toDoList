//import closeCheckList from "./closeCheckList"; //ads functionality to X button of checklist
import addProject from "./addProject"; 
import addToDo from "./addToDo"; 
import removeElement from "./remove";

//addProject();

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


//adds new toDo
const projects = document.getElementById('projects')

projects.addEventListener('click', (e) => { 
    if (e.target.id == 'addToDo'){
    addToDo(e);
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
    if(e.target.parentElement.id == 'priorityBox'){//cheks either you hitting the right button
     removeElement(e);
     console.log('i work')
    }
});

//adding subtasks 
projects.addEventListener('click', (e) => {
    if(e.target.id == 'addTask'){
        
        const task = document.createElement('div');
        task.setAttribute('id', 'task');

        const priorityBox = document.createElement('div');
        priorityBox.setAttribute('id','priorityBox');
        const priority = document.createElement('div');
        priority.classList.add('priority');
        priorityBox.appendChild(priority);

        const title = document.createElement('h1');
        title.classList.add('title');
        title.innerText = 'Your subtask';

        task.appendChild(priorityBox);
        task.appendChild(title);

        e.target.parentElement.nextSibling.appendChild(task); 
        e.target.parentElement.nextSibling.style.display = 'flex'; 
        
    }

    e.target.previousSibling.style.display = 'flex';
});

//opens and closes subtasks ???????????????/
projects.addEventListener('click', (e) => { 
    if(e.target.className){
        e.target.parentElement.parentElement.nextSibling.style.display == 'none' ? e.target.parentElement.parentElement.nextSibling.style.display = 'flex' : e.target.parentElement.parentElement.nextSibling.style.display = 'none';
    }
});