import { ITodoData } from "../../types";

abstract class Component {
  protected static inputView(
    placeholderText: string,
    buttonText: string
  ): string {
    return `
      <div class="input-group mb-3">
          <span class="input-group-text">待辦事項</span>
          <input class="todo-input" type="text" placeholder="${placeholderText}" >
          <button class="btn btn-primary add-btn" type="button">${buttonText}</button>
      </div>
    `;
  }
  protected static listView(data: ITodoData[]): string {
    return `
      <div class="todo-list">
   ${
     data.length
       ? data.map((todo: ITodoData) => {
           return Component.todoView(todo);
         })
       : "當前沒有數據"
   }
      </div>
    `
      .split(",")
      .join("");
  }

  protected static todoView(todo: ITodoData): string {
    const { id, content, completed } = todo;
    return `
   <div class="border d-flex justify-content-between align-items-center todo-item" style="width: 22rem;">
      <input class="me-5" type="checkbox" data-id="${id}" ${
      completed ? "checked" : ""
    } />
<span class="h5" style="text-decoration:${
      completed ? "line-through" : ""
    }">${content}</span>
      <button class="btn btn-danger ms-auto" data-id="${id}">刪除</button>
   </div>
    `;
  }
}
export default Component;
