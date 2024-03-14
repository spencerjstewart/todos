class TodoListUI {
  // takes an instance of TodoList
  constructor(todoList) {
    this.todoList = todoList;
    this.todoInput = document.querySelector(".todo-input");
    this.todoListUl = document.querySelector(".todo-list");
    this.toggleAllBtn = document.querySelector(".todo-card__toggle-all");
  }

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

    // Move the cursor to the end of the text content
    const range = document.createRange();
    range.selectNodeContents(todoTextSpan);
    range.collapse(false);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    todoTextSpan.addEventListener("blur", this.handleTodoItemTextBlur);
  };

  handleTodoItemTextBlur = (e) => {
    e.target.contentEditable = false;
    e.target.removeEventListener("blur", this.handleTodoItemTextBlur);
    const text = e.target.textContent.trim();
    if (text === "") {
      this.displayTodos();
    } else {
      this.todoList.edit(
        parseInt(e.target.closest(".todo-item").dataset.index, 10),
        text,
      );
    }
  };

  handleTodoItemTextEnter = (e) => {
    e.target.contentEditable = false;
    const text = e.target.textContent.trim();
    if (text === "") {
      this.displayTodos();
    } else {
      this.todoList.edit(e.target.closest(".todo-item").dataset.index, text);
    }
  };

  displayTodos = () => {
    this.todoListUl.innerHTML = "";
    this.todoList.todos.forEach((todo, index) => {
      // create the li
      const todoListItemLi = document.createElement("li");
      todoListItemLi.classList.add("todo-item", "list-group-item");
      todoListItemLi.setAttribute("data-index", index);

      // create the completed checkbox
      const todoItemToggleCompletedCheckbox = document.createElement("input");
      todoItemToggleCompletedCheckbox.type = "checkbox";
      todoItemToggleCompletedCheckbox.classList.add(
        "todo-item__toggle-completed",
      );
      todoItemToggleCompletedCheckbox.checked = !!todo.completed;
      todoListItemLi.appendChild(todoItemToggleCompletedCheckbox);

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

      // create the remove icon
      const removeIconI = document.createElement("i");
      removeIconI.classList.add(
        "todo-item__remove-icon",
        "fa-solid",
        "fa-trash",
      );
      todoListItemLi.appendChild(removeIconI);

      this.todoListUl.appendChild(todoListItemLi);
    });
  };

  init = () => {
    // setup observers
    this.todoList.subscribe(this.displayTodos);

    // handle adding todos
    this.todoInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.handleAddTodo();
      }
    });

    // handle editing todos
    this.todoListUl.addEventListener("click", (e) => {
      if (e.target.classList.contains("todo-item__edit-icon")) {
        e.stopPropagation();
        this.handleEditTodoIconClick(e);
      }
    });
    this.todoListUl.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && e.target.classList.contains("todo-item__text")) {
        this.handleTodoItemTextEnter(e);
      }
    });

    // handle removing todos
    this.todoListUl.addEventListener("click", (e) => {
      if (e.target.classList.contains("todo-item__remove-icon")) {
        this.todoList.remove(
          parseInt(e.target.closest(".todo-item").dataset.index, 10),
        );
      }
    });

    // handling toggling todos
    this.todoListUl.addEventListener("click", (e) => {
      if (e.target.classList.contains("todo-item__toggle-completed")) {
        this.todoList.toggle(
          parseInt(e.target.closest(".todo-item").dataset.index, 10),
        );
      }
    });

    // handling toggling all todos
    this.toggleAllBtn.addEventListener("click", (e) => {
      if (e.target.classList.contains("todo-card__toggle-all")) {
        this.todoList.toggleAll();
      }
    });

    // display todolist
    this.displayTodos();
  };
}

module.exports = {
  TodoListUI,
};