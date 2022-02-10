const removeElement = function(e){
    if(e.target.id == 'tickBox'){

        if(e.target.parentElement.nextSibling||e.target.parentElement.previousSibling){
            console.log(1);
        } else { 
            e.target.parentElement.parentElement.previousSibling.lastChild.previousSibling.previousSibling.style.display = 'none';
        }

        e.target.parentElement.remove();
        return;

    } else if ( e.target.parentElement.id == 'tickBox'){
        if(e.target.parentElement.parentElement.nextSibling||e.target.parentElement.parentElement.previousSibling){
            console.log(1);
        } else { 
            e.target.parentElement.parentElement.parentElement.previousSibling.lastChild.previousSibling.previousSibling.style.display = 'none';
        }

        e.target.parentElement.parentElement.remove();
        return;
    }

    e.target.parentElement.parentElement.parentElement.remove(); //cheks which block do you deleting

};

export default removeElement;