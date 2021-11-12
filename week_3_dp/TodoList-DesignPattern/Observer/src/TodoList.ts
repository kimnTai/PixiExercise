import TodoEvent from "./TodoEvent";
import TodoDom from "./TodoDom";
import { EVENT_TYPE } from "./type";

class TodoList {
  private static instance: TodoList;
  private todoEvent: TodoEvent;
  private todoDom: TodoDom;
  private addHandlers: any[] = []; // [addTodo,addItem]
  private removeHandlers: any[] = []; // [removeTodo,removeItem]
  private toggleHandlers: any[] = []; // [toggleTodo,toggleItem]

  private constructor(private oTodoList: HTMLElement) {
    this.initTodo();
    console.log(this.addHandlers);
  }
  // 創建單例
  public static create(oTodoList: HTMLElement): TodoList {
    if (!TodoList.instance) {
      TodoList.instance = new TodoList(oTodoList);
    }
    return TodoList.instance;
  }
  private initTodo(): void {
    this.todoEvent = TodoEvent.create();
    this.todoDom = TodoDom.create(this.oTodoList);
    for (let i in EVENT_TYPE) {
      // initHandlers(add)、initHandlers(remove)、initHandlers(toggle) 都執行一次
      this.initHandlers(EVENT_TYPE[i as keyof typeof EVENT_TYPE]);
    }
  }
  private initHandlers(type: EVENT_TYPE): void {
    switch (type) {
      case EVENT_TYPE.ADD:
        this.addHandlers.push(this.todoEvent.addTodo.bind(this.todoEvent));
        this.addHandlers.push(this.todoDom.addItem.bind(this.todoDom));
        break;
      case EVENT_TYPE.REMOVE:
        this.removeHandlers.push(
          this.todoEvent.removeTodo.bind(this.todoEvent)
        );
        this.removeHandlers.push(this.todoDom.removeItem.bind(this.todoDom));
        break;
      case EVENT_TYPE.TOGGLE:
        this.toggleHandlers.push(
          this.todoEvent.toggleTodo.bind(this.todoEvent)
        );
        this.toggleHandlers.push(this.todoDom.toggleItem.bind(this.todoDom));
        break;
      default:
        break;
    }
  }

  public notify<T>(type: string, param: T): void {
    let i: number = 0;
    let handlers: any[];
    let res: any;
    switch (type) {
      case EVENT_TYPE.ADD:
        handlers = this.addHandlers;
        break;
      case EVENT_TYPE.REMOVE:
        handlers = this.removeHandlers;
        break;
      case EVENT_TYPE.TOGGLE:
        handlers = this.toggleHandlers;
        break;
      default:
        break;
    }
    res = handlers[i](param);
    while (i < handlers.length - 1) {
      i++;
      res = res.then((param: any) => {
        return handlers[i](param);
      });
    }
  }
}

export default TodoList;
