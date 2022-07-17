import * as PIXI from "pixi.js";

export default class Dragger extends PIXI.Graphics {
    dragging = false;
    status = {
        start: 0,
        right: 0,
        left: 0,
    };

    constructor() {
        super();
        this.beginFill(0xffffff, 0);
        this.drawCircle(0, 0, 2000);
        this.endFill();
        this.position.set(600, 300);
        this.interactive = this.buttonMode = true;

        this.on("pointerdown", this.onDragStart);
        this.on("pointerup", this.onDragEnd);
        this.on("pointerupoutside", this.onDragEnd);
        this.on("pointermove", this.onDragMove);
    }

    onDragStart(e: PIXI.interaction.InteractionEvent): void {
        this.status = { start: 0, right: 0, left: 0 };
        this.dragging = true;
        this.status.start = e.data.getLocalPosition(this.parent).x;
    }

    onDragEnd(): void {
        this.dragging = false;
        console.log(this.status);
    }

    onDragMove(e: PIXI.interaction.InteractionEvent): void {
        if (!this.dragging) return;
        const move = e.data.getLocalPosition(this.parent).x - this.status.start;
        if (move > 0 && move > this.status.right) {
            this.status.right = move;
        }
        if (move < 0 && move < this.status.left) {
            this.status.left = move;
        }
    }
}
