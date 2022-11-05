import * as PIXI from "pixi.js";

export default class Container extends PIXI.Container {
    onChildrenChange = (...args: any[]) => {
        super.onChildrenChange(args);
    };

    updateTransform() {
        this._boundsID++;

        this.transform.updateTransform(this.parent.transform);

        this.worldAlpha = this.alpha * this.parent.worldAlpha;

        for (let i = 0, j = this.children.length; i < j; ++i) {
            const child = this.children[i];
            if (child.visible) {
                child.updateTransform();
            }
        }
    }
}
