import { ITodo } from "./type";

class TodoDom {
  private static instance: TodoDom;
  private constructor(private oTodoList: HTMLElement) {}
  // 創建單例
  public static create(oTodoList: HTMLElement): TodoDom {
    if (!TodoDom.instance) {
      TodoDom.instance = new TodoDom(oTodoList);
    }
    return TodoDom.instance;
  }

  public addItem(todo: ITodo): Promise<void> {
    return new Promise((resolve, reject) => {
      const oItem: HTMLElement = document.createElement("div");
      oItem.className =
        "todo-item border d-flex justify-content-between align-items-center";
      oItem.innerHTML = this.todoView(todo);
      this.oTodoList.appendChild(oItem);
      resolve();
    });
  }
  public removeItem(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const oItem: HTMLCollection =
        document.getElementsByClassName("todo-item");
      Array.from(oItem).forEach((oItem) => {
        const _id = parseInt(oItem.querySelector("button").dataset.id);
        if (_id === id) {
          oItem.remove();
          resolve();
        }
      });
    });
  }
  public toggleItem(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const oItem: HTMLCollection =
        document.getElementsByClassName("todo-item");
      Array.from(oItem).forEach((oItem) => {
        const oCheckBox: HTMLInputElement = oItem.querySelector("input");
        const _id = parseInt(oItem.querySelector("button").dataset.id);
        if (_id === id) {
          const oContent: HTMLElement = oItem.querySelector("span");
          oContent.style.textDecoration = oCheckBox.checked
            ? "line-through"
            : "none";
          resolve();
        }
      });
    });
  }
  private todoView({ id, content, completed }: ITodo): string {
    return `
   <input class="me-5" type="checkbox" ${
     completed ? "checked" : ""
   } data-id="${id}">
   <span class="h5" style="text-decoration: ${
     completed ? "line-through" : "none"
   };">${content}</span>
   <button class="btn btn-danger ms-auto" data-id="${id}">刪除</button>
   `;
  }
}
export default TodoDom;
