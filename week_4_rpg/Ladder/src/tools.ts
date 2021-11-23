//獲取不重複亂數
function getRandom(ranges: number, count: number): number[] {
  const array: number[] = [];
  const arrayLength = ranges;
  for (let i = 0; i < count; i++) {
    let radomNum = Math.floor(Math.random() * arrayLength);
    if (array.indexOf(radomNum) == -1) {
      // indexOf 返回值為-1表示陣列中沒有和新亂數重複的值
      array.push(radomNum);
    } else {
      // 有重複值i--，不新增重複的值到陣列中，並再迴圈一次
      i--;
    }
  }
  return array;
}

export { getRandom };
