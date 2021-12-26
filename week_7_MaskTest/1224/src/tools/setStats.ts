import * as PIXI from "pixi.js-legacy";
import { addStats } from "pixi-stats";

export function setStats(app: PIXI.Application) {
  const stats = addStats(document, app);
  const ticker: PIXI.Ticker = PIXI.Ticker.shared;
  ticker.add(stats.update, stats);
}
