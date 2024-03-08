const { TodoList } = require("./todoList");
const { TodoListUI } = require("./todoListUI");

(function init() {
  const todoList = new TodoList();
  const ui = new TodoListUI(todoList);
  ui.init();
})();