const todos = []

const displayTodos = () => {
  console.log(todos)
}

const add = (todoText) => {
  todos.push({
    todoText, completed: false
  })
  displayTodos()
}

const edit = (index, todoText) => {
  todos[index].todoText = todoText
  displayTodos()
}

const remove = (index) => {
  todos.splice(index, 1)
  displayTodos()
}

const toggle = (index) => {
  todos[index].completed = !completed
  displayTodos()
}

module.exports = {
  displayTodos, add, edit, remove, toggle
}