
function addProject() {
    const projects = document.getElementById('projects');
    const project = document.createElement('div');
    project.setAttribute('id','project');
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
    projectName.innerText = 'Your project'; 

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

    //toDo section 
    const toDo = document.createElement('div');
    toDo.classList.add('toDo');
    
    const priorityBox = document.createElement('div');
    priorityBox.setAttribute('id','priorityBox');
    const priority = document.createElement('div');
    priority.classList.add('priority');
    priorityBox.appendChild(priority);

    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerText = 'Your Task';
    const date = document.createElement('h3');
    date.classList.add('date');
    date.innerText = '28.03';
    
    const settings = document.createElement('div');
    settings.classList.add('settings');
    const dot = document.createElement('div');
    const dot1 = document.createElement('div');
    const dot2 = document.createElement('div');
    dot.classList.add('dot');
    dot1.classList.add('dot');
    dot2.classList.add('dot');
    settings.appendChild(dot);
    settings.appendChild(dot1);
    settings.appendChild(dot2);
    
    toDo.appendChild(priorityBox);
    toDo.appendChild(title);
    toDo.appendChild(date);
    toDo.appendChild(settings);
    
    projectHead.appendChild(projectPriorityBox);
    projectHead.appendChild(projectName);
    projectHead.appendChild(headSettings);


    projectBody.appendChild(toDo);
    project.appendChild(projectHead);
    project.appendChild(projectBody);
    projects.appendChild(project);

    return projectHead;
    }

    export  {
      addProject, 

    }