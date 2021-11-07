import { ITodoData } from "../types";
import Input, { IInputOptions } from "./sub/input";
import List, { IListOptions } from "./sub/List";

class TodoList {
  private input!: Input;
  private list!: List;
  private todoWrapper: HTMLElement;
  constructor(private element: HTMLElement, private todoData: ITodoData[]) {
    this.element = element;
    this.todoData = todoData;
    this.todoWrapper = document.createElement("div");
  }

  public init() {
    this.createComponents();
    this.render();
    this.bindEvent();
  }
  private createComponents() {
    const inputObj: IInputOptions = {
      wrapperEl: this.todoWrapper,
      placeholderText: "請輸入",
      buttonText: "增加",
    };
    const listObj: IListOptions = {
      wrapperEl: this.todoWrapper,
      todoData: this.todoData,
    };
    this.input = new Input(inputObj);
    this.list = new List(listObj);
  }
  private render() {
    this.input.render();
    this.list.render();
    this.element.appendChild(this.todoWrapper);
  }
  private bindEvent() {
    this.input.bindEvent();
  }
}
export default TodoList;
