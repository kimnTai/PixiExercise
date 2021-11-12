import TodoList from "./TodoList";

((doc) => {
  const oInput: HTMLInputElement = doc.querySelector("input");
  const oAddBtn: HTMLButtonElement = doc.querySelector(".add-btn");
  const oTodoList: HTMLElement = doc.querySelector(".todo-list");

  const todoList = TodoList.create(oTodoList);

  /**
   * 方法:
   * addItem(todo) { id: new Date().getTime(), content: oTodoList.value, completed:false }
   * removeItem   listItems -> id -> item -> remove
   * toggleCompleted    listItems -> id -> item -> content -> 刪除線
   */

  // 事件處理
  function handleAddBtnClick(): void {
    const val: string = oInput.value.trim();
    if (!val.length) {
      return;
    }
    todoList.addItem({
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
          todoList.toggleCompleted(id);
          break;
        case "button":
          todoList.removeItem(id);
          break;
        default:
          break;
      }
    }
  }
  function bindEvent(): void {
    oAddBtn.addEventListener("click", handleAddBtnClick, false);
    oTodoList.addEventListener("click", handleListClick, false);
  }
  const init = (): void => {
    bindEvent();
  };
  init();
})(document);
