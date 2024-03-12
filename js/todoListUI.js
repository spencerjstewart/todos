class TodoListUI {
  // takes an instance of TodoList
  constructor(todoList) {
    this.todoList = todoList;
    this.displayTodosBtn = document.querySelector(".display-todos-btn");
    this.todoInput = document.querySelector(".todo-input");
    this.todoListUl = document.querySelector(".todo-list");
  }

  handleDisplayTodosBtnClick = () => {
    this.displayTodos();
  };

  handleAddTodo = () => {
    this.todoList.add(this.todoInput.value);
    this.todoInput.value = "";
  };

  handleEditTodoIconClick = (e) => {
    const todoTextSpan = e.target
      .closest(".todo-item")
      .querySelector(".todo-item__text");
    todoTextSpan.contentEditable = true;
    todoTextSpan.focus();
  };

  displayTodos = () => {
    this.todoListUl.innerHTML = "";
    this.todoList.todos.forEach((todo) => {
      // create the li
      const todoListItemLi = document.createElement("li");
      todoListItemLi.classList.add("todo-item", "list-group-item");

      // create the completed icon
      const completedIconI = document.createElement("i");
      completedIconI.classList.add("todo-item__completed-icon", "fa");
      completedIconI.classList.add(
        "fa",
        todo.completed ? "fa-check-circle" : "fa-circle",
      );
      todoListItemLi.appendChild(completedIconI);

      // add a space
      todoListItemLi.appendChild(document.createTextNode("\u00A0"));

      // create the todo text
      const todoTextSpan = document.createElement("span");
      todoTextSpan.classList.add("todo-item__text");
      todoTextSpan.style.textDecoration = todo.completed
        ? "line-through"
        : "none";
      todoTextSpan.textContent = todo.todoText;
      todoListItemLi.appendChild(todoTextSpan);

      // create the edit icon
      const editIconI = document.createElement("i");
      editIconI.classList.add("todo-item__edit-icon", "fa-solid", "fa-pen");
      todoListItemLi.appendChild(editIconI);

      this.todoListUl.appendChild(todoListItemLi);
    });
  };

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
    this.todoListUl.addEventListener("click", (e) => {
      if (e.target.classList.contains("todo-item__edit-icon")) {
        e.stopPropagation();
        this.handleEditTodoIconClick(e);
      }
    });
    this.todoListUl.addEventListener("blur", (e) => {
      if (e.target.classList.contains("todo-item__text")) {
        e.target.contentEditable = false;
        this.todoList.edit(
          e.target.closest(".todo-item").dataset.index,
          e.target.textContent,
        );
      }
    });

    // display todolist
    this.displayTodos();
  };
}

module.exports = {
  TodoListUI,
};