
/* show submenu */
function selectItem(event){
    event.currentTarget.classList.toggle("pass-option-select");
} 

/* update item selected */
function selectOption(event){
    const optionName=event.currentTarget;
    optionName.parentElement.parentElement.children[0].innerHTML=optionName.innerHTML; 
}
/* change destiny-begin way */
function changePlaces(event){
    event.currentTarget.classList.toggle("changeDirection");
}