function addTodo() {
    var todoInput = document.getElementById("todoInput");
    var todoList = document.getElementById("todoList");

    var newTodo = document.createElement("li");
    newTodo.textContent = todoInput.value;
    todoList.appendChild(newTodo);

    todoInput.value = "";
}
