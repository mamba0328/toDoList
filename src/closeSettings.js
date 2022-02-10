
function confirmSettings(e, array){
    const projectId = e.target.parentElement.parentElement.parentElement.id;


    const projectPriorityBox = document.createElement('div');
    projectPriorityBox.setAttribute('id','priorityBox');
    const projectPriority = document.createElement('div');
    projectPriority.classList.add('priority');
    projectPriorityBox.appendChild(projectPriority);
    projectPriorityBox.style.margin = '0';

    const projectName = document.createElement('h1');
      projectName.classList.add('projectName');
    projectName.innerText = e.target.parentElement.parentElement.lastChild.previousSibling.previousSibling.value; 
    
    for(let i=0;i<array.length;i++){ 
        if(array[i].id == projectId){
            array[i].changeName(projectName.innerText); 
        }
    }

    const addToDo = document.createElement('h2');
      addToDo.setAttribute('id', 'addToDo');
    addToDo.innerText = '+';

    const headSettings = document.createElement('div');
    headSettings.classList.add('settings');
    const dot11 = document.createElement('div');
    const dot12 = document.createElement('div');
    const dot13 = document.createElement('div');
    dot11.classList.add('dot');
    dot12.classList.add('dot');
    dot13.classList.add('dot')
    headSettings.appendChild(dot11);
    headSettings.appendChild(dot12);
    headSettings.appendChild(dot13);

    const headNodes = Array.from(e.target.parentElement.parentElement.children); 
    headNodes.forEach(node => node.style.display = 'none');

    e.target.parentElement.parentElement.appendChild(projectPriorityBox);
    e.target.parentElement.parentElement.appendChild(projectName);
    e.target.parentElement.parentElement.appendChild(addToDo);
    e.target.parentElement.parentElement.appendChild(headSettings);
}

function cancelSettings(e, array){ 
    const projectId = e.target.parentElement.parentElement.parentElement.id;

    const projectPriorityBox = document.createElement('div');
    projectPriorityBox.setAttribute('id','priorityBox');
    const projectPriority = document.createElement('div');
    projectPriority.classList.add('priority');
    projectPriorityBox.appendChild(projectPriority);
    projectPriorityBox.style.margin = '0';

    const project1Name = document.createElement('h1');
    project1Name.classList.add('projectName');
    
    for(let i=0;i<array.length;i++){ 
        if(array[i].id == projectId){
            project1Name.innerText = array[i].name; 
        }
    }

    const addToDo = document.createElement('h2');
    addToDo.setAttribute('id', 'addToDo');
    addToDo.innerText = '+';

    const headSettings = document.createElement('div');
    headSettings.classList.add('settings');
    const dot11 = document.createElement('div');
    const dot12 = document.createElement('div');
    const dot13 = document.createElement('div');
    dot11.classList.add('dot');
    dot12.classList.add('dot');
    dot13.classList.add('dot')
    headSettings.appendChild(dot11);
    headSettings.appendChild(dot12);
    headSettings.appendChild(dot13);

    const headNodes = Array.from(e.target.parentElement.parentElement.children); 
    headNodes.forEach(node => node.style.display = 'none');

    e.target.parentElement.parentElement.appendChild(projectPriorityBox);
    e.target.parentElement.parentElement.appendChild(project1Name);
    e.target.parentElement.parentElement.appendChild(addToDo);
    e.target.parentElement.parentElement.appendChild(headSettings);
}

export {confirmSettings, cancelSettings,}
