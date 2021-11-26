### 需求：

- 使用裝飾者模式對技能 or 職業進行裝飾
  - 導入 傷害( damageInfo )、防禦( defenseInfo )、結果 ( resultShow )
  - 先計算傷害 -> 扣除防禦 -> 進行攻擊，最後將結果交給 result
  - 演出效果透過 result 獲取即可

### 問題

- 裝飾者需要對原有的功能做 裝飾 加強，無法對未定義的方法做裝飾？
- 攻擊寫法：把攻擊資訊丟進去，攻擊者將攻擊值 push 到 資訊的傷害陣列內
  - 混亂打自己卡死，不知道怎麼攻擊自己
- 反擊、與閃避的邏輯會寫在 ShowResult 內，感覺怪怪的
```
case State.COUNTERATTACK:
          this.damInfo.damage.shift();
          console.log(`${this.attacker.race.hero.name[0]}: ${item}`);
          break;
case State.DODGE:
          this.damInfo.damage = [];
          console.log(`${this.attacker.race.hero.name[0]}: ${item}`);
          break;
```
- HP、name 等資訊藏很深( 職業( 種族( 玩家資訊 ) ) )，常常找不到，感覺寫反了 -> 玩家(職業(種族))