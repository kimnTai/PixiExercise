import { Info } from "../info";

/**
 * 機率裝飾器
 * @param num 機率 ex 0.1、0.2
 */
function probability(num: number) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const _origin = descriptor.value;
    descriptor.value = function (myInfo?: Info, otherInfo?: Info) {
      if (Math.random() >= num) {
        return;
      }
      _origin.call(this, myInfo, otherInfo);
    };
  };
}

export { probability };
