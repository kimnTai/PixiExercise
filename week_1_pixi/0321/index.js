const app = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0x08294a,
});
document.querySelector("body").appendChild(app.view);

const points = [];
for (let i = 0; i < 20; i++) {
  const index = Math.floor(Math.random() * 3);
  points.push(new PIXI.Point(i * 50, [100, 300, 500][index]));
}
const mask = new PIXI.Sprite.fromImage("./pic_mg_reelMask0.png");
const rope = new PIXI.Rope(PIXI.Texture.fromImage("./pic_main_line_1.png"), points);
rope.mask = mask;
app.stage.addChild(rope, mask);

const a = 1;
