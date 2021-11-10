import { todoView } from "./template";
import { addTodo, changeCompleted, removeTodo } from "./todoEvent";

export interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

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
    Array.from(oItems).forEach((oItem) => {
      const _id = parseInt(oItem.querySelector("button").dataset.id);
      if (_id === id) {
        oItem.remove();
      }
    });
  }
  @changeCompleted
  public toggleCompleted(id: number, completed?: boolean): void {
    const oItems: HTMLCollection = document.getElementsByClassName("todo-item");
    Array.from(oItems).forEach((oItem) => {
      const _id = parseInt(oItem.querySelector("input").dataset.id);
      if (_id === id) {
        const oContent: HTMLElement = oItem.querySelector("span");
        oContent.style.textDecoration = completed ? "line-through" : "none";
      }
    });
  }

  private constructor(oTodoList: HTMLElement) {
    this.oTodoList = oTodoList;
  }
  // 創建方法 實現單例
  public static create(oTodoList: HTMLElement) {
    if (!TodoList.instance) {
      TodoList.instance = new TodoList(oTodoList);
    }
    return TodoList.instance;
  }
}

export default TodoList;

interface Strategy {
  do(todo?: ITodo, id?: number, completed?: boolean): void;
}

export class toAddTodo implements Strategy {
  private oTodoList: HTMLElement;

  @addTodo
  do(todo: ITodo): void {
    const oItem: HTMLElement = document.createElement("div");
    oItem.className =
      "todo-item border d-flex justify-content-between align-items-center";
    oItem.innerHTML = todoView(todo);
    this.oTodoList.appendChild(oItem);
  }
  constructor(oTodoList: HTMLElement) {
    this.oTodoList = oTodoList;
  }
}

export class toRemoveItem implements Strategy {
  @removeTodo
  do(todo?: ITodo, id?: number): void {
    const oItems: HTMLCollection = document.getElementsByClassName("todo-item");
    Array.from(oItems).forEach((oItem) => {
      const _id = parseInt(oItem.querySelector("button").dataset.id);

      if (_id === id) {
        oItem.remove();
      }
    });
  }
}
