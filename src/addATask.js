function addATask(e){
    const task = document.createElement('div');
    task.setAttribute('id', 'task');

    const tickBox = document.createElement('div');
    tickBox.setAttribute('id', 'tickBox')
    const completeTask = document.createElement('div');
    completeTask.setAttribute('id','tick-mark');
    tickBox.append(completeTask);

    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerText = 'Your subtask';

    task.appendChild(tickBox);
    task.appendChild(title);

    e.target.parentElement.nextSibling.appendChild(task); 
    e.target.parentElement.nextSibling.style.display = 'flex'; 
}

export default addATask;