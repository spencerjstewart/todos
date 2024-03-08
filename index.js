class TodoList {
  constructor(todos = []) {
    if (Array.isArray(todos) && todos.length > 0 && todos.every(todo => typeof todo === 'object' && 'todoText' in todo && 'completed' in todo)) {
      this.todos = todos;
    } else {
      this.todos = [];
    }
  }

  displayTodos = () => {
    for (const todo of this.todos) {
      console.log(`${todo.completed ? '[X]' : '[]'} ${todo.todoText}`)
    }
  }

  add = (todoText) => {
    this.todos.push({
      todoText, completed: false
    })
    this.displayTodos()
  }

  edit = (index, todoText) => {
    this.todos[index].todoText = todoText
    this.displayTodos()
  }

  remove = (index) => {
    this.todos.splice(index, 1)
    this.displayTodos()
  }

  toggle = (index) => {
    this.todos[index].completed = !this.todos[index].completed
    this.displayTodos()
  }
}

module.exports = {
  TodoList
}