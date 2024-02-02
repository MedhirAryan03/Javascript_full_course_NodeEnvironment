const fs = require('fs');
const readline = require('readline-sync');

const todoFilePath = 'todos.json';

function loadTodos() {
  try {
    const data = fs.readFileSync(todoFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function saveTodos(todos) {
  fs.writeFileSync(todoFilePath, JSON.stringify(todos, null, 2), 'utf8');
}

function displayTodos(todos) {
  console.log('\n===== Your To-Do List =====');
  todos.forEach((todo, index) => {
    console.log(`${index + 1}. [${todo.completed ? 'x' : ' '}] ${todo.task}`);
  });
  console.log('==========================\n');
}

function addTodo() {
  const task = readline.question('Enter the task: ');
  return { task, completed: false };
}

function removeTodo() {
  const index = readline.questionInt('Enter the number of the task to remove: ') - 1;
  return index;
}

function markComplete(todos) {
  const index = readline.questionInt('Enter the number of the task to mark as complete: ') - 1;
  todos[index].completed = true;
}

function main() {
  let todos = loadTodos();

  while (true) {
    console.log('1. Display To-Do List');
    console.log('2. Add New Task');
    console.log('3. Remove Task');
    console.log('4. Mark Task as Complete');
    console.log('5. Quit');

    const choice = readline.questionInt('Enter your choice: ');

    switch (choice) {
      case 1:
        displayTodos(todos);
        break;
      case 2:
        todos.push(addTodo());
        break;
      case 3:
        const removeIndex = removeTodo();
        todos.splice(removeIndex, 1);
        break;
      case 4:
        markComplete(todos);
        break;
      case 5:
        saveTodos(todos);
        console.log('Goodbye!');
        process.exit();
      default:
        console.log('Invalid choice. Please try again.');
    }

    saveTodos(todos);
  }
}

main();
