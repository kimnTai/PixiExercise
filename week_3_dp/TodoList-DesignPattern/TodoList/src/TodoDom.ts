import TodoTemplate from "./TodoTemplate";
import { ITodoData } from "./typings";
import { findParentNode } from "./utils";

class TodoDom extends TodoTemplate {
  private todoWrapper: HTMLElement;
  constructor(todoWrapper: HTMLElement) {
    super();
    this.todoWrapper = todoWrapper;
  }

  protected initList(todoData: ITodoData[]) {
    if (todoData.length) {
      todoData.map((todo: ITodoData) => {
        this.addItem(todo);
      });
    }
  }

  protected addItem(todo: ITodoData): void {
    const oItem: HTMLElement = document.createElement("div");
    oItem.dataset.id = todo.id.toString();
    oItem.className =
      "todo-item border d-flex justify-content-between align-items-center";
    oItem.innerHTML = this.todoView(todo);
    this.todoWrapper.appendChild(oItem);
  }
  protected removeItem(target: HTMLElement, id: number) {
    const oParentNode: HTMLElement = findParentNode(target, id);
    oParentNode.remove();
  }
  protected changeCompleted(
    target: HTMLElement,
    id: number,
    completed: boolean
  ) {
    const oParentNode: HTMLElement = findParentNode(target, id);
    const oContent: HTMLElement = oParentNode.querySelector("span");
    oContent.style.textDecoration = completed ? "line-through" : "none";
  }
}
export default TodoDom;
