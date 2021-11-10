export default function utils(Target: any) {
  Target.prototype.plus = function (a: number, b: number) {
    return a + b;
  };
  Target.prototype.minus = function (a: number, b: number) {
    return a + b;
  };
}
