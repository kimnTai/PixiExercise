# 傳統寫法

|              | 綁定數件處理函數                     | 數據                                      |
| ------------ | ------------------------------------ | ----------------------------------------- |
| 增加項       | 每一項的視 → 列表                    | 增加一項 { id, time, content, completed } |
| 刪除項       | 將對應的視圖 → 列表 -\> 刪除         | 列表數據 -\> id removeItem                |
| 改變完成狀態 | 將對應項的完成狀態 → 是否完成 toggle | 列表數據 -\> id change completed          |

- 程序進行分類
    - 外層：瀏覽器的事件 -> 調用方法 -> 事件處理函數綁定
    - 操作數據：addTodo、removeTodo、toggleComplete
    - 操作數據：addItem、removeItem、changeCompleted
    - 管理模板:todoView -> 接收參數