const todoList = [
  {
    name: "make dinner",
    date: "2023-12-26",
  },
  { name: "wash dishes", date: "2023-12-26" },
];

renderTodoList();

// const dateInputElement = document.querySelector("js-due-date-input");
// const dueDate = dateInputElement.value;

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const todoObject=.name;
    // const todoObject=.duedate;
    console.log(todoObject);
    const { name, date } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${date}</div>
    <button onclick="
    todoList.splice(${i},1)
    renderTodoList();
    ">delete</button>
    `;
    todoListHTML += html;
  }
  // console.log(todoListHTML);

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const dateInputElement = document.querySelector(".js-due-date-input");

  console.log(dateInputElement);
  console.log(inputElement);

  const name = inputElement.value;
  console.log(name);

  const date = dateInputElement.value;
  console.log(date);

  todoList.push({
    name: name,
    date: date,
  });

  inputElement.value = "";
  dateInputElement.value = "";

  renderTodoList();
}
