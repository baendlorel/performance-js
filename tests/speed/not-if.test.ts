kt(import.meta.filename, () => {
  const innerITER_COUNT = ITER_COUNT * 10;
  let a = Array.from({ length: innerITER_COUNT }, () => Math.random() > 0.85);
  let falseCount = 0;
  let trueCount = 0;

  // 第一种写法
  const start = performance.now();
  for (let i = 0; i < innerITER_COUNT; i++) {
    if (!a[i]) {
      falseCount++;
    } else {
      trueCount++;
    }
  }
  const s1 = performance.now();

  // 第二种写法
  for (let i = 0; i < innerITER_COUNT; i++) {
    if (a[i]) {
      trueCount++;
    } else {
      falseCount++;
    }
  }
  const s2 = performance.now();

  return [`false概率:${falseCount / innerITER_COUNT / 2}`, `写法if !a: ${s1 - start} ms`, `写法if a: ${s2 - s1} ms`];
});
