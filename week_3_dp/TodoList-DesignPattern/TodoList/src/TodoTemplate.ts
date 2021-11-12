import { ITodoData } from "./typings";

class TodoTemplate {
  protected todoView({ id, content, completed }: ITodoData): string {
    return `
    <input class="me-5" type="checkbox" ${ completed ? "checked" : ""} data-id="${id}"/>
    <span class="h5" style="text-decoration: ${completed ? "line-through" : "none"};">${content}</span>
    <button class="btn btn-danger ms-auto" data-id="${id}">刪除</button>
    `;
  }
}

export default TodoTemplate;
