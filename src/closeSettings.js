

function newName(e, array) { 
    const projectId = e.target.parentElement.parentElement.parentElement.id;
        //name changing 
      const projectName = document.createElement('h1');
      projectName.classList.add('projectName');
      let input =  e.target.parentElement.parentElement.lastChild.previousSibling.previousSibling.value; 

      //checks were changes made or not 
      if(input){
         projectName.innerText = input;
         for(let i=0;i<array.length;i++){ 
            if(array[i].id == projectId){
                array[i].changeName(projectName.innerText); 
            }
        }  
      } else { 
        for(let i=0;i<array.length;i++){ 
            if(array[i].id == projectId){
                projectName.innerText = array[i].name; 
            }
        }
      }
      
      return projectName; 
}

function newPriority(e, array){  

    const projectId = e.target.parentElement.parentElement.parentElement.id;
    let chosenPriority = 0;  
    const priorities = Array.from(e.target.parentElement.parentElement.querySelectorAll('.changePriority'));

    //finds chosen
    for(let i=0;i<priorities.length; i++) { 
        if(priorities[i].style.border == '3px solid blue'){
            priorities[i].style.backgroundColor == 'yellow' ? chosenPriority = 0 : 
            priorities[i].style.backgroundColor == 'orange' ? chosenPriority = 1 : chosenPriority = 2;
        }
    }   
    
    //aplies to obj properties 
    for(let i=0;i<array.length;i++){ 
        if(array[i].id == projectId){
            array[i].changePriority(chosenPriority); 
            console.log(array[i]);
        }
    }

}

function confirmSettings(e, array){
    const projectId = e.target.parentElement.parentElement.parentElement.id;

    //project priority
    const projectPriorityBox = document.createElement('div');
    projectPriorityBox.setAttribute('id','priorityBox');
    const projectPriority = document.createElement('div');
    projectPriority.classList.add('priority');
    projectPriorityBox.style.margin = '0';

    newPriority(e, array);

    //changes nodesPriority color
    for(let i=0;i<array.length;i++){ 
        if(array[i].id == projectId){
            array[i].priority == 0 ? projectPriority.style.backgroundColor = 'yellow' : 
            array[i].priority == 1 ? projectPriority.style.backgroundColor = 'orange' : projectPriority.style.backgroundColor = 'indianred';
        }
    }

    projectPriorityBox.appendChild(projectPriority);

    //project name
    const projectName = newName(e, array); 

    const addToDo = document.createElement('h2');
      addToDo.setAttribute('id', 'addToDo');
    addToDo.innerText = '+';

    //project settings
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

    console.log(array);
}

function cancelSettings(e, array){ 
    const projectId = e.target.parentElement.parentElement.parentElement.id;

    const projectPriorityBox = document.createElement('div');
    projectPriorityBox.setAttribute('id','priorityBox');
    const projectPriority = document.createElement('div');
    projectPriority.classList.add('priority');

        //changes nodesPriority color
        for(let i=0;i<array.length;i++){ 
            if(array[i].id == projectId){
                array[i].priority == 0 ? projectPriority.style.backgroundColor = 'yellow' : 
                array[i].priority == 1 ? projectPriority.style.backgroundColor = 'orange' : projectPriority.style.backgroundColor = 'indianred';
            }
        }
        
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
