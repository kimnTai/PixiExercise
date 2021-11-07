import { ITodoData } from "../../types";

abstract class Component {
  protected static inputView(
    placeholderText: string,
    buttonText: string
  ): string {
    return `
    <div>
      <input type="text" class="todo-input" placeholder="${placeholderText}" />
      <button class="add-btn">${buttonText}</button>
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
   <div>
      <input type="checkbox" data-id="${id}" ${completed ? "checked" : ""} />
<span style="text-decoration:${
      completed ? "line-through" : ""
    }">${content}</span>
      <button data-id="${id}">刪除</button>
   </div>
    `;
  }
}
export default Component;
