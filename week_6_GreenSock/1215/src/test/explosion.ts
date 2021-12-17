import * as PIXI from "pixi.js-legacy";

function explosion(app: PIXI.Application): void {
  app.loader.add("spritesheet", "../img/mc.json").load(() => {
    const explosionTextures = [];
    for (let i = 0; i < 26; i++) {
      const texture = PIXI.Texture.from(`Explosion_Sequence_A ${i + 1}.png`);
      explosionTextures.push(texture);
    }

    const explosion = new PIXI.AnimatedSprite(explosionTextures);
    explosion.position.set(100);

    explosion.gotoAndPlay(0);
    explosion.gotoAndStop(14);
    app.stage.addChild(explosion);
  });
}
