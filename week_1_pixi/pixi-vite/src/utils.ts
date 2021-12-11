// 基本的 lerp 功能。
function lerp(a1, a2, t) {
  return a1 * (1 - t) + a2 * t;
}
function backOut(amount) {
  return (t) => --t * t * ((amount + 1) * t + amount) + 1;
}

const tweening = [];
function tweenTo(object, property, target, time, easing, onchange, oncomplete) {
  const tween = {
    object,
    property, // 財產
    propertyBeginValue: object[property], // 屬性起始值
    target, // 目標
    easing,
    time,
    change: onchange,
    complete: oncomplete,
    start: Date.now(),
  };

  tweening.push(tween);
  return tween;
}
