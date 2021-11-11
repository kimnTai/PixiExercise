import { ITodo } from "./type";

let todoData: ITodo[] = [];

export function addTodo(
  target: any, // 當前裝飾的函數容器 -> TodoList.prototype
  methodName: string, // 被裝飾的函數名稱
  descriptor: PropertyDescriptor // 描述我們的屬性
): void {
  const _origin = descriptor.value;
  descriptor.value = function (todo: ITodo) {
    const _todo: ITodo | null = todoData.find((item: ITodo) => {
      return item.content === todo.content;
    });
    if (_todo) {
      alert("該項已存在");
      return;
    }
    todoData.push(todo);
    // 這步不太懂
    _origin.call(this, todo);
  };
}

export function removeTodo(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const _origin = descriptor.value;
  descriptor.value = function (id: number) {
    todoData = todoData.filter((todo: ITodo) => {
      return todo.id !== id;
    });
    _origin.call(this, id);
  };
}

export function changeCompleted(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const _origin = descriptor.value;
  descriptor.value = function (id: number) {
    todoData = todoData.map((todo: ITodo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        _origin.call(this, id, todo.completed);
      }
      return todo;
    });
  };
}
