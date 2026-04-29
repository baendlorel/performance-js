it('普通函数和箭头函数的内存占用量', () => {
  LEN_RATIO = 0.8;
  const arr = [];

  const m0 = process.memoryUsage().heapUsed;

  for (let i = 0; i < LEN; i++) {
    arr.push(function () {});
  }

  const m1 = process.memoryUsage().heapUsed;

  for (let i = 0; i < LEN; i++) {
    arr.push(() => {});
  }

  const m2 = process.memoryUsage().heapUsed;

  return `${LEN}个函数: ${(m1 - m0) / MB} MB, ${LEN}个箭头函数: ${(m2 - m1) / MB} MB`;
});
