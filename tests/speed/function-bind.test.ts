it('function.bind和直接wrap一层的速度对比', () => {
  LEN_RATIO = 10;

  const a = function (this: any) {
    this.x++;
  };

  const thisArg = { x: 0 };

  const aBind = a.bind(thisArg); // 使用 bind 包装函数
  const aWrap = function () {
    a.call(thisArg); // 直接 wrap 一层，调用原函数
  };

  const s0 = performance.now();
  for (let i = 0; i < LEN; i++) {
    aBind();
  }

  const s1 = performance.now();
  for (let i = 0; i < LEN; i++) {
    aWrap();
  }
  const s2 = performance.now();

  return `aBind: ${s1 - s0}ms, aWrap: ${s2 - s1}ms`;
});
