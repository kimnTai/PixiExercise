import { ITodoData } from "../../types";
import Component from "./Components";

export interface IListOptions {
  wrapperEl: HTMLElement;
  todoData: ITodoData[];
}

class List extends Component {
  private wrapperEl: HTMLElement;
  private static todoData: ITodoData[];

  constructor(options: IListOptions) {
    super();
    this.wrapperEl = options.wrapperEl;
    List.todoData = options.todoData;
  }

  public render() {
    this.wrapperEl.innerHTML += Component.listView(List.todoData);
  }

  public static addItem(val: string) {
    const _item: ITodoData = {
      id: new Date().getTime(),
      content: val,
      completed: false,
    };
    List.todoData.push(_item);
    document.querySelector(".todo-list").innerHTML += Component.todoView(_item);
  }
}
export default List;
