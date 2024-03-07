const todos = []

const add = todo => todos.push(todo)

console.log(todos)
todos[0] = 'Item 1 updated'
todos.splice(0, 1)