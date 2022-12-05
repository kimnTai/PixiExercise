import * as PIXI from "pixi.js";
import "pixi-spine";
import "./stats";
import { _FPS } from "./stats";

let _childLength = 0;

const app = new PIXI.Application({ backgroundColor: 0x1099bb, width: 1600, height: 900 });

document.body.appendChild(app.view);

app.loader
    .add("mesh", "../demo/webp/1_mesh.json")
    .add("mesh_add", "../demo/webp/2_mesh_add.json")
    .add("mesh_IK", "../demo/webp/3_mesh_IK.json")
    .add("Sequence_Diagram", "../demo/webp/4_Sequence_Diagram.json")
    .add("Sequence_Diagram_add", "../demo/webp/5_Sequence_Diagram_add.json")
    .add("jump", "../demo/webp/6_jump.json")
    .add("hit", "../demo/webp/7_hit.json")
    .load(setup);

async function setup(loader: PIXI.loaders.Loader) {
    const list = ["mesh", "mesh_add", "mesh_IK", "Sequence_Diagram", "Sequence_Diagram_add", "jump", "hit"];
    const arr = list.map((key) => loader.resources[key].spineData);
    const data = arr[0];
    const fn = () => {
        const spine = app.stage.addChild(new PIXI.spine.Spine(data));
        const [x, y] = [app.view.width, app.view.height].map((v) => v * Math.random());
        spine.position.set(x, y);
        spine.state.setAnimation(0, "ani", true);
    };
    // Array.from({ length: 700 }, () => {
    //     fn();
    // });
    // let test = 0;
    // const timer = setInterval(() => {
    //     fn();
    //     _childLength = app.stage.children.length;
    //     console.log(_FPS, app.stage.children.length);
    //     if (_FPS < 50) {
    //         test++;
    //     }
    //     if (test > 3) {
    //         clearInterval(timer);
    //     }
    // }, 500);
}

export { _childLength };
