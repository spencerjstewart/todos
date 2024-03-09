class TodoList {
  constructor(todos = []) {
    if (
      Array.isArray(todos) &&
      todos.length > 0 &&
      todos.every(
        (todo) =>
          typeof todo === "object" && "todoText" in todo && "completed" in todo,
      )
    ) {
      this.todos = todos;
    } else {
      this.todos = [];
    }
  }

  add = (todoText) => {
    this.todos.push({
      todoText,
      completed: false,
    });
    this.displayTodos();
  };

  edit = (index, todoText) => {
    this.todos[index].todoText = todoText;
    this.displayTodos();
  };

  remove = (index) => {
    this.todos.splice(index, 1);
    this.displayTodos();
  };

  toggle = (index) => {
    this.todos[index].completed = !this.todos[index].completed;
    this.displayTodos();
  };

  toggleAll = () => {
    let numTrue = 0;

    this.todos.forEach((todo) => {
      if (todo.completed) {
        numTrue += 1;
      }
    });

    if (numTrue > 0 && numTrue !== this.todos.length) {
      this.todos.forEach((todo) => {
        todo.completed = true;
      });
    }

    if (numTrue === this.todos.length) {
      this.todos.forEach((todo) => {
        todo.completed = false;
      });
    }

    this.displayTodos();
  };
}

module.exports = {
  TodoList,
};
