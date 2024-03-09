const inputBox = document.getElementById("input-box");
const listcont = document.getElementById("list");

function add() {
    if (inputBox.value === ''){
        alert("Enter the Task in To-Do List");
    }
    else{
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcont.appendChild(li)
        let cross = document.createElement("span");
        cross.innerHTML = "\u00d7";
        li.appendChild(cross);
    }
    inputBox.value = "";
}
listcont.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    }
}, false);