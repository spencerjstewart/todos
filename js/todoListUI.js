class TodoListUI {
  // takes an instance of TodoList
  constructor(todoList) {
    this.todoList = todoList;
    this.displayTodosBtn = document.querySelector(".display-todos-btn");
    this.todoInput = document.querySelector(".todo-input");
    this.todoListUl = document.querySelector(".todo-list");
  }

  init = () => {
    // setup observers
    this.todoList.subscribe(this.displayTodos);

    // setup event listeners
    this.displayTodosBtn.addEventListener("click", () =>
      this.handleDisplayTodosBtnClick(),
    );
    this.todoInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.handleAddTodo();
      }
    });

    // display todolist
    this.displayTodos();
  };

  handleDisplayTodosBtnClick = () => {
    this.displayTodos();
  };

  handleAddTodo = () => {
    this.todoList.add(this.todoInput.value);
    this.todoInput.value = "";
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