## 消除類遊戲
- 玩法採用神魔之塔
- 版面 6 x 5，6 種符石隨機產生(消除率低改為４種)

## 初版 DEMO
![](https://i.imgur.com/yfbfFJ0.gif)

## 檢索
- 採用最簡單的
   - 每單位往右、再往右，名字相等 => 消除
   - 每單位往下、再往下，名字相等 => 消除
   - 遍歷所有符石
## 排列 ＆ 移動
- 因應消除後 ＆ 移動後排序問題，改為二維陣列，並且由下而上排列

![](https://i.imgur.com/J4wcdQo.png)

## COMBO 逐步消除
- 需要將消除符石陣列依照 ID 分組(檢索時給予 ID )
- 找了一個工具 function 做分組陣列操作
```
/**陣列分組工具 */
let sorted = groupBy(showArray, (item: Runes) => {
      return [item.removeGroundId];
});

function groupBy(array: any[], func: any): any[] {
  let groups: any = {};
  array.forEach((item) => {
    let group = JSON.stringify(func(item));
    groups[group] = groups[group] || [];
    groups[group].push(item);
  });
  return Object.keys(groups).map((group) => {
    return groups[group];
  });
}
```