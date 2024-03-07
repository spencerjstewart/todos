const {displayTodos, add, edit, remove, toggle} = require('../index');
require('jest')

const initTodos = () => {
  return [{
    todoText: 'Drink water', completed: false
  }, {
    todoText: 'Go for a walk', completed: false
  }, {
    todoText: 'Learn JavaScript', completed: false
  }]
}

describe('Todo App', () => {
  describe('The function ', () => {
    let todos = []

    beforeEach(() => {
      todos = initTodos()
    })

    test('add should add objects to todos.', () => {
      add('Clean emails')
      expect(todos[3].todoText).toBe('Clean emails')
    })
  })
})