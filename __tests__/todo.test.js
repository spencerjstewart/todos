const {TodoList} = require('../index');
require('jest')

const initTodos = () => {
  return new TodoList([{
    todoText: 'Drink water', completed: false
  }, {
    todoText: 'Go for a walk', completed: false
  }, {
    todoText: 'Learn JavaScript', completed: false
  }])
}

describe('Todo App', () => {
  describe('The function ', () => {
    let todoList;

    beforeEach(() => {
      todoList = initTodos()
    })

    test('add should add objects to todos.', () => {
      todoList.add('Clean emails')
      expect(todoList.todos[3].todoText).toBe('Clean emails')
    })
  })
})