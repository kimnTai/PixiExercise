### 數據操作

1.  todoData[ ]
2.  方法 -> 操作資料
    - 增加資料 -> addTodo(todo) { id,content,completed }
    - 刪除資料 -> removeTodo(id) -> todoData -> {id}
    - 改變狀態 -> changeCompleted(id) -> todoData -> {id} -> completed

### DOM 操作

1. 方法 -> 操作 DOM
   - 增加項 -> ( todo 模板 -> todo ) 形成 todoItem -> oTodoList
   - 刪除項 -> id -> todoItem {id} -> item -> remove
   - 改變狀態 -> id -> todoItems {id} -> item -> content -> 加上刪除線

### 設計方式

- DOM 操作 -> 數據操作 -> app.ts -> 執行資料操作方法 -> 實現功能
- @裝飾器 -> DOM 操作 -> app.ts -> 執行 DOM 操作方法 -> 實現功能
