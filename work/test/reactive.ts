import { mutableHandlers, ReactiveFlags } from "./mutableHandlers";

const reactiveMap = new WeakMap();

export function reactive(obj: any): any {
    if (obj[ReactiveFlags.IS_REACTIVE]) {
        return obj;
    }
    if (reactiveMap.get(obj)) {
        return reactiveMap.get(obj);
    }
    const proxy = new Proxy(obj, mutableHandlers);
    reactiveMap.set(obj, proxy);
    return proxy;
}
