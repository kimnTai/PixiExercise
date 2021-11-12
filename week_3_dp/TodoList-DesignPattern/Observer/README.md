DOM 操作 數據操作 事件出來函數的綁定

DOM 數據操作 之間沒有任何關係

TodoList

add -> addTodo addItem

function addTodo(){
操作數據
addItem
}

addTodo -> todo -> addItem(todo) -> 操作 DOM

function test (todo){
Promise -> addTodo(todo); resolve(todo) then todo ->
addItem(todo);
}

add addTodo addItem
remove removeTodo removeItem
toggle toggleTodo toggleItem

[addTodo,addItem]
[removeTodo,removeItem]
[toggleTodo,toggleItem]

Promise.then
