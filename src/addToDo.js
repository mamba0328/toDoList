
function addToDo (e) { 
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
    
    e.target.parentElement.parentElement.nextSibling.appendChild(toDo);
}

export default addToDo; 