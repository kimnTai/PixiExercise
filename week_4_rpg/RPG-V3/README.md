### 需求：
- 使用裝飾者模式對技能 or 職業進行裝飾
  - 導入 傷害( damageInfo )、防禦( defenseInfo )、結果 ( resultShow )
  - 先計算傷害 -> 扣除防禦 -> 進行攻擊，最後將結果交給 result 
  - 演出效果透過 result 獲取即可

### 初版 Demo：
- ![](https://i.imgur.com/wkvpFK3.gif)