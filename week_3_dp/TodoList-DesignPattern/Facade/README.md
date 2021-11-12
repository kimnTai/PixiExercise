TodoList -> Component

index.html -> 組件: TodoList + Header + Footer + Carousel

TodoList -> 子組件 TodoInput + List

index.html -> index <- TodoList

<div id="app"></div>

index 入口文件 <- TodoList
index:data,Element wrapper

TodoList -> todo-list (容器) <- input + list
todo-list (容器) -> ElementWrapper

TodoList 組件 = Input + List 組件
外觀 -> index 組件接口

TodoList 中介 -> Input + List 視圖 + 功能集中管理 -> index

子模塊主模塊 之間的依賴關係 與 入口文件入口模塊 沒有關係

組件化 -> 組件結構 -> 外觀模式

透過 components 組建內聚後提供對外接口，實現外觀模式。
