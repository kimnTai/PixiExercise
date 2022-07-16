import * as PIXI from "pixi.js";
import App from "./app";

(window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
    (window as any).__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

function shake() {
    const maxRange = 60; //當用戶的兩次加速度差值大於這個幅度，判定用戶進行了搖一搖功能
    let lastX = 0;
    let lastY = 0;
    let lastZ = 0;
    const handle = (e: DeviceMotionEvent) => {
        const { x, y, z } = e.acceleration;
        const range = Math.abs(x - lastX) + Math.abs(y - lastY) + Math.abs(z - lastZ);
        if (range > maxRange) {
            //用戶進行了搖一搖
            alert("您進行了搖一搖");
            window.removeEventListener("devicemotion", handle);
        }
        lastX = x;
        lastY = y;
        lastZ = z;
    };
    window.addEventListener("devicemotion", handle);
}

shake();
