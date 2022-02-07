function closeCheckList() { 
    const closeTasks = document.getElementById('close')
    const chekList = document.getElementById('checkList')
    closeTasks.addEventListener('click', (e) => {
        chekList.style.display = 'none';
    })
    closeTasks.addEventListener('mouseover', (e) => {
        closeTasks.style.backgroundColor = 'khaki';
    })
    closeTasks.addEventListener('mouseleave', (e) => {
        closeTasks.style.backgroundColor = 'gray';
    })
}

export default closeCheckList(); 