import { todoView } from "./template";
import { addTodo, changeCompleted, removeTodo } from "./todoEvent";
import { ITodo } from "./type";

class TodoList {
  private oTodoList: HTMLElement;
  private static instance: TodoList;

  @addTodo
  public addItem(todo: ITodo): void {
    const oItem: HTMLElement = document.createElement("div");
    oItem.className =
      "todo-item border d-flex justify-content-between align-items-center";
    oItem.innerHTML = todoView(todo);
    this.oTodoList.appendChild(oItem);
  }

  @removeTodo
  public removeItem(id: number): void {
    const oItems: HTMLCollection = document.getElementsByClassName("todo-item");
    console.log(id);

    Array.from(oItems).forEach((oItem) => {
      const _id = parseInt(oItem.querySelector("button").dataset.id);
      console.log(_id);

      if (_id === id) {
        oItem.remove();
      }
    });
  }
  @changeCompleted
  public toggleCompleted(id: number): void {
    const oItems: HTMLCollection = document.getElementsByClassName("todo-item");

    Array.from(oItems).forEach((oItem) => {
      const oCheckBox: HTMLInputElement = oItem.querySelector("input");
      const _id = parseInt(oCheckBox.dataset.id);
      if (_id === id) {
        const oContent: HTMLElement = oItem.querySelector("span");
        oContent.style.textDecoration = oCheckBox.checked
          ? "line-through"
          : "none";
      }
    });
  }

  private constructor(oTodoList: HTMLElement) {
    this.oTodoList = oTodoList;
  }
  // 創建方法 實現單例
  public static create(oTodoList: HTMLElement): TodoList {
    if (!TodoList.instance) {
      TodoList.instance = new TodoList(oTodoList);
    }
    return TodoList.instance;
  }
}

export default TodoList;
