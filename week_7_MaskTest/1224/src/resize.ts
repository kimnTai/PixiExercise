import * as PIXI from "pixi.js-legacy";

/**PIXI 螢幕自適應 */
function resize(app: PIXI.Application): void {
  const aspectRatio = 1920 / 1080;
  const canvas = app.renderer.view;
  // 瀏覽器可視區域 size
  const viewport_w = window.innerWidth;
  const viewport_h = window.innerHeight;
  // canvas size
  const canvas_w = canvas.offsetWidth;
  const canvas_h = canvas.offsetHeight;
  // 可視區和 canvas 的比例
  const ratio_w = viewport_w / canvas_w;
  const ratio_h = viewport_h / canvas_h;
  if (ratio_h > ratio_w) {
    // 如果寬度小，則照寬度計算 canvas 尺寸
    canvas.style.width = `${viewport_w}px`;
    canvas.style.height = `${viewport_w / aspectRatio}px`;
  } else {
    // 如果高度更小，則照高度計算 canvas 尺寸
    canvas.style.height = `${viewport_h}px`;
    canvas.style.width = `${viewport_h / aspectRatio}px`;
  }
}

export default resize;
