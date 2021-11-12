import TodoDom from "./TodoDom";
import { ITodoData } from "./typings";

class TodoEvent extends TodoDom {
  private todoData: ITodoData[];
  constructor(todoData: ITodoData[], todoWrapper: HTMLElement) {
    super(todoWrapper);
    this.todoData = todoData;
    this.init();
  }
  private init(): void {
    this.initList(this.todoData);
  }
  public addTodo(todo: ITodoData) {
    const _todo = this.todoData.find((item: ITodoData) => {
      return item.content === todo.content;
    });
    if (!_todo) {
      this.todoData.push(todo);
      this.addItem(todo);
      return;
    }
    return 1001;
  }
  public removeTodo(target: HTMLElement, id: number): void {
    this.todoData = this.todoData.filter((todo) => {
      return todo.id !== id;
    });
    this.removeItem(target, id);
  }
  public toggleComplete(target: HTMLElement, id: number): void {
    this.todoData = this.todoData.map((todo: ITodoData) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        this.changeCompleted(target, id, todo.completed);
      }
      return todo;
    });
  }
}

export default TodoEvent;
