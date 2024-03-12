import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../css/styles.css";

const { TodoList } = require("./todoList");
const { TodoListUI } = require("./todoListUI");

(function init() {
  const todoList = new TodoList();
  const ui = new TodoListUI(todoList);
  ui.init();
})();
