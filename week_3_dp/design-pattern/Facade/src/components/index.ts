import { IInputOptions, IListOptions, ITodoData } from "./sub/type";
import Input from "./sub/input";
import List from "./sub/List";

class TodoList {
  private input: Input;
  private list: List;
  private todoWrapper: HTMLElement;
  constructor(private element: HTMLElement, private todoData: ITodoData[]) {
    this.element = element;
    this.todoData = todoData;
    this.todoWrapper = document.createElement("div");
  }
  // 創造組件
  private createComponents(): void {
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
  // 畫面渲染
  private render(): void {
    this.input.render();
    this.list.render();
    this.element.appendChild(this.todoWrapper);
  }
  // 事件綁定
  private bindEvent(): void {
    this.input.bindEvent();
    this.list.bindEvent();
  }
  // 外觀模式接口
  public init(): void {
    this.createComponents();
    this.render();
    this.bindEvent();
  }
}
export default TodoList;
