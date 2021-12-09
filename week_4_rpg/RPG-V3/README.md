### 使用 Promise 新增特效
- 加入火球、暈眩

![](https://i.imgur.com/CXPoNGg.gif)
- 加入格檔

![](https://i.imgur.com/G69t1j4.gif)
- 加入連擊、閃避

![](https://i.imgur.com/cokJkTn.gif)

### 需求：
- 使用裝飾者模式對技能 or 職業進行裝飾
  - 導入 傷害( damageInfo )、防禦( defenseInfo )、結果 ( resultShow )
  - 先計算傷害 -> 扣除防禦 -> 進行攻擊，最後將結果交給 result 
  - 演出效果透過 result 獲取即可

### UML：
 ![](https://i.imgur.com/Dk9tUky.png)
- 裝飾者模式:
- 抽象構建角色 - Player
- 具體構建角色 - Hero
- 裝飾者類(抽象裝飾者角色) - BaseDecorator (profession、race)
- 具體裝飾者角色 - Human、Dwarf、Knight、Thieves ...
- 優點：依賴性降低
- 缺點：缺乏靈活性，只能裝飾單一方法？