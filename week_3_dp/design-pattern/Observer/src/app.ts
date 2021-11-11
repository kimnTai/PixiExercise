import TodoList from "./TodoList";
import { EVENT_TYPE, ITodo } from "./type";
((doc) => {
  const oTodoList: HTMLElement = doc.querySelector(".todo-list");
  const oInput: HTMLInputElement = doc.querySelector("input");
  const oAddBtn: HTMLButtonElement = doc.querySelector(".add-btn");

  const todoList = TodoList.create(oTodoList);

  const init = (): void => {
    bindEvent();
  };
  function bindEvent(): void {
    oAddBtn.addEventListener("click", handleAddBtnClick, false);
    oTodoList.addEventListener("click", handleListClick, false);
  }
  function handleAddBtnClick(): void {
    const val: string = oInput.value.trim();
    if (!val.length) {
      return;
    }
    todoList.notify<ITodo>(EVENT_TYPE.ADD, {
      id: new Date().getTime(),
      content: val,
      completed: false,
    });
    oInput.value = "";
  }
  function handleListClick(e: MouseEvent): void {
    const tar = e.target as HTMLElement;
    const tagName = tar.tagName.toLowerCase();
    if (tagName === "input" || tagName === "button") {
      const id: number = parseInt(tar.dataset.id);

      switch (tagName) {
        case "input":
          todoList.notify(EVENT_TYPE.TOGGLE, id);
          break;
        case "button":
          todoList.notify(EVENT_TYPE.REMOVE, id);
          break;
        default:
          break;
      }
    }
  }
  init();
})(document);
