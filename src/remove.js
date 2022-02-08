const removeElement = function(e){ 
 e.target.parentElement.parentElement.parentElement.remove(); //cheks which block do you deleting
};

export default removeElement;