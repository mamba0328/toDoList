
function addToDo (e) { 
    
    const toDoHead = document.createElement('div');
    toDoHead.setAttribute('id','toDoHead');

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

    const openTasks = document.createElement('p')
    const arrow = document.createElement('i')
    arrow.classList.add('arrow','down');
    openTasks.setAttribute('id','openTasks');
    openTasks.appendChild(arrow)
    
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

    const addTask = document.createElement('h1');
    addTask.setAttribute('id', 'addTask');
    addTask.innerText = '+';
    
    const taskList = document.createElement('div'); 
    taskList.setAttribute('id', 'taskList');
    taskList.style.display= 'none';

    toDoHead.appendChild(priorityBox);
    toDoHead.appendChild(title);
    toDoHead.appendChild(date);
    toDoHead.appendChild(openTasks);
    toDoHead.appendChild(addTask);
    toDoHead.appendChild(settings);

    toDo.appendChild(toDoHead);
    toDo.appendChild(taskList);
    
    e.target.parentElement.nextSibling.appendChild(toDo);
}

export default addToDo; 