import { _childLength } from "./main";

let _FPS = 60;

const PR = Math.round(window.devicePixelRatio || 1);
const WIDTH = 80 * PR;
const HEIGHT = 48 * PR;
const TEXT_X = 3 * PR;
const TEXT_Y = 2 * PR;
const GRAPH_X = 3 * PR;
const GRAPH_Y = 15 * PR;
const GRAPH_WIDTH = 74 * PR;
const GRAPH_HEIGHT = 30 * PR;

class Panel {
    min = Infinity;
    max = 0;
    dom = document.createElement("canvas");
    context = this.dom.getContext("2d");

    constructor(public name: string, public fg: string, public bg: string) {
        this._createCanvas(WIDTH, HEIGHT);
        this._createContext(WIDTH, HEIGHT);
    }

    _createCanvas(WIDTH: number, HEIGHT: number): void {
        this.dom.width = WIDTH;
        this.dom.height = HEIGHT;
        this.dom.style.cssText = "width:240px;height:144px";
    }

    _createContext(WIDTH: number, HEIGHT: number): void {
        if (!this.context) {
            return;
        }
        this.context.font = `bold ${9 * PR}px Helvetica,Arial,sans-serif`;
        this.context.textBaseline = "top";

        this.context.fillStyle = this.bg;
        this.context.fillRect(0, 0, WIDTH, HEIGHT);

        this.context.fillStyle = this.fg;
        this.context.fillText(this.name, TEXT_X, TEXT_Y);
        this.context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);

        this.context.fillStyle = this.bg;
        this.context.globalAlpha = 0.9;
        this.context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
    }

    update(value: number, maxValue: number): void {
        if (!this.context) {
            return;
        }
        this.min = Math.min(this.min, value);
        this.max = Math.max(this.max, value);

        this.context.fillStyle = this.bg;
        this.context.globalAlpha = 1;
        this.context.fillRect(0, 0, WIDTH, GRAPH_Y);
        this.context.fillStyle = this.fg;

        const _text = `${Math.round(value)} ${this.name} (${Math.round(this.min)}-${Math.round(this.max)})`;
        this.context.fillText(_text, TEXT_X, TEXT_Y);

        this.context.drawImage(
            this.dom,
            GRAPH_X + PR,
            GRAPH_Y,
            GRAPH_WIDTH - PR,
            GRAPH_HEIGHT,
            GRAPH_X,
            GRAPH_Y,
            GRAPH_WIDTH - PR,
            GRAPH_HEIGHT
        );

        this.context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT);

        this.context.fillStyle = this.bg;
        this.context.globalAlpha = 0.9;
        this.context.fillRect(
            GRAPH_X + GRAPH_WIDTH - PR,
            GRAPH_Y,
            PR,
            Math.round((1 - value / maxValue) * GRAPH_HEIGHT)
        );
    }
}

class Stats {
    container = document.createElement("div");
    mode = 0;
    beginTime = (performance || Date).now();
    prevTime = this.beginTime;
    frames = 0;
    fpsPanel = new Panel("FPS", "#0ff", "#002");
    msPanel = new Panel("MS", "#0f0", "#020");
    memPanel = new Panel("MB", "#f08", "#201");
    constructor() {
        this.container.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";
        this.container.addEventListener("click", (e) => {
            e.preventDefault();
            this.showPanel(++this.mode % this.container.children.length);
        });
        [this.fpsPanel, this.msPanel, this.memPanel].forEach(({ dom }) => {
            this.container.appendChild(dom);
        });

        this.showPanel(0);
    }

    showPanel(id: number) {
        Array.from(this.container.children).forEach((item, i) => {
            (<HTMLElement>item).style.display = i === id ? "block" : "none";
        });

        this.mode = id;
    }
    begin(): void {
        this.beginTime = (performance || Date).now();
    }
    end(): number {
        this.frames++;

        let time = (performance || Date).now();

        this.msPanel.update(time - this.beginTime, 200);

        if (time >= this.prevTime + 1000) {
            this.fpsPanel.update((this.frames * 1000) / (time - this.prevTime), 100);
            this.prevTime = time;
            this.frames = 0;
            const memory = window.performance.memory;
            this.memPanel.update(memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576);
        }

        return time;
    }
    animate() {
        stats.begin();
        stats.end();
        requestAnimationFrame(() => this.animate());
    }
}

const stats = new Stats();

document.body.appendChild(stats.container);
stats.animate();

export { _FPS };
