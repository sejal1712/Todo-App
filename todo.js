let todoList = [];

function loadTodos(){
  let storedTodos = localStorage.getItem('todoList');
  if(storedTodos !==null){
    todoList = JSON.parse(storedTodos);
  }
}

function saveTodos(){
  let todoListJson = JSON.stringify(todoList);
  localStorage.setItem('todoList', todoListJson);
}

loadTodos();


function addTodo() {
  let inputElement = document.querySelector('#todo-input');

  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({ item : todoItem, dueDate : todoDate});
  inputElement.value = " ";
  dateElement.value = " ";

  saveTodos();

  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");

  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    let {item, dueDate } = todoList[i];
    newHtml += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button  class="btn-delete" onclick = "todoList.splice(${i}, 1); saveTodos(); displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}

displayItems();
