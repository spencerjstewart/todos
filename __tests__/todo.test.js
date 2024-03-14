const { TodoList } = require("../js/todoList");
const { TodoListUI } = require("../js/todoListUI");
require("jest");

const initTodos = () =>
  new TodoList([
    {
      todoText: "Drink water",
      completed: false,
    },
    {
      todoText: "Go for a walk",
      completed: false,
    },
    {
      todoText: "Learn JavaScript",
      completed: false,
    },
  ]);

describe("Todo App", () => {
  describe("The function", () => {
    let todoList;
    let ui;

    beforeEach(() => {
      document.body.innerHTML = `
    <div class="container">
      <section class="todo-card card">
        <header class="todo-card__header card-header">
          <h1>todos</h1>
        </header>
        <label class="visually-hidden" for="todo-input">"What needs to be done?"</label>
        <input
          class="todo-input form-control"
          id="todo-input"
          placeholder="What needs to be done?"
          type="text"
        />
        <hr>
        <button class="todo-card__toggle-all btn btn-light">Toggle All</button>
        <article class="todo-card__body card-body">
          <ul class="todo-list list-group list-group-flush"></ul>
        </article>
      </section>
    </div>
      `;
      todoList = initTodos();
      ui = new TodoListUI(todoList);
      ui.init();
    });

    afterEach(() => {
      document.body.innerHTML = "";
    });

    test("add should add objects to todos.", () => {
      todoList.add("Clean emails");
      expect(todoList.todos[3].todoText).toBe("Clean emails");
    });

    test(
      "edit should accept an index and some todo text and edit the todos" +
        " list in-place",
      () => {
        todoList.edit(1, "edited todo");
        expect(todoList.todos[0].todoText).toBe("Drink water");
        expect(todoList.todos[1].todoText).toBe("edited todo");
        expect(todoList.todos[2].todoText).toBe("Learn JavaScript");
      },
    );

    test("remove should remove a todo in-place", () => {
      todoList.remove(1);
      expect(todoList.todos[0].todoText).toBe("Drink water");
      expect(todoList.todos[1].todoText).toBe("Learn JavaScript");
    });

    test("toggle should flip the completed property on a todo", () => {
      todoList.toggle(0);
      expect(todoList.todos[0].completed).toBe(true);
      todoList.toggle(0);
      expect(todoList.todos[0].completed).toBe(false);
    });
  });
});