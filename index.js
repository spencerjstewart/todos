const todos = []

const displayTodos = () => {
  console.log(todos)
}

const add = (todoText) => {
  todos.push({
    todoText,
    completed: false
  })
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