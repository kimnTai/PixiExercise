import { IListOptions, ITodoData } from "./type";
import Component from "./Components";

class List extends Component {
  private wrapperEl: HTMLElement;
  private static todoData: ITodoData[];

  private _handleCheckBoxClick(id: number, oTodoItems: HTMLCollection): void {
    List.todoData = List.todoData.map((todo: ITodoData, index: number) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        oTodoItems[index].querySelector("span").style.textDecoration =
          todo.completed ? "line-through" : "";
      }
      return todo;
    });
  }
  private _handleButtonClick(id: number, oTodoItems: HTMLCollection): void {
    List.todoData = List.todoData.filter((todo: ITodoData, index: number) => {
      if (todo.id !== id) {
        return todo;
      } else {
        oTodoItems[index].remove();
        return null;
      }
    });
  }

  private handleListClick(e: MouseEvent): void {
    const tar = e.target as HTMLElement;
    const tagName = tar.tagName.toLowerCase();
    const oTodoItems: HTMLCollection =
      document.getElementsByClassName("todo-item");

    if (tagName === "input" || tagName === "button") {
      const id: number = parseInt(tar.dataset.id);
      switch (tagName) {
        case "input":
          this._handleCheckBoxClick(id, oTodoItems);
          break;
        case "button":
          this._handleButtonClick(id, oTodoItems);
          break;
        default:
          break;
      }
    }
  }

  public render(): void {
    this.wrapperEl.innerHTML += Component.listView(List.todoData);
  }

  public bindEvent(): void {
    const oTodoList: HTMLElement = document.querySelector(".todo-list");
    oTodoList.addEventListener("click", this.handleListClick.bind(this), false);
  }
  public static addItem(val: string): void {
    const oTodoList: HTMLElement = document.querySelector(".todo-list");
    const _item: ITodoData = {
      id: new Date().getTime(),
      content: val,
      completed: false,
    };
    List.todoData.push(_item);
    if (List.todoData.length === 1) {
      oTodoList.innerHTML = "";
    }
    oTodoList.innerHTML += Component.todoView(_item);
  }
  constructor(options: IListOptions) {
    super();
    this.wrapperEl = options.wrapperEl;
    List.todoData = options.todoData;
  }
}
export default List;
