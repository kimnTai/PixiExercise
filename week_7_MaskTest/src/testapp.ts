import * as PIXI from "pixi.js-legacy";

// Create our application instance
var app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x2c3e50,
});
document.body.appendChild(app.view);

// Load the bunny texture
app.loader
  .add("bunny", "https://pixijs.io/examples/examples/assets/bunny.png")
  .load(startup);

function startup() {
  var bunny = new PIXI.Sprite(app.loader.resources.bunny.texture);
  var mask = new PIXI.Graphics();
  var maskDisplay = new PIXI.Graphics();

  window["bun"] = bunny;
  window["app"] = app;

  // Center the sprite's anchor point
  bunny.anchor.set(0.5);

  // Move the sprite to the center of the screen
  bunny.x = app.renderer.width / 2;
  bunny.y = app.renderer.height / 2;
  bunny.scale.set(15);

  // Enable mask
  bunny.mask = mask;

  // Add objects to stage
  app.stage.addChild(bunny);
  app.stage.addChild(mask);
  app.stage.addChild(maskDisplay);

  // Enable scissor masks
  mask.enableScissor = true;

  maskDisplay.clear();
  maskDisplay.lineStyle(2, 0xff0000);
  maskDisplay.drawRect(0, 0, 50, 50);

  // Listen for animate update
  app.ticker.add(function (delta) {
    var width =
      100 +
      (Math.sin(Date.now() * 0.001) * 0.5 + 0.5) * (window.innerWidth - 100);
    var height =
      100 +
      (Math.sin(Date.now() * 0.0013) * 0.5 + 0.5) * (window.innerHeight - 100);
    var rect = new PIXI.Rectangle(
      window.innerWidth / 2 - width / 2,
      window.innerHeight / 2 - height / 2,
      width,
      height
    );

    mask.clear();
    mask.beginFill();
    mask.drawRect(rect.x, rect.y, rect.width, rect.height);
    mask.endFill();

    maskDisplay.clear();
    maskDisplay.lineStyle(2, 0xff0000);
    maskDisplay.drawRect(rect.x, rect.y, rect.width, rect.height);

    // Rotate mr rabbit clockwise
    bunny.rotation += 0.1 * delta;
  });
}
