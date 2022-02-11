function openSettings (e) { 
    const headNodes = Array.from(e.target.parentElement.children); 
    headNodes.forEach(node => node.style.display = 'none');

    const yellowPriorityBox = document.createElement('div');
    yellowPriorityBox.setAttribute('id','changePriorityBox');
    const yellowPriority = document.createElement('div');
    yellowPriority.classList.add('changePriority');
    yellowPriority.style.backgroundColor = 'yellow';
    yellowPriorityBox.appendChild(yellowPriority);

    const orangePriorityBox = document.createElement('div');
    orangePriorityBox.setAttribute('id','changePriorityBox');
    const orangePriority = document.createElement('div');
    orangePriority.classList.add('changePriority');
    orangePriority.style.backgroundColor = 'orange';
    orangePriorityBox.appendChild(orangePriority);

    const orangeredPriorityBox = document.createElement('div');
    orangeredPriorityBox.setAttribute('id','changePriorityBox');
    const orangeredPriority = document.createElement('div');
    orangeredPriority.classList.add('changePriority');
    orangeredPriority.style.backgroundColor = 'indianred';
    orangeredPriorityBox.appendChild(orangeredPriority);

    const input = document.createElement('input');
    input.style.width = '80%';
    
    const confirmBox = document.createElement('div');
    confirmBox.setAttribute('id','confirmBox');
    const confirm = document.createElement('div');
    confirm.classList.add('confirm');
    confirm.style.backgroundColor = 'green';
    confirmBox.appendChild(confirm);

    const cancelBox = document.createElement('div');
    cancelBox.setAttribute('id','cancelBox');
    const cancel = document.createElement('div');
    cancel.classList.add('cancel');
    cancel.style.backgroundColor = 'red';
    cancelBox.appendChild(cancel);

    e.target.parentElement.append(yellowPriorityBox, orangePriorityBox, orangeredPriorityBox, input, confirmBox, cancelBox);
}

export default openSettings