let todolist = [];

//Get DOM elements
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoListElement =document.getElementById('todo-list');

//Add event listner to add to button
addTodoBtn.addEventListener('click', addTodo); {
    let task = todoInput.ariaValueMax;
    if (task === ""){
        alert("please enter a task");
        return;
    }
    let listItem = document.createElement("li");
    listItem.textContent = task;
    taskList.appendChild(listItem); //it adds the listItem(li) as achild to  the list
    listItem.addEventListener("click", () => {
        listItem.classList.toggle("completed"); //add CSS class to an element
    })
}