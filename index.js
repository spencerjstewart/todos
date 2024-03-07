const todos = []

const displayTodos = () => {
  console.log(todos)
}

const add = (todo) => {
  todos.push(todo)
  displayTodos()
}

const edit = (index, todo) => {
  todos[index] = todo
  displayTodos()
}

const remove = (index) => {
  todos.splice(index, 1)
  displayTodos()
}