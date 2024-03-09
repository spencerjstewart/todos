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
      todoListItem.classList.add("list-group-item");
      todoListItem.textContent = `${todo.completed ? "[X]" : "[ ]"} ${todo.todoText}`;
      this.todoListEl.appendChild(todoListItem);
    });
  };
}

module.exports = {
  TodoListUI,
};