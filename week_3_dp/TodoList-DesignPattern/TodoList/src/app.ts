import { ITodoData } from "./typings";
import TodoEvent from "./TodoEvent";

((doc) => {
  const oInput: HTMLInputElement = doc.querySelector("input");
  const oAddBtn: HTMLButtonElement = doc.querySelector(".add-btn");
  const oTodoList: HTMLElement = doc.querySelector(".todo-list");

  const todoData: ITodoData[] = [
    { id: 1, content: "123", completed: false },
    { id: 2, content: "234", completed: false },
    { id: 3, content: "789", completed: false },
  ];
  const todoEvent = new TodoEvent(todoData, oTodoList);

  // 新增
  function handleAddBtnClick(): void {
    const val: string = oInput.value.trim();
    if (val.length) {
      const ret = todoEvent.addTodo({
        id: new Date().getTime(),
        content: val,
        completed: false,
      });
      if (ret && ret === 1001) {
        alert("該項已存在");
        return;
      }
    }
    oInput.value = "";
  }

  function handleListClick(e: MouseEvent): void {
    const tar = e.target as HTMLElement;
    const tagName = tar.tagName.toLowerCase();
    if (tagName === "input" || tagName === "button") {
      const id: number = parseInt(tar.dataset.id);
      switch (tagName) {
        case "input":
          todoEvent.toggleComplete(tar, id);
          break;
        case "button":
          todoEvent.removeTodo(tar, id);
          break;
        default:
          break;
      }
    }
  }

  function bindEvent() {
    oAddBtn.addEventListener("click", handleAddBtnClick, false);
    oTodoList.addEventListener("click", handleListClick, false);
  }
  const init = (): void => {
    bindEvent();
  };
  init();
})(document);
