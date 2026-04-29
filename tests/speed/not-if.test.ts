it(import.meta.filename, () => {
  LEN_RATIO = 10;
  let a = Array.from({ length: LEN }, () => Math.random() > 0.85);
  let falseCount = 0;
  let trueCount = 0;

  // 第一种写法
  const start = performance.now();
  for (let i = 0; i < LEN; i++) {
    if (!a[i]) {
      falseCount++;
    } else {
      trueCount++;
    }
  }
  const s1 = performance.now();

  // 第二种写法
  for (let i = 0; i < LEN; i++) {
    if (a[i]) {
      trueCount++;
    } else {
      falseCount++;
    }
  }
  const s2 = performance.now();

  return [`false概率:${falseCount / LEN / 2}`, `写法if !a: ${s1 - start} ms`, `写法if a: ${s2 - s1} ms`];
});
