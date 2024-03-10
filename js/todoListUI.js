class TodoListUI {
  // takes an instance of TodoList
  constructor(todoList) {
    this.todoList = todoList;
    this.displayTodosBtn = document.querySelector(".display-todos-btn");
    this.todoListEl = document.querySelector(".todo-list");
  }

  init = () => {
    this.todoList.subscribe(this.displayTodos);
    this.displayTodosBtn.addEventListener("click", () =>
      this.handleDisplayTodosBtnClick(),
    );
    this.displayTodos();
  };

  handleDisplayTodosBtnClick = () => {
    this.displayTodos();
  };

  displayTodos = () => {
    this.todoListEl.innerHTML = "";
    this.todoList.todos.forEach((todo) => {
      const todoListItem = document.createElement("li");
      const todoTextEl = document.createElement("span");
      todoListItem.classList.add("list-group-item");
      const icon = document.createElement("i");
      if (todo.completed) {
        icon.classList.add("fa-solid", "fa-check-circle");
        todoTextEl.style.textDecoration = "line-through";
      } else {
        icon.classList.add("fa-regular", "fa-circle");
      }
      todoTextEl.textContent = todo.todoText;
      todoListItem.appendChild(icon);
      todoListItem.appendChild(document.createTextNode("\u00A0"));
      todoListItem.appendChild(todoTextEl);
      this.todoListEl.appendChild(todoListItem);
    });
  };
}

module.exports = {
  TodoListUI,
};