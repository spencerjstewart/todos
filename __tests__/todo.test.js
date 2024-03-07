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
  describe('The function', () => {
    let todoList;

    beforeEach(() => {
      todoList = initTodos()
    })

    test('add should add objects to todos.', () => {
      todoList.add('Clean emails')
      expect(todoList.todos[3].todoText).toBe('Clean emails')
    })

    test('edit should accept an index and some todo text and edit the todos' + ' list in-place', () => {
      todoList.edit(1, 'edited todo')
      expect(todoList.todos[0].todoText).toBe('Drink water')
      expect(todoList.todos[1].todoText).toBe('edited todo')
      expect(todoList.todos[2].todoText).toBe('Learn JavaScript')
    })

    test('remove should remove a todo in-place', () => {
      todoList.remove(1)
      expect(todoList.todos[0].todoText).toBe('Drink water')
      expect(todoList.todos[1].todoText).toBe('Learn JavaScript')
    })
  })
})