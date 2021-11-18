import * as PIXI from "pixi.js-legacy";
(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

let app = new PIXI.Application({
  width: 512,
  height: 512,
  resolution: 1,
});

document.querySelector("#app")?.appendChild(app.view);

//加載一個 JSON 文件並在完成後運行 `setup` 函數
app.loader.add("treasureHunter", "images/treasureHunter.json").load(setup);

//定義可能在更多領域中使用的變量
let dungeon, explorer, treasure, door;

function setup() {
  dungeon = PIXI.Sprite.from("dungeon.png");
  app.stage.addChild(dungeon);

  explorer = PIXI.Sprite.from("explorer.png");
  explorer.x = 68;

  //垂直居中瀏覽器
  explorer.y = app.stage.height / 2 - explorer.height / 2;
  app.stage.addChild(explorer);

  //使用別名製作寶箱
  treasure = PIXI.Sprite.from("treasure.png");
  app.stage.addChild(treasure);

  //將寶藏放在畫布右邊緣旁邊
  treasure.x = app.stage.width - treasure.width - 48;
  treasure.y = app.stage.height / 2 - treasure.height / 2;
  app.stage.addChild(treasure);

  //製作出口門
  door = PIXI.Sprite.from("door.png");
  door.position.set(32, 0);
  app.stage.addChild(door);

  //製作斑點
  let numberOfBlobs = 6,
    spacing = 48,
    xOffset = 150;

  for (let i = 0; i < numberOfBlobs; i++) {
    let blob = PIXI.Sprite.from("blob.png");

    //根據`spacing`值水平間隔每個blob。
    //`xOffset` 確定從屏幕左側開始的點
    // 應該添加第一個 blob。
    let x = spacing * i + xOffset;

    //Give the blob a random y position
    //(`randomInt` is a custom function - see below)
    let y = randomInt(0, app.stage.height - blob.height);

    //設置blob的位置
    blob.x = x;
    blob.y = y;

    app.stage.addChild(blob);
  }
}

// `randomInt` 輔助函數
function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
