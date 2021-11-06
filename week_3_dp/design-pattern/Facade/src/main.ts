import TodoList from "./components";
import { ITodoData } from "./types";

const app = document.querySelector<HTMLDivElement>("#app")!;
const todoData: ITodoData[] = [
  {
    id: 1,
    content: "123",
    completed: true,
  },
  {
    id: 2,
    content: "456",
    completed: true,
  },
  {
    id: 3,
    content: "789",
    completed: true,
  },
];
const init = () => {
  const todoList: TodoList = new TodoList(app, todoData);
  todoList.init();
};
init();

app.innerHTML = `
  <h1>Hello Vite!</h1>
`;
