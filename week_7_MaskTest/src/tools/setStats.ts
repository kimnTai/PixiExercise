import * as PIXI from "pixi.js-legacy";
import { addStats, Stats } from "pixi-stats";
import { UPDATE_PRIORITY } from "pixi.js-legacy";

export function setStats(app: PIXI.Application) {
  const stats = addStats(document, app);
  const ticker: PIXI.Ticker = PIXI.Ticker.shared;
  ticker.add(stats.update, stats, UPDATE_PRIORITY.UTILITY);
}
