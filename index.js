const todos = []

const add = todo => todos.push(todo)

const edit = (index, todo) => todos[index] = todo

const remove = (index) => todos.splice(index, index + 1)

console.log(todos)