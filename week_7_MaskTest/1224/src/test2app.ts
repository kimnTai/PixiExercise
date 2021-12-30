import * as PIXI from "pixi.js-legacy";
(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
  (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x000000,
});

document.body.appendChild(app.view);

app.loader.add("mask", "../img/mask.png").load(startup);

function startup() {
  const sprite = new PIXI.Sprite(app.loader.resources.mask.texture);
  const container: any = new PIXI.Container();

  container.x = 32;
  container.y = 32;

  container.addChild(
    new PIXI.Graphics()
      .beginFill(0x00ff00, 1.0)
      .drawRoundedRect(0, 0, sprite.width, sprite.height, 32)
      .endFill()
  );
  container.graphics = container.addChild(
    new PIXI.Graphics()
      .beginFill(0xff0000, 1.0)
      .drawRoundedRect(0, 0, sprite.width, sprite.height, 32)
      .endFill()
  );
  container.addChild(sprite);

  container.graphics.mask = new PIXI.MaskData(sprite);
  container.graphics.mask.filter = new PIXI.SpriteMaskFilter(
    undefined,
    `\
      varying vec2 vMaskCoord;
      varying vec2 vTextureCoord;

      uniform sampler2D uSampler;
      uniform sampler2D mask;
      uniform float alpha;
      uniform float npmAlpha;
      uniform vec4 maskClamp;

      uniform vec4 weight;

      void main(void)
      {
          float clip = step(3.5,
              step(maskClamp.x, vMaskCoord.x) +
              step(maskClamp.y, vMaskCoord.y) +
              step(vMaskCoord.x, maskClamp.z) +
              step(vMaskCoord.y, maskClamp.w));

          vec4 original = texture2D(uSampler, vTextureCoord);
          vec4 masky = texture2D(mask, vMaskCoord);
          float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

          original *= (alphaMul * dot(masky, weight) * alpha * clip);

          gl_FragColor = original;
      }`
  );
  container.graphics.mask.filter.uniforms.weight = new Float32Array([
    1, 0, 0, 0,
  ]);

  app.stage.addChild(container);

  let elapsed = 0;

  app.ticker.add((delta) => {
    elapsed += delta * 0.001;
    elapsed %= 1;

    const s = elapsed * 3;
    const w = container.graphics.mask.filter.uniforms.weight;

    if (0 <= s && s < 1) {
      w[0] = 1 - s;
      w[1] = s;
      w[2] = 0;
    } else if (1 <= s && s < 2) {
      w[0] = 0;
      w[1] = 2 - s;
      w[2] = s - 1;
    } else if (2 <= s && s < 3) {
      w[0] = s - 2;
      w[1] = 0;
      w[2] = 3 - s;
    }
  });
}
