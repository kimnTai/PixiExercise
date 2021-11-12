import TodoList from "./components";
import { ITodoData } from "./components/sub/type";

const app = document.querySelector<HTMLDivElement>("#app")!;
const todoData: ITodoData[] = [];
const init = () => {
  const todoList: TodoList = new TodoList(app, todoData);
  todoList.init();
};
init();
