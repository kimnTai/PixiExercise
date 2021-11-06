import { ITodoData } from "../types";

class TodoList {
  constructor(private element: HTMLElement, private todoData: ITodoData[]) {
    this.element = element;
    this.todoData = todoData;
  }

  public init() {
    this.createComponents();
    this.render();
    this.bindEvent();
  }
  private createComponents() {
    console.log("createComponents");
  }
  private render() {
    console.log("render");
  }
  private bindEvent() {
    console.log("bindEvent");
  }
}
export default TodoList;
