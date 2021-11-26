/**
 * 機率裝飾器
 * @param num 機率 ex 0.1、0.2
 */
function probability(num: number) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originMethod = descriptor.value;
    descriptor.value = function () {
      if (Math.random() >= num) {
        return;
      }
      originMethod();
    };
  };
}

export { probability };
