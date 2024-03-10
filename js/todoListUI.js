class TodoListUI {
  // takes an instance of TodoList
  constructor(todoList) {
    this.todoList = todoList;
    this.displayTodosBtn = document.querySelector(".display-todos-btn");
    this.todoListUl = document.querySelector(".todo-list");
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
    this.todoListUl.innerHTML = "";
    this.todoList.todos.forEach((todo) => {
      const todoListItemLi = document.createElement("li");
      const todoTextSpan = document.createElement("span");
      todoListItemLi.classList.add("list-group-item");
      const iconI = document.createElement("i");
      if (todo.completed) {
        iconI.classList.add("fa-solid", "fa-check-circle");
        todoTextSpan.style.textDecoration = "line-through";
      } else {
        iconI.classList.add("fa-regular", "fa-circle");
      }
      todoTextSpan.textContent = todo.todoText;
      todoListItemLi.appendChild(iconI);
      todoListItemLi.appendChild(document.createTextNode("\u00A0"));
      todoListItemLi.appendChild(todoTextSpan);
      this.todoListUl.appendChild(todoListItemLi);
    });
  };
}

module.exports = {
  TodoListUI,
};