//防抖
function throttle(callback, limit) {
    let wait = false;
    // DO NOT change to arrow function, otherwise 'this' can not be reset
    function wrapper(...args) {
        if (!wait) {
            callback.apply(this, args);
            wait = true;
            setTimeout(() => (wait = false), limit);
        }
    }
    return wrapper;
}

const t = throttle(() => {
    console.log(123);
}, 100);
t();
setTimeout(()=>{
    t()
},200)
t()