# Todos

This is a simple todo list application built as part of the Practical JavaScript course at [Watch 
and Code](https://watchandcode.com/). The application allows you to create, read, update, and delete todo items, as well as mark them as completed.

## Features

- ✅ Add new todo items
- ✅ Edit existing todo items
- ✅ Remove todo items
- ✅ Toggle the completed status of individual todo items
- ✅ Toggle the completed status of all todo items at once
- ✅ View todo items by completed status

## Upcoming Features

### Version 3

- Use Express to serve the application
- Use MongoDB to persist todo items
- Search bar to filter todos
- Tags to categorize todos
- Due dates for todos
- Estimated time and/or effort for todos

### Version 4

- Add user authentication
- Allow users to create and manage their own todo lists

### Version 5

- Allow users to create multiple todo lists
- Create Kanban template so users can use a simple todo list or a Kanban layout

## Technologies Used

- Vanilla HTML/CSS
- Bootstrap
- Vanilla JavaScript
- Webpack
- Babel
- Jest

## Commit Message Conventions

This project uses the [AngularJS commit message conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.uyo6cb12dt6w) for 
commit messages. Scope is optional in the message header. The message body and footer are 
optional.

Following this convention allows for an easy-to-read and consistent commit history, as well as 
allowing for automatic versioning and changelog generation with semantic-release.  

## Getting Started

To get started with the Todo List application, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/spencerjstewart/practical-javascript
```

2. Navigate to the project directory:
```bash
cd practical-javascript
```

3. Install the project dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run start-dev
```
5. Open your web browser and visit
```
http://localhost:8080
```
to see the application running.

## Usage

- To add a new todo item, type the task in the input field and press Enter.
- To edit a todo item, click on the edit icon (pen) next to the item, make your changes, and press Enter or click outside the input field.
- To remove a todo item, click on the remove icon (trash can) next to the item.
- To mark a todo item as completed, click on the checkbox next to the item.
- To toggle the completed status of all todo items at once, click on the "Toggle All" button.

## Running Tests

The application includes a test suite using Jest. To run the tests, use the following command: 
```bash
npm run test
```

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Watch and Code](https://watchandcode.com/) for providing the Practical JavaScript course.