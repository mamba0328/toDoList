class project { 

  constructor( ){ 
    this.name = 'Project'; 
    this.priority = '1';
    this.toDos = [];  
    this.id = Math.floor(Math.random() * (10**6))
  }

  addProject() { 
    const projects = document.getElementById('projects');
    const project = document.createElement('div');
    project.setAttribute('id',`${this.id}`);
    project.classList.add('project');
    const projectHead = document.createElement('div');
    projectHead.setAttribute('id','projectHead');
    const projectBody = document.createElement('div');
    projectBody.setAttribute('id','projectBody');

    //head section
    const projectPriorityBox = document.createElement('div');
    projectPriorityBox.setAttribute('id','priorityBox');
    const projectPriority = document.createElement('div');
    projectPriority.classList.add('priority');
    projectPriorityBox.appendChild(projectPriority);
    projectPriorityBox.style.margin = '0';

    const projectName = document.createElement('h1');
      projectName.classList.add('projectName');
    projectName.innerText = this.name; 

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

    //random bg for head
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
  
    projectHead.style.backgroundColor = "rgb(" + red + ","+green+"," +blue+")";

    projectHead.appendChild(projectPriorityBox);
    projectHead.appendChild(projectName);
    projectHead.appendChild(addToDo);
    projectHead.appendChild(headSettings);

    project.appendChild(projectHead);
    project.appendChild(projectBody);
    projects.appendChild(project);
  }

  changeName(newName) { 
    this.name = newName; 
  }

  changePriority(newPriority){ 
    this.priority = newPriority;

  }

}

    export default project
