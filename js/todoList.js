class TodoList {
  constructor(todos = []) {
    this.observers = [];
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

  subscribe = (observerFunction) => {
    this.observers.push(observerFunction);
  };

  notifyObservers = () => {
    this.observers.forEach((observer) => {
      observer();
    });
  };

  add = (todoText) => {
    this.todos.push({
      todoText,
      completed: false,
    });
    this.notifyObservers();
  };

  edit = (index, todoText) => {
    this.todos[index].todoText = todoText;
    this.notifyObservers();
  };

  remove = (index) => {
    this.todos.splice(index, 1);
    this.notifyObservers();
  };

  toggle = (index) => {
    this.todos[index].completed = !this.todos[index].completed;
    this.notifyObservers();
  };

  toggleAll = () => {
    let numTrue = 0;

    this.todos.forEach((todo) => {
      if (todo.completed) {
        numTrue += 1;
      }
    });

    if (numTrue >= 0 && numTrue !== this.todos.length) {
      this.todos.forEach((todo) => {
        todo.completed = true;
      });
    }

    if (numTrue === this.todos.length) {
      this.todos.forEach((todo) => {
        todo.completed = false;
      });
    }

    this.notifyObservers();
  };
}

module.exports = {
  TodoList,
};