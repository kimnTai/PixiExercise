import * as PIXI from "pixi.js-legacy";

const app = new PIXI.Application({
  width: 800,
  height: 400,
  antialias: true,
  resolution: 1,
});
document.querySelector("#app")?.appendChild(app.view);

app.loader.add("../images/tileset.png").load(setup);

function setup() {
  //從紋理創建`tileset`精靈
  let texture = PIXI.utils.TextureCache["../images/tileset.png"];

  /**
   * 創建一個定義位置和的矩形對象
   * 要從紋理中提取的子圖像的大小
   * Rectangle (x,y,寬,高)
   */
  let rectangle = new PIXI.Rectangle(0, 0, 64, 64);

  /**
   * 告訴紋理使用那個矩形部分
   * texture.frame = 矩形；
   */
  texture.frame = rectangle;

  //從紋理創建精靈
  let rocket = new PIXI.Sprite(texture);

  //將火箭添加到舞台
  app.stage.addChild(rocket);
}
