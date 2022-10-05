let activeEffect = undefined as any;
class ReactiveEffect {
    parent = null;
    active = true;
    constructor(public fn: any) {}
    run() {
        if (!this.active) {
            this.fn();
        }
        try {
            this.parent = activeEffect;
            activeEffect = this;
            return this.fn();
        } finally {
            activeEffect = this.parent;
        }
    }
}

export function effect(fn) {
    const _effect = new ReactiveEffect(fn);
    _effect.run();
}
