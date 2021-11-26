import { Hero } from "./hero";
import { Knight } from "./profession";

const hero = new Hero("a");
const king = new Knight(hero);

king.action();
